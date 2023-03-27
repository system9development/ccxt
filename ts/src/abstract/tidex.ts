// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

export default class Exchange extends _Exchange {
    webGetCurrency (params?: {}): Promise<implicitReturnType> { return this['webGetCurrency'] (params); }
    webGetPairs (params?: {}): Promise<implicitReturnType> { return this['webGetPairs'] (params); }
    webGetTickers (params?: {}): Promise<implicitReturnType> { return this['webGetTickers'] (params); }
    webGetOrders (params?: {}): Promise<implicitReturnType> { return this['webGetOrders'] (params); }
    webGetOrdershistory (params?: {}): Promise<implicitReturnType> { return this['webGetOrdershistory'] (params); }
    webGetTradeData (params?: {}): Promise<implicitReturnType> { return this['webGetTradeData'] (params); }
    webGetTradeDataId (params?: {}): Promise<implicitReturnType> { return this['webGetTradeDataId'] (params); }
    publicGetInfo (params?: {}): Promise<implicitReturnType> { return this['publicGetInfo'] (params); }
    publicGetTickerPair (params?: {}): Promise<implicitReturnType> { return this['publicGetTickerPair'] (params); }
    publicGetDepthPair (params?: {}): Promise<implicitReturnType> { return this['publicGetDepthPair'] (params); }
    publicGetTradesPair (params?: {}): Promise<implicitReturnType> { return this['publicGetTradesPair'] (params); }
    privatePostGetInfoExt (params?: {}): Promise<implicitReturnType> { return this['privatePostGetInfoExt'] (params); }
    privatePostGetInfo (params?: {}): Promise<implicitReturnType> { return this['privatePostGetInfo'] (params); }
    privatePostTrade (params?: {}): Promise<implicitReturnType> { return this['privatePostTrade'] (params); }
    privatePostActiveOrders (params?: {}): Promise<implicitReturnType> { return this['privatePostActiveOrders'] (params); }
    privatePostOrderInfo (params?: {}): Promise<implicitReturnType> { return this['privatePostOrderInfo'] (params); }
    privatePostCancelOrder (params?: {}): Promise<implicitReturnType> { return this['privatePostCancelOrder'] (params); }
    privatePostTradeHistory (params?: {}): Promise<implicitReturnType> { return this['privatePostTradeHistory'] (params); }
    privatePostGetDepositAddress (params?: {}): Promise<implicitReturnType> { return this['privatePostGetDepositAddress'] (params); }
    privatePostCreateWithdraw (params?: {}): Promise<implicitReturnType> { return this['privatePostCreateWithdraw'] (params); }
    privatePostGetWithdraw (params?: {}): Promise<implicitReturnType> { return this['privatePostGetWithdraw'] (params); }
}