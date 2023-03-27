// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

export default class Exchange extends _Exchange {
    binanceGetPing (params?: {}): Promise<implicitReturnType> { return this['binanceGetPing'] (params); }
    binanceGetTime (params?: {}): Promise<implicitReturnType> { return this['binanceGetTime'] (params); }
    binanceGetDepth (params?: {}): Promise<implicitReturnType> { return this['binanceGetDepth'] (params); }
    binanceGetTrades (params?: {}): Promise<implicitReturnType> { return this['binanceGetTrades'] (params); }
    binanceGetAggTrades (params?: {}): Promise<implicitReturnType> { return this['binanceGetAggTrades'] (params); }
    binanceGetHistoricalTrades (params?: {}): Promise<implicitReturnType> { return this['binanceGetHistoricalTrades'] (params); }
    binanceGetKlines (params?: {}): Promise<implicitReturnType> { return this['binanceGetKlines'] (params); }
    binanceGetTicker24hr (params?: {}): Promise<implicitReturnType> { return this['binanceGetTicker24hr'] (params); }
    binanceGetTickerPrice (params?: {}): Promise<implicitReturnType> { return this['binanceGetTickerPrice'] (params); }
    binanceGetTickerBookTicker (params?: {}): Promise<implicitReturnType> { return this['binanceGetTickerBookTicker'] (params); }
    binanceGetExchangeInfo (params?: {}): Promise<implicitReturnType> { return this['binanceGetExchangeInfo'] (params); }
    binancePutUserDataStream (params?: {}): Promise<implicitReturnType> { return this['binancePutUserDataStream'] (params); }
    binancePostUserDataStream (params?: {}): Promise<implicitReturnType> { return this['binancePostUserDataStream'] (params); }
    binanceDeleteUserDataStream (params?: {}): Promise<implicitReturnType> { return this['binanceDeleteUserDataStream'] (params); }
    publicGetOpenV1CommonTime (params?: {}): Promise<implicitReturnType> { return this['publicGetOpenV1CommonTime'] (params); }
    publicGetOpenV1CommonSymbols (params?: {}): Promise<implicitReturnType> { return this['publicGetOpenV1CommonSymbols'] (params); }
    publicGetOpenV1MarketDepth (params?: {}): Promise<implicitReturnType> { return this['publicGetOpenV1MarketDepth'] (params); }
    publicGetOpenV1MarketTrades (params?: {}): Promise<implicitReturnType> { return this['publicGetOpenV1MarketTrades'] (params); }
    publicGetOpenV1MarketAggTrades (params?: {}): Promise<implicitReturnType> { return this['publicGetOpenV1MarketAggTrades'] (params); }
    publicGetOpenV1MarketKlines (params?: {}): Promise<implicitReturnType> { return this['publicGetOpenV1MarketKlines'] (params); }
    privateGetOpenV1OrdersDetail (params?: {}): Promise<implicitReturnType> { return this['privateGetOpenV1OrdersDetail'] (params); }
    privateGetOpenV1Orders (params?: {}): Promise<implicitReturnType> { return this['privateGetOpenV1Orders'] (params); }
    privateGetOpenV1AccountSpot (params?: {}): Promise<implicitReturnType> { return this['privateGetOpenV1AccountSpot'] (params); }
    privateGetOpenV1AccountSpotAsset (params?: {}): Promise<implicitReturnType> { return this['privateGetOpenV1AccountSpotAsset'] (params); }
    privateGetOpenV1OrdersTrades (params?: {}): Promise<implicitReturnType> { return this['privateGetOpenV1OrdersTrades'] (params); }
    privateGetOpenV1Withdraws (params?: {}): Promise<implicitReturnType> { return this['privateGetOpenV1Withdraws'] (params); }
    privateGetOpenV1Deposits (params?: {}): Promise<implicitReturnType> { return this['privateGetOpenV1Deposits'] (params); }
    privateGetOpenV1DepositsAddress (params?: {}): Promise<implicitReturnType> { return this['privateGetOpenV1DepositsAddress'] (params); }
    privatePostOpenV1Orders (params?: {}): Promise<implicitReturnType> { return this['privatePostOpenV1Orders'] (params); }
    privatePostOpenV1OrdersCancel (params?: {}): Promise<implicitReturnType> { return this['privatePostOpenV1OrdersCancel'] (params); }
    privatePostOpenV1OrdersOco (params?: {}): Promise<implicitReturnType> { return this['privatePostOpenV1OrdersOco'] (params); }
    privatePostOpenV1Withdraws (params?: {}): Promise<implicitReturnType> { return this['privatePostOpenV1Withdraws'] (params); }
    privatePostOpenV1UserDataStream (params?: {}): Promise<implicitReturnType> { return this['privatePostOpenV1UserDataStream'] (params); }
}