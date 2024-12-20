use std::{sync::Arc, time::Duration};

use chia::protocol::{Bytes32, CoinState};
use futures_util::{stream::FuturesUnordered, StreamExt};
use sage_database::Database;
use tokio::{
    sync::{mpsc, Mutex},
    task::spawn_blocking,
    time::{sleep, timeout},
};
use tracing::{debug, instrument};

use crate::{
    database::insert_puzzle, fetch_nft_did, ChildKind, PeerState, SyncCommand, SyncEvent,
    WalletError, WalletPeer,
};

#[derive(Debug)]
pub struct PuzzleQueue {
    db: Database,
    genesis_challenge: Bytes32,
    state: Arc<Mutex<PeerState>>,
    sync_sender: mpsc::Sender<SyncEvent>,
    command_sender: mpsc::Sender<SyncCommand>,
}

impl PuzzleQueue {
    pub fn new(
        db: Database,
        genesis_challenge: Bytes32,
        state: Arc<Mutex<PeerState>>,
        sync_sender: mpsc::Sender<SyncEvent>,
        command_sender: mpsc::Sender<SyncCommand>,
    ) -> Self {
        Self {
            db,
            genesis_challenge,
            state,
            sync_sender,
            command_sender,
        }
    }

    pub async fn start(mut self) -> Result<(), WalletError> {
        loop {
            let subscriptions = self.process_batch().await?;

            self.command_sender
                .send(SyncCommand::SubscribeCoins {
                    coin_ids: subscriptions,
                })
                .await
                .ok();

            self.sync_sender
                .send(SyncEvent::PuzzleBatchSynced)
                .await
                .ok();

            sleep(Duration::from_millis(150)).await;
        }
    }

    async fn process_batch(&mut self) -> Result<Vec<Bytes32>, WalletError> {
        let peers = self.state.lock().await.peers();

        if peers.is_empty() {
            sleep(Duration::from_secs(3)).await;
            return Ok(Vec::new());
        }

        let coin_states = self.db.unsynced_coin_states(peers.len()).await?;

        if coin_states.is_empty() {
            sleep(Duration::from_secs(3)).await;
            return Ok(Vec::new());
        }

        debug!(
            "Syncing a batch of {} coins",
            coin_states.len().min(peers.len())
        );

        let mut futures = FuturesUnordered::new();

        for (peer, coin_state) in peers.into_iter().zip(coin_states.into_iter()) {
            let db = self.db.clone();
            let genesis_challenge = self.genesis_challenge;
            let addr = peer.socket_addr();
            let coin_id = coin_state.coin.coin_id();

            futures.push(async move {
                let result = fetch_puzzle(&peer, &db, genesis_challenge, coin_state).await;
                (addr, coin_id, result)
            });
        }

        let mut subscriptions = Vec::new();

        while let Some((addr, coin_id, result)) = futures.next().await {
            match result {
                Ok(subscribe) => {
                    if subscribe {
                        subscriptions.push(coin_id);
                    }
                }
                Err(error) => {
                    // TODO: Not all errors should result in this exact behavior.
                    debug!(
                        "Failed to lookup puzzle of {} from peer {}: {}",
                        coin_id, addr, error
                    );

                    self.state.lock().await.ban(
                        addr.ip(),
                        Duration::from_secs(300),
                        "failed puzzle lookup",
                    );
                }
            }
        }

        Ok(subscriptions)
    }
}

/// Fetches info for a coin's puzzle and inserts it into the database.
#[instrument(skip(peer, db))]
async fn fetch_puzzle(
    peer: &WalletPeer,
    db: &Database,
    genesis_challenge: Bytes32,
    coin_state: CoinState,
) -> Result<bool, WalletError> {
    let parent_spend = timeout(
        Duration::from_secs(15),
        peer.fetch_coin_spend(coin_state.coin.parent_coin_info, genesis_challenge),
    )
    .await??;

    let info = spawn_blocking(move || {
        ChildKind::from_parent(
            parent_spend.coin,
            &parent_spend.puzzle_reveal,
            &parent_spend.solution,
            coin_state.coin,
        )
    })
    .await??;

    let minter_did = if let ChildKind::Nft { info, .. } = &info {
        fetch_nft_did(peer, genesis_challenge, info.launcher_id).await?
    } else {
        None
    };

    let subscribe = info.subscribe();

    let remove = match info.p2_puzzle_hash() {
        Some(p2_puzzle_hash) => !db.is_p2_puzzle_hash(p2_puzzle_hash).await?,
        None => true,
    };

    if remove {
        db.delete_coin_state(coin_state.coin.coin_id()).await?;
    } else {
        let mut tx = db.tx().await?;
        insert_puzzle(&mut tx, coin_state, info, minter_did).await?;
        tx.commit().await?;
    }

    Ok(subscribe)
}
