'use strict';

var Exchange$1 = require('../base/Exchange.js');

// -------------------------------------------------------------------------------
class Exchange extends Exchange$1["default"] {
    publicSpotGetMarketSymbols(params) { return this['publicSpotGetMarketSymbols'](params); }
    publicSpotGetKline(params) { return this['publicSpotGetKline'](params); }
    publicSpotGetMarginCurrencies(params) { return this['publicSpotGetMarginCurrencies'](params); }
    publicSpotGetMarginSymbols(params) { return this['publicSpotGetMarginSymbols'](params); }
    publicSpotGetMarkets(params) { return this['publicSpotGetMarkets'](params); }
    publicSpotGetOrderBook(params) { return this['publicSpotGetOrderBook'](params); }
    publicSpotGetPing(params) { return this['publicSpotGetPing'](params); }
    publicSpotGetSpotSymbols(params) { return this['publicSpotGetSpotSymbols'](params); }
    publicSpotGetTime(params) { return this['publicSpotGetTime'](params); }
    publicSpotGetTrades(params) { return this['publicSpotGetTrades'](params); }
    publicSpotGetTradesSymbols(params) { return this['publicSpotGetTradesSymbols'](params); }
    publicSpotGetTicker(params) { return this['publicSpotGetTicker'](params); }
    publicSpotGetCurrencies(params) { return this['publicSpotGetCurrencies'](params); }
    publicSwapGetPublicApiWeight(params) { return this['publicSwapGetPublicApiWeight'](params); }
    publicSwapGetPublicCandles(params) { return this['publicSwapGetPublicCandles'](params); }
    publicSwapGetPublicCandlesHistory(params) { return this['publicSwapGetPublicCandlesHistory'](params); }
    publicSwapGetPublicDepth(params) { return this['publicSwapGetPublicDepth'](params); }
    publicSwapGetPublicFundingRate(params) { return this['publicSwapGetPublicFundingRate'](params); }
    publicSwapGetPublicFundingRateHistory(params) { return this['publicSwapGetPublicFundingRateHistory'](params); }
    publicSwapGetPublicInstrument(params) { return this['publicSwapGetPublicInstrument'](params); }
    publicSwapGetPublicInstruments(params) { return this['publicSwapGetPublicInstruments'](params); }
    publicSwapGetPublicTicker(params) { return this['publicSwapGetPublicTicker'](params); }
    publicSwapGetPublicTickers(params) { return this['publicSwapGetPublicTickers'](params); }
    publicSwapGetPublicTime(params) { return this['publicSwapGetPublicTime'](params); }
    publicSwapGetPublicTrades(params) { return this['publicSwapGetPublicTrades'](params); }
    privateSpotGetMarketFinancelog(params) { return this['privateSpotGetMarketFinancelog'](params); }
    privateSpotGetMarketMytrades(params) { return this['privateSpotGetMarketMytrades'](params); }
    privateSpotGetMarketOrder(params) { return this['privateSpotGetMarketOrder'](params); }
    privateSpotGetMarketOrderDetail(params) { return this['privateSpotGetMarketOrderDetail'](params); }
    privateSpotGetMarketOrderCurrent(params) { return this['privateSpotGetMarketOrderCurrent'](params); }
    privateSpotGetMarketOrderHistory(params) { return this['privateSpotGetMarketOrderHistory'](params); }
    privateSpotGetMarginAssets(params) { return this['privateSpotGetMarginAssets'](params); }
    privateSpotGetMarginFinancelog(params) { return this['privateSpotGetMarginFinancelog'](params); }
    privateSpotGetMarginMytrades(params) { return this['privateSpotGetMarginMytrades'](params); }
    privateSpotGetMarginOrder(params) { return this['privateSpotGetMarginOrder'](params); }
    privateSpotGetMarginOrderCurrent(params) { return this['privateSpotGetMarginOrderCurrent'](params); }
    privateSpotGetMarginOrderHistory(params) { return this['privateSpotGetMarginOrderHistory'](params); }
    privateSpotGetMarginPositions(params) { return this['privateSpotGetMarginPositions'](params); }
    privateSpotGetOtcFinancelog(params) { return this['privateSpotGetOtcFinancelog'](params); }
    privateSpotGetSpotAssets(params) { return this['privateSpotGetSpotAssets'](params); }
    privateSpotGetSpotFinancelog(params) { return this['privateSpotGetSpotFinancelog'](params); }
    privateSpotGetSpotMytrades(params) { return this['privateSpotGetSpotMytrades'](params); }
    privateSpotGetSpotOrder(params) { return this['privateSpotGetSpotOrder'](params); }
    privateSpotGetSpotOrderCurrent(params) { return this['privateSpotGetSpotOrderCurrent'](params); }
    privateSpotGetSpotOrderHistory(params) { return this['privateSpotGetSpotOrderHistory'](params); }
    privateSpotGetDepositAddress(params) { return this['privateSpotGetDepositAddress'](params); }
    privateSpotGetDepositHistory(params) { return this['privateSpotGetDepositHistory'](params); }
    privateSpotGetWithdrawHistory(params) { return this['privateSpotGetWithdrawHistory'](params); }
    privateSpotPostMarketOrderCancel(params) { return this['privateSpotPostMarketOrderCancel'](params); }
    privateSpotPostMarketOrderNew(params) { return this['privateSpotPostMarketOrderNew'](params); }
    privateSpotPostMarketOrderBatchNew(params) { return this['privateSpotPostMarketOrderBatchNew'](params); }
    privateSpotPostMarginOrderCancel(params) { return this['privateSpotPostMarginOrderCancel'](params); }
    privateSpotPostMarginOrderNew(params) { return this['privateSpotPostMarginOrderNew'](params); }
    privateSpotPostMarginPositionClose(params) { return this['privateSpotPostMarginPositionClose'](params); }
    privateSpotPostSpotOrderCancel(params) { return this['privateSpotPostSpotOrderCancel'](params); }
    privateSpotPostSpotOrderNew(params) { return this['privateSpotPostSpotOrderNew'](params); }
    privateSpotPostTransfer(params) { return this['privateSpotPostTransfer'](params); }
    privateSpotPostWithdrawNew(params) { return this['privateSpotPostWithdrawNew'](params); }
    privateSpotPostWithdrawCancel(params) { return this['privateSpotPostWithdrawCancel'](params); }
    privateSwapGetAccountBalance(params) { return this['privateSwapGetAccountBalance'](params); }
    privateSwapGetAccountPositions(params) { return this['privateSwapGetAccountPositions'](params); }
    privateSwapGetAccountFinanceRecord(params) { return this['privateSwapGetAccountFinanceRecord'](params); }
    privateSwapGetAccountTradingFeeRate(params) { return this['privateSwapGetAccountTradingFeeRate'](params); }
    privateSwapGetAccountTransferRecord(params) { return this['privateSwapGetAccountTransferRecord'](params); }
    privateSwapGetTradeHistoryOrders(params) { return this['privateSwapGetTradeHistoryOrders'](params); }
    privateSwapGetTradeHistoryTrades(params) { return this['privateSwapGetTradeHistoryTrades'](params); }
    privateSwapGetTradeOpenOrders(params) { return this['privateSwapGetTradeOpenOrders'](params); }
    privateSwapGetTradeOrderInfo(params) { return this['privateSwapGetTradeOrderInfo'](params); }
    privateSwapPostAccountLeverage(params) { return this['privateSwapPostAccountLeverage'](params); }
    privateSwapPostTradeBatchCancelOrder(params) { return this['privateSwapPostTradeBatchCancelOrder'](params); }
    privateSwapPostTradeBatchOrder(params) { return this['privateSwapPostTradeBatchOrder'](params); }
    privateSwapPostTradeCancelOrder(params) { return this['privateSwapPostTradeCancelOrder'](params); }
    privateSwapPostTradeOrderPlace(params) { return this['privateSwapPostTradeOrderPlace'](params); }
}

module.exports = Exchange;
