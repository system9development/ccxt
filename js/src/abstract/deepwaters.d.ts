import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
interface Exchange {
    publicGetAssets(params?: {}): Promise<implicitReturnType>;
    publicGetPairs(params?: {}): Promise<implicitReturnType>;
    publicGetPairsPairOrderbook(params?: {}): Promise<implicitReturnType>;
    publicGetTime(params?: {}): Promise<implicitReturnType>;
    privateGetCustomer(params?: {}): Promise<implicitReturnType>;
    privateGetCustomerApiKeyStatus(params?: {}): Promise<implicitReturnType>;
    privateGetOrders(params?: {}): Promise<implicitReturnType>;
    privateGetTrades(params?: {}): Promise<implicitReturnType>;
    privateGetOrdersByVenueOrderIdId(params?: {}): Promise<implicitReturnType>;
    privateGetOrdersByCustomerObjectIdId(params?: {}): Promise<implicitReturnType>;
    privatePostOrders(params?: {}): Promise<implicitReturnType>;
    privateDeleteOrders(params?: {}): Promise<implicitReturnType>;
    privateDeleteOrdersByVenueOrderIdId(params?: {}): Promise<implicitReturnType>;
    privateDeleteOrdersByCustomerObjectIdId(params?: {}): Promise<implicitReturnType>;
    dwnonce?: number;
}
declare abstract class Exchange extends _Exchange {
}
export default Exchange;
