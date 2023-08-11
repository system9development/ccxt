import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
interface Exchange {
    publicGetApiV1MarketTickers(params?: {}): Promise<implicitReturnType>;
    publicGetApiV1MarketTradeSymbol(params?: {}): Promise<implicitReturnType>;
    publicGetApiV1MarketDepthSymbol(params?: {}): Promise<implicitReturnType>;
    publicPostV2PublicConfigSpotSymbols(params?: {}): Promise<implicitReturnType>;
    privateGetApiV2TradeOrderActive(params?: {}): Promise<implicitReturnType>;
    privateGetApiTradeOrderHistoryOrders(params?: {}): Promise<implicitReturnType>;
    privateGetApiV2TradeOrderOrderInfo(params?: {}): Promise<implicitReturnType>;
    privateGetApiTradeMatchAccountMatches(params?: {}): Promise<implicitReturnType>;
    privatePostApiSpotAccountList(params?: {}): Promise<implicitReturnType>;
    privatePostApiTradeOrderPlace(params?: {}): Promise<implicitReturnType>;
    privatePostApiTradeOrderCancel(params?: {}): Promise<implicitReturnType>;
    privatePostApiTradeOrderCancelAll(params?: {}): Promise<implicitReturnType>;
}
declare abstract class Exchange extends _Exchange {
}
export default Exchange;
