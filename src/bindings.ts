
// This file was generated by [tauri-specta](https://github.com/oscartbeaumont/tauri-specta). Do not edit this file manually.

/** user-defined commands **/


export const commands = {
async initialize() : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("initialize") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async login(req: Login) : Promise<Result<LoginResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("login", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async logout(req: Logout) : Promise<Result<LogoutResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("logout", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async resync(req: Resync) : Promise<Result<ResyncResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("resync", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async generateMnemonic(req: GenerateMnemonic) : Promise<Result<GenerateMnemonicResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("generate_mnemonic", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async importKey(req: ImportKey) : Promise<Result<ImportKeyResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("import_key", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async deleteKey(req: DeleteKey) : Promise<Result<DeleteKeyResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("delete_key", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async renameKey(req: RenameKey) : Promise<Result<RenameKeyResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("rename_key", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getKeys(req: GetKeys) : Promise<Result<GetKeysResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_keys", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getKey(req: GetKey) : Promise<Result<GetKeyResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_key", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getSecretKey(req: GetSecretKey) : Promise<Result<GetSecretKeyResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_secret_key", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async sendXch(req: SendXch) : Promise<Result<TransactionResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("send_xch", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async combineXch(req: CombineXch) : Promise<Result<TransactionResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("combine_xch", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async splitXch(req: SplitXch) : Promise<Result<TransactionResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("split_xch", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async sendCat(req: SendCat) : Promise<Result<TransactionResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("send_cat", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async combineCat(req: CombineCat) : Promise<Result<TransactionResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("combine_cat", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async splitCat(req: SplitCat) : Promise<Result<TransactionResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("split_cat", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async issueCat(req: IssueCat) : Promise<Result<TransactionResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("issue_cat", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async createDid(req: CreateDid) : Promise<Result<TransactionResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("create_did", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async bulkMintNfts(req: BulkMintNfts) : Promise<Result<TransactionResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("bulk_mint_nfts", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async transferNfts(req: TransferNfts) : Promise<Result<TransactionResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("transfer_nfts", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async transferDids(req: TransferDids) : Promise<Result<TransactionResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("transfer_dids", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async addNftUri(req: AddNftUri) : Promise<Result<TransactionResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("add_nft_uri", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async assignNftsToDid(req: AssignNftsToDid) : Promise<Result<TransactionResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("assign_nfts_to_did", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async signCoinSpends(req: SignCoinSpends) : Promise<Result<SignCoinSpendsResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("sign_coin_spends", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async submitTransaction(req: SubmitTransaction) : Promise<Result<SubmitTransactionResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("submit_transaction", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getSyncStatus(req: GetSyncStatus) : Promise<Result<GetSyncStatusResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_sync_status", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getDerivations(req: GetDerivations) : Promise<Result<GetDerivationsResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_derivations", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getXchCoins(req: GetXchCoins) : Promise<Result<GetXchCoinsResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_xch_coins", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getCatCoins(req: GetCatCoins) : Promise<Result<GetCatCoinsResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_cat_coins", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getCats(req: GetCats) : Promise<Result<GetCatsResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_cats", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getCat(req: GetCat) : Promise<Result<GetCatResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_cat", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getDids(req: GetDids) : Promise<Result<GetDidsResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_dids", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getNftStatus(req: GetNftStatus) : Promise<Result<GetNftStatusResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_nft_status", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getNftCollections(req: GetNftCollections) : Promise<Result<GetNftCollectionsResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_nft_collections", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getNftCollection(req: GetNftCollection) : Promise<Result<GetNftCollectionResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_nft_collection", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getNfts(req: GetNfts) : Promise<Result<GetNftsResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_nfts", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getNft(req: GetNft) : Promise<Result<GetNftResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_nft", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getPendingTransactions(req: GetPendingTransactions) : Promise<Result<GetPendingTransactionsResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_pending_transactions", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async validateAddress(address: string) : Promise<Result<boolean, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("validate_address", { address }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async makeOffer(req: MakeOffer) : Promise<Result<MakeOfferResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("make_offer", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async takeOffer(req: TakeOffer) : Promise<Result<TakeOfferResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("take_offer", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async viewOffer(req: ViewOffer) : Promise<Result<ViewOfferResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("view_offer", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async importOffer(req: ImportOffer) : Promise<Result<ImportOfferResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("import_offer", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getOffers(req: GetOffers) : Promise<Result<GetOffersResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_offers", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getOffer(req: GetOffer) : Promise<Result<GetOfferResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_offer", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async deleteOffer(req: DeleteOffer) : Promise<Result<DeleteOfferResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("delete_offer", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async networkConfig() : Promise<Result<NetworkConfig, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("network_config") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async setDiscoverPeers(req: SetDiscoverPeers) : Promise<Result<SetDiscoverPeersResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("set_discover_peers", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async setTargetPeers(req: SetTargetPeers) : Promise<Result<SetTargetPeersResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("set_target_peers", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async setNetworkId(req: SetNetworkId) : Promise<Result<SetNetworkIdResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("set_network_id", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async walletConfig(fingerprint: number) : Promise<Result<WalletConfig, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("wallet_config", { fingerprint }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async setDeriveAutomatically(req: SetDeriveAutomatically) : Promise<Result<SetDeriveAutomaticallyResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("set_derive_automatically", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async setDerivationBatchSize(req: SetDerivationBatchSize) : Promise<Result<SetDerivationBatchSizeResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("set_derivation_batch_size", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getNetworks(req: GetNetworks) : Promise<Result<GetNetworksResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_networks", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async updateCat(req: UpdateCat) : Promise<Result<UpdateCatResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("update_cat", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async removeCat(req: RemoveCat) : Promise<Result<RemoveCatResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("remove_cat", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async updateDid(req: UpdateDid) : Promise<Result<UpdateDidResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("update_did", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async updateNft(req: UpdateNft) : Promise<Result<UpdateNftResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("update_nft", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getPeers(req: GetPeers) : Promise<Result<GetPeersResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_peers", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async addPeer(req: AddPeer) : Promise<Result<AddPeerResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("add_peer", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async removePeer(req: RemovePeer) : Promise<Result<RemovePeerResponse, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("remove_peer", { req }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
}
}

/** user-defined events **/


export const events = __makeEvents__<{
syncEvent: SyncEvent
}>({
syncEvent: "sync-event"
})

/** user-defined constants **/



/** user-defined types **/

export type AddNftUri = { nft_id: string; uri: string; fee: Amount; kind: NftUriKind; auto_submit?: boolean }
export type AddPeer = { ip: string; trusted: boolean }
export type AddPeerResponse = Record<string, never>
export type Amount = string
export type Assets = { xch: Amount; cats: CatAmount[]; nfts: string[] }
export type AssignNftsToDid = { nft_ids: string[]; did_id: string | null; fee: Amount; auto_submit?: boolean }
export type BulkMintNfts = { mints: NftMint[]; did_id: string; fee: Amount; auto_submit?: boolean }
export type CatAmount = { asset_id: string; amount: Amount }
export type CatRecord = { asset_id: string; name: string | null; ticker: string | null; description: string | null; icon_url: string | null; visible: boolean; balance: Amount }
export type CoinJson = { parent_coin_info: string; puzzle_hash: string; amount: Amount }
export type CoinRecord = { coin_id: string; address: string; amount: Amount; created_height: number | null; spent_height: number | null; create_transaction_id: string | null; spend_transaction_id: string | null; offer_id: string | null }
export type CoinSpendJson = { coin: CoinJson; puzzle_reveal: string; solution: string }
export type CombineCat = { coin_ids: string[]; fee: Amount; auto_submit?: boolean }
export type CombineXch = { coin_ids: string[]; fee: Amount; auto_submit?: boolean }
export type CreateDid = { name: string; fee: Amount; auto_submit?: boolean }
export type DeleteKey = { fingerprint: number }
export type DeleteKeyResponse = Record<string, never>
export type DeleteOffer = { offer_id: string }
export type DeleteOfferResponse = Record<string, never>
export type DerivationRecord = { index: number; public_key: string; address: string }
export type DidRecord = { launcher_id: string; name: string | null; visible: boolean; coin_id: string; address: string; amount: Amount; created_height: number | null; create_transaction_id: string | null }
export type Error = { kind: ErrorKind; reason: string }
export type ErrorKind = "wallet" | "api" | "not_found" | "unauthorized" | "internal"
export type GenerateMnemonic = { use_24_words: boolean }
export type GenerateMnemonicResponse = { mnemonic: string }
export type GetCat = { asset_id: string }
export type GetCatCoins = { asset_id: string }
export type GetCatCoinsResponse = { coins: CoinRecord[] }
export type GetCatResponse = { cat: CatRecord | null }
export type GetCats = Record<string, never>
export type GetCatsResponse = { cats: CatRecord[] }
export type GetDerivations = { offset: number; limit: number }
export type GetDerivationsResponse = { derivations: DerivationRecord[] }
export type GetDids = Record<string, never>
export type GetDidsResponse = { dids: DidRecord[] }
export type GetKey = { fingerprint?: number | null }
export type GetKeyResponse = { key: KeyInfo | null }
export type GetKeys = Record<string, never>
export type GetKeysResponse = { keys: KeyInfo[] }
export type GetNetworks = Record<string, never>
export type GetNetworksResponse = { networks: { [key in string]: Network } }
export type GetNft = { nft_id: string }
export type GetNftCollection = { collection_id: string | null }
export type GetNftCollectionResponse = { collection: NftCollectionRecord | null }
export type GetNftCollections = { offset: number; limit: number; include_hidden: boolean }
export type GetNftCollectionsResponse = { collections: NftCollectionRecord[] }
export type GetNftResponse = { nft: NftInfo | null }
export type GetNftStatus = Record<string, never>
export type GetNftStatusResponse = { nfts: number; visible_nfts: number; collections: number; visible_collections: number }
export type GetNfts = { collection_id: string | null; offset: number; limit: number; sort_mode: NftSortMode; include_hidden: boolean }
export type GetNftsResponse = { nfts: NftRecord[] }
export type GetOffer = { offer_id: string }
export type GetOfferResponse = { offer: OfferRecord }
export type GetOffers = Record<string, never>
export type GetOffersResponse = { offers: OfferRecord[] }
export type GetPeers = Record<string, never>
export type GetPeersResponse = { peers: PeerRecord[] }
export type GetPendingTransactions = Record<string, never>
export type GetPendingTransactionsResponse = { transactions: PendingTransactionRecord[] }
export type GetSecretKey = { fingerprint: number }
export type GetSecretKeyResponse = { secrets: SecretKeyInfo | null }
export type GetSyncStatus = Record<string, never>
export type GetSyncStatusResponse = { balance: Amount; unit: Unit; synced_coins: number; total_coins: number; receive_address: string; burn_address: string }
export type GetXchCoins = Record<string, never>
export type GetXchCoinsResponse = { coins: CoinRecord[] }
export type ImportKey = { name: string; key: string; save_secrets?: boolean; login?: boolean }
export type ImportKeyResponse = { fingerprint: number }
export type ImportOffer = { offer: string }
export type ImportOfferResponse = Record<string, never>
export type IssueCat = { name: string; ticker: string; amount: Amount; fee: Amount; auto_submit?: boolean }
export type KeyInfo = { name: string; fingerprint: number; public_key: string; kind: KeyKind; has_secrets: boolean }
export type KeyKind = "bls"
export type Login = { fingerprint: number }
export type LoginResponse = Record<string, never>
export type Logout = Record<string, never>
export type LogoutResponse = Record<string, never>
export type MakeOffer = { requested_assets: Assets; offered_assets: Assets; fee: Amount; expires_at_second: number | null }
export type MakeOfferResponse = { offer: string }
export type Network = { default_port: number; ticker: string; address_prefix: string; precision: number; genesis_challenge: string; agg_sig_me: string; dns_introducers: string[] }
export type NetworkConfig = { network_id: string; target_peers: number; discover_peers: boolean }
export type NftCollectionRecord = { collection_id: string; did_id: string; metadata_collection_id: string; visible: boolean; name: string | null; icon: string | null; nfts: number; visible_nfts: number }
export type NftInfo = { launcher_id: string; collection_id: string | null; collection_name: string | null; minter_did: string | null; owner_did: string | null; visible: boolean; coin_id: string; address: string; royalty_address: string; royalty_percent: string; data_uris: string[]; data_hash: string | null; metadata_uris: string[]; metadata_hash: string | null; license_uris: string[]; license_hash: string | null; edition_number: number | null; edition_total: number | null; created_height: number | null; data: string | null; data_mime_type: string | null; metadata: string | null }
export type NftMint = { edition_number: number | null; edition_total: number | null; data_uris: string[]; metadata_uris: string[]; license_uris: string[]; royalty_address: string | null; royalty_percent: Amount }
export type NftRecord = { launcher_id: string; collection_id: string | null; collection_name: string | null; minter_did: string | null; owner_did: string | null; visible: boolean; sensitive_content: boolean; name: string | null; created_height: number | null; data_mime_type: string | null; data: string | null }
export type NftSortMode = "name" | "recent"
export type NftUriKind = "data" | "metadata" | "license"
export type OfferAssets = { xch: OfferXch; cats: { [key in string]: OfferCat }; nfts: { [key in string]: OfferNft } }
export type OfferCat = { amount: Amount; royalty: Amount; name: string | null; ticker: string | null; icon_url: string | null }
export type OfferNft = { image_data: string | null; image_mime_type: string | null; name: string | null; royalty_percent: string; royalty_address: string }
export type OfferRecord = { offer_id: string; offer: string; status: OfferRecordStatus; creation_date: string; summary: OfferSummary }
export type OfferRecordStatus = "active" | "completed" | "cancelled" | "expired"
export type OfferSummary = { fee: Amount; maker: OfferAssets; taker: OfferAssets }
export type OfferXch = { amount: Amount; royalty: Amount }
export type PeerRecord = { ip_addr: string; port: number; trusted: boolean; peak_height: number }
export type PendingTransactionRecord = { transaction_id: string; fee: Amount; submitted_at: string | null }
export type RemoveCat = { asset_id: string }
export type RemoveCatResponse = Record<string, never>
export type RemovePeer = { ip: string; ban: boolean }
export type RemovePeerResponse = Record<string, never>
export type RenameKey = { fingerprint: number; name: string }
export type RenameKeyResponse = Record<string, never>
export type Resync = { fingerprint: number; delete_offer_files?: boolean }
export type ResyncResponse = Record<string, never>
export type SecretKeyInfo = { mnemonic: string | null; secret_key: string }
export type SendCat = { asset_id: string; address: string; amount: Amount; fee: Amount; auto_submit?: boolean }
export type SendXch = { address: string; amount: Amount; fee: Amount; auto_submit?: boolean }
export type SetDerivationBatchSize = { fingerprint: number; derivation_batch_size: number }
export type SetDerivationBatchSizeResponse = Record<string, never>
export type SetDeriveAutomatically = { fingerprint: number; derive_automatically: boolean }
export type SetDeriveAutomaticallyResponse = Record<string, never>
export type SetDiscoverPeers = { discover_peers: boolean }
export type SetDiscoverPeersResponse = Record<string, never>
export type SetNetworkId = { network_id: string }
export type SetNetworkIdResponse = Record<string, never>
export type SetTargetPeers = { target_peers: number }
export type SetTargetPeersResponse = Record<string, never>
export type SignCoinSpends = { coin_spends: CoinSpendJson[]; auto_submit?: boolean }
export type SignCoinSpendsResponse = { spend_bundle: SpendBundleJson }
export type SpendBundleJson = { coin_spends: CoinSpendJson[]; aggregated_signature: string }
export type SplitCat = { coin_ids: string[]; output_count: number; fee: Amount; auto_submit?: boolean }
export type SplitXch = { coin_ids: string[]; output_count: number; fee: Amount; auto_submit?: boolean }
export type SubmitTransaction = { spend_bundle: SpendBundleJson }
export type SubmitTransactionResponse = Record<string, never>
export type SyncEvent = { type: "start"; ip: string } | { type: "stop" } | { type: "subscribed" } | { type: "derivation" } | { type: "coin_state" } | { type: "puzzle_batch_synced" } | { type: "cat_info" } | { type: "did_info" } | { type: "nft_data" }
export type TakeOffer = { offer: string; fee: Amount; auto_submit?: boolean }
export type TakeOfferResponse = { summary: TransactionSummary; spend_bundle: SpendBundleJson }
export type TransactionInput = ({ type: "unknown" } | { type: "xch" } | { type: "launcher" } | { type: "cat"; asset_id: string; name: string | null; ticker: string | null; icon_url: string | null } | { type: "did"; launcher_id: string; name: string | null } | { type: "nft"; launcher_id: string; image_data: string | null; image_mime_type: string | null; name: string | null }) & { coin_id: string; amount: Amount; address: string; outputs: TransactionOutput[] }
export type TransactionOutput = { coin_id: string; amount: Amount; address: string; receiving: boolean; burning: boolean }
export type TransactionResponse = { summary: TransactionSummary; coin_spends: CoinSpendJson[] }
export type TransactionSummary = { fee: Amount; inputs: TransactionInput[] }
export type TransferDids = { did_ids: string[]; address: string; fee: Amount; auto_submit?: boolean }
export type TransferNfts = { nft_ids: string[]; address: string; fee: Amount; auto_submit?: boolean }
export type Unit = { ticker: string; decimals: number }
export type UpdateCat = { record: CatRecord }
export type UpdateCatResponse = Record<string, never>
export type UpdateDid = { did_id: string; name: string | null; visible: boolean }
export type UpdateDidResponse = Record<string, never>
export type UpdateNft = { nft_id: string; visible: boolean }
export type UpdateNftResponse = Record<string, never>
export type ViewOffer = { offer: string }
export type ViewOfferResponse = { offer: OfferSummary }
export type WalletConfig = { name: string; derive_automatically: boolean; derivation_batch_size: number }

/** tauri-specta globals **/

import {
	invoke as TAURI_INVOKE,
	Channel as TAURI_CHANNEL,
} from "@tauri-apps/api/core";
import * as TAURI_API_EVENT from "@tauri-apps/api/event";
import { type WebviewWindow as __WebviewWindow__ } from "@tauri-apps/api/webviewWindow";

type __EventObj__<T> = {
	listen: (
		cb: TAURI_API_EVENT.EventCallback<T>,
	) => ReturnType<typeof TAURI_API_EVENT.listen<T>>;
	once: (
		cb: TAURI_API_EVENT.EventCallback<T>,
	) => ReturnType<typeof TAURI_API_EVENT.once<T>>;
	emit: null extends T
		? (payload?: T) => ReturnType<typeof TAURI_API_EVENT.emit>
		: (payload: T) => ReturnType<typeof TAURI_API_EVENT.emit>;
};

export type Result<T, E> =
	| { status: "ok"; data: T }
	| { status: "error"; error: E };

function __makeEvents__<T extends Record<string, any>>(
	mappings: Record<keyof T, string>,
) {
	return new Proxy(
		{} as unknown as {
			[K in keyof T]: __EventObj__<T[K]> & {
				(handle: __WebviewWindow__): __EventObj__<T[K]>;
			};
		},
		{
			get: (_, event) => {
				const name = mappings[event as keyof T];

				return new Proxy((() => {}) as any, {
					apply: (_, __, [window]: [__WebviewWindow__]) => ({
						listen: (arg: any) => window.listen(name, arg),
						once: (arg: any) => window.once(name, arg),
						emit: (arg: any) => window.emit(name, arg),
					}),
					get: (_, command: keyof __EventObj__<any>) => {
						switch (command) {
							case "listen":
								return (arg: any) => TAURI_API_EVENT.listen(name, arg);
							case "once":
								return (arg: any) => TAURI_API_EVENT.once(name, arg);
							case "emit":
								return (arg: any) => TAURI_API_EVENT.emit(name, arg);
						}
					},
				});
			},
		},
	);
}
