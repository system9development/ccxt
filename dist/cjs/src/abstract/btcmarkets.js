'use strict';

var Exchange$1 = require('../base/Exchange.js');

// -------------------------------------------------------------------------------
class Exchange extends Exchange$1["default"] {
    publicGetMarkets(params) { return this['publicGetMarkets'](params); }
    publicGetMarketsMarketIdTicker(params) { return this['publicGetMarketsMarketIdTicker'](params); }
    publicGetMarketsMarketIdTrades(params) { return this['publicGetMarketsMarketIdTrades'](params); }
    publicGetMarketsMarketIdOrderbook(params) { return this['publicGetMarketsMarketIdOrderbook'](params); }
    publicGetMarketsMarketIdCandles(params) { return this['publicGetMarketsMarketIdCandles'](params); }
    publicGetMarketsTickers(params) { return this['publicGetMarketsTickers'](params); }
    publicGetMarketsOrderbooks(params) { return this['publicGetMarketsOrderbooks'](params); }
    publicGetTime(params) { return this['publicGetTime'](params); }
    privateGetOrders(params) { return this['privateGetOrders'](params); }
    privateGetOrdersId(params) { return this['privateGetOrdersId'](params); }
    privateGetBatchordersIds(params) { return this['privateGetBatchordersIds'](params); }
    privateGetTrades(params) { return this['privateGetTrades'](params); }
    privateGetTradesId(params) { return this['privateGetTradesId'](params); }
    privateGetWithdrawals(params) { return this['privateGetWithdrawals'](params); }
    privateGetWithdrawalsId(params) { return this['privateGetWithdrawalsId'](params); }
    privateGetDeposits(params) { return this['privateGetDeposits'](params); }
    privateGetDepositsId(params) { return this['privateGetDepositsId'](params); }
    privateGetTransfers(params) { return this['privateGetTransfers'](params); }
    privateGetTransfersId(params) { return this['privateGetTransfersId'](params); }
    privateGetAddresses(params) { return this['privateGetAddresses'](params); }
    privateGetWithdrawalFees(params) { return this['privateGetWithdrawalFees'](params); }
    privateGetAssets(params) { return this['privateGetAssets'](params); }
    privateGetAccountsMeTradingFees(params) { return this['privateGetAccountsMeTradingFees'](params); }
    privateGetAccountsMeWithdrawalLimits(params) { return this['privateGetAccountsMeWithdrawalLimits'](params); }
    privateGetAccountsMeBalances(params) { return this['privateGetAccountsMeBalances'](params); }
    privateGetAccountsMeTransactions(params) { return this['privateGetAccountsMeTransactions'](params); }
    privateGetReportsId(params) { return this['privateGetReportsId'](params); }
    privatePostOrders(params) { return this['privatePostOrders'](params); }
    privatePostBatchorders(params) { return this['privatePostBatchorders'](params); }
    privatePostWithdrawals(params) { return this['privatePostWithdrawals'](params); }
    privatePostReports(params) { return this['privatePostReports'](params); }
    privateDeleteOrders(params) { return this['privateDeleteOrders'](params); }
    privateDeleteOrdersId(params) { return this['privateDeleteOrdersId'](params); }
    privateDeleteBatchordersIds(params) { return this['privateDeleteBatchordersIds'](params); }
    privatePutOrdersId(params) { return this['privatePutOrdersId'](params); }
}

module.exports = Exchange;
