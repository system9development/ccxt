import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
export default class Exchange extends _Exchange {
    publicGetDepth(params?: {}): Promise<implicitReturnType>;
    publicGetOrders(params?: {}): Promise<implicitReturnType>;
    publicGetTicker(params?: {}): Promise<implicitReturnType>;
    privatePostBalance(params?: {}): Promise<implicitReturnType>;
    privatePostTradeAdd(params?: {}): Promise<implicitReturnType>;
    privatePostTradeCancel(params?: {}): Promise<implicitReturnType>;
    privatePostTradeList(params?: {}): Promise<implicitReturnType>;
    privatePostTradeView(params?: {}): Promise<implicitReturnType>;
    privatePostWallet(params?: {}): Promise<implicitReturnType>;
}
