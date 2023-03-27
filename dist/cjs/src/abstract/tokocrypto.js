'use strict';

var Exchange$1 = require('../base/Exchange.js');

// -------------------------------------------------------------------------------
class Exchange extends Exchange$1["default"] {
    binanceGetPing(params) { return this['binanceGetPing'](params); }
    binanceGetTime(params) { return this['binanceGetTime'](params); }
    binanceGetDepth(params) { return this['binanceGetDepth'](params); }
    binanceGetTrades(params) { return this['binanceGetTrades'](params); }
    binanceGetAggTrades(params) { return this['binanceGetAggTrades'](params); }
    binanceGetHistoricalTrades(params) { return this['binanceGetHistoricalTrades'](params); }
    binanceGetKlines(params) { return this['binanceGetKlines'](params); }
    binanceGetTicker24hr(params) { return this['binanceGetTicker24hr'](params); }
    binanceGetTickerPrice(params) { return this['binanceGetTickerPrice'](params); }
    binanceGetTickerBookTicker(params) { return this['binanceGetTickerBookTicker'](params); }
    binanceGetExchangeInfo(params) { return this['binanceGetExchangeInfo'](params); }
    binancePutUserDataStream(params) { return this['binancePutUserDataStream'](params); }
    binancePostUserDataStream(params) { return this['binancePostUserDataStream'](params); }
    binanceDeleteUserDataStream(params) { return this['binanceDeleteUserDataStream'](params); }
    publicGetOpenV1CommonTime(params) { return this['publicGetOpenV1CommonTime'](params); }
    publicGetOpenV1CommonSymbols(params) { return this['publicGetOpenV1CommonSymbols'](params); }
    publicGetOpenV1MarketDepth(params) { return this['publicGetOpenV1MarketDepth'](params); }
    publicGetOpenV1MarketTrades(params) { return this['publicGetOpenV1MarketTrades'](params); }
    publicGetOpenV1MarketAggTrades(params) { return this['publicGetOpenV1MarketAggTrades'](params); }
    publicGetOpenV1MarketKlines(params) { return this['publicGetOpenV1MarketKlines'](params); }
    privateGetOpenV1OrdersDetail(params) { return this['privateGetOpenV1OrdersDetail'](params); }
    privateGetOpenV1Orders(params) { return this['privateGetOpenV1Orders'](params); }
    privateGetOpenV1AccountSpot(params) { return this['privateGetOpenV1AccountSpot'](params); }
    privateGetOpenV1AccountSpotAsset(params) { return this['privateGetOpenV1AccountSpotAsset'](params); }
    privateGetOpenV1OrdersTrades(params) { return this['privateGetOpenV1OrdersTrades'](params); }
    privateGetOpenV1Withdraws(params) { return this['privateGetOpenV1Withdraws'](params); }
    privateGetOpenV1Deposits(params) { return this['privateGetOpenV1Deposits'](params); }
    privateGetOpenV1DepositsAddress(params) { return this['privateGetOpenV1DepositsAddress'](params); }
    privatePostOpenV1Orders(params) { return this['privatePostOpenV1Orders'](params); }
    privatePostOpenV1OrdersCancel(params) { return this['privatePostOpenV1OrdersCancel'](params); }
    privatePostOpenV1OrdersOco(params) { return this['privatePostOpenV1OrdersOco'](params); }
    privatePostOpenV1Withdraws(params) { return this['privatePostOpenV1Withdraws'](params); }
    privatePostOpenV1UserDataStream(params) { return this['privatePostOpenV1UserDataStream'](params); }
}

module.exports = Exchange;
