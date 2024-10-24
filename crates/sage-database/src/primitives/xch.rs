use chia::protocol::{Bytes32, Coin};
use sqlx::SqliteExecutor;

use crate::{
    to_bytes, to_bytes32, to_coin, to_coin_state, CoinStateRow, Database, DatabaseTx, Result,
};

impl Database {
    pub async fn spendable_coins(&self) -> Result<Vec<Coin>> {
        spendable_coins(&self.pool).await
    }
}

impl<'a> DatabaseTx<'a> {
    pub async fn p2_coin_states(&mut self) -> Result<Vec<CoinStateRow>> {
        p2_coin_states(&mut *self.tx).await
    }

    pub async fn insert_p2_coin(&mut self, coin_id: Bytes32) -> Result<()> {
        insert_p2_coin(&mut *self.tx, coin_id).await
    }

    pub async fn spendable_balance(&mut self) -> Result<u128> {
        spendable_balance(&mut *self.tx).await
    }
}

async fn insert_p2_coin(conn: impl SqliteExecutor<'_>, coin_id: Bytes32) -> Result<()> {
    let coin_id = coin_id.as_ref();

    sqlx::query!(
        "
        REPLACE INTO `p2_coins` (`coin_id`) VALUES (?)
        ",
        coin_id
    )
    .execute(conn)
    .await?;

    Ok(())
}

async fn spendable_balance(conn: impl SqliteExecutor<'_>) -> Result<u128> {
    let row = sqlx::query!(
        "
        SELECT `coin_states`.`amount` FROM `coin_states` INDEXED BY `coin_spent`
        INNER JOIN `p2_coins` ON `coin_states`.`coin_id` = `p2_coins`.`coin_id`
        LEFT JOIN `transaction_spends` ON `coin_states`.`coin_id` = `transaction_spends`.`coin_id`
        WHERE `coin_states`.`spent_height` IS NULL
        AND `transaction_spends`.`coin_id` IS NULL
        AND `coin_states`.`transaction_id` IS NULL
        "
    )
    .fetch_all(conn)
    .await?;

    row.iter()
        .map(|row| Ok(u64::from_be_bytes(to_bytes(&row.amount)?) as u128))
        .sum::<Result<u128>>()
}

async fn spendable_coins(conn: impl SqliteExecutor<'_>) -> Result<Vec<Coin>> {
    let rows = sqlx::query!(
        "
        SELECT `coin_states`.`parent_coin_id`, `coin_states`.`puzzle_hash`, `coin_states`.`amount` FROM `coin_states`
        INNER JOIN `p2_coins` ON `coin_states`.`coin_id` = `p2_coins`.`coin_id`
        LEFT JOIN `transaction_spends` ON `coin_states`.`coin_id` = `transaction_spends`.`coin_id`
        WHERE `coin_states`.`spent_height` IS NULL
        AND `transaction_spends`.`coin_id` IS NULL
        AND `coin_states`.`transaction_id` IS NULL
        "
    )
    .fetch_all(conn)
    .await?;

    rows.iter()
        .map(|row| to_coin(&row.parent_coin_id, &row.puzzle_hash, &row.amount))
        .collect()
}

async fn p2_coin_states(conn: impl SqliteExecutor<'_>) -> Result<Vec<CoinStateRow>> {
    let rows = sqlx::query!(
        "
        SELECT `coin_states`.* FROM `coin_states`
        INNER JOIN `p2_coins` ON `coin_states`.`coin_id` = `p2_coins`.`coin_id`
        "
    )
    .fetch_all(conn)
    .await?;

    rows.into_iter()
        .map(|row| {
            Ok(CoinStateRow {
                coin_state: to_coin_state(
                    to_coin(&row.parent_coin_id, &row.puzzle_hash, &row.amount)?,
                    row.created_height,
                    row.spent_height,
                )?,
                transaction_id: row.transaction_id.map(|id| to_bytes32(&id)).transpose()?,
            })
        })
        .collect()
}
