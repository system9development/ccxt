import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
export default class Exchange extends _Exchange {
    publicGetPairTicker(params?: {}): Promise<implicitReturnType>;
    publicGetPairDepth(params?: {}): Promise<implicitReturnType>;
    publicGetPairTransactions(params?: {}): Promise<implicitReturnType>;
    publicGetPairTransactionsYyyymmdd(params?: {}): Promise<implicitReturnType>;
    publicGetPairCandlestickCandletypeYyyymmdd(params?: {}): Promise<implicitReturnType>;
    privateGetUserAssets(params?: {}): Promise<implicitReturnType>;
    privateGetUserSpotOrder(params?: {}): Promise<implicitReturnType>;
    privateGetUserSpotActiveOrders(params?: {}): Promise<implicitReturnType>;
    privateGetUserSpotTradeHistory(params?: {}): Promise<implicitReturnType>;
    privateGetUserWithdrawalAccount(params?: {}): Promise<implicitReturnType>;
    privatePostUserSpotOrder(params?: {}): Promise<implicitReturnType>;
    privatePostUserSpotCancelOrder(params?: {}): Promise<implicitReturnType>;
    privatePostUserSpotCancelOrders(params?: {}): Promise<implicitReturnType>;
    privatePostUserSpotOrdersInfo(params?: {}): Promise<implicitReturnType>;
    privatePostUserRequestWithdrawal(params?: {}): Promise<implicitReturnType>;
    marketsGetSpotPairs(params?: {}): Promise<implicitReturnType>;
}
