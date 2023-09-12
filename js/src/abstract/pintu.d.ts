import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
interface Exchange {
    publicGetPublicGetSymbolsReference(params?: {}): Promise<implicitReturnType>;
    publicGetPublicGetBook(params?: {}): Promise<implicitReturnType>;
    privatePostPrivatePlaceOrder(params?: {}): Promise<implicitReturnType>;
    privatePostPrivateCancelOrder(params?: {}): Promise<implicitReturnType>;
    privatePostPrivateGetAccountInformation(params?: {}): Promise<implicitReturnType>;
    privatePostPrivateGetOpenOrders(params?: {}): Promise<implicitReturnType>;
    privatePostPrivateGetOrderHistory(params?: {}): Promise<implicitReturnType>;
    privatePostPrivateGetOrderDetails(params?: {}): Promise<implicitReturnType>;
    privatePostPrivateGetTradeHistory(params?: {}): Promise<implicitReturnType>;
}
declare abstract class Exchange extends _Exchange {
}
export default Exchange;
