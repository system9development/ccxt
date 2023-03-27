'use strict';

var Exchange$1 = require('../base/Exchange.js');

// -------------------------------------------------------------------------------
class Exchange extends Exchange$1["default"] {
    publicGetMarketAll(params) { return this['publicGetMarketAll'](params); }
    publicGetCandlesTimeframe(params) { return this['publicGetCandlesTimeframe'](params); }
    publicGetCandlesTimeframeUnit(params) { return this['publicGetCandlesTimeframeUnit'](params); }
    publicGetCandlesMinutesUnit(params) { return this['publicGetCandlesMinutesUnit'](params); }
    publicGetCandlesMinutes1(params) { return this['publicGetCandlesMinutes1'](params); }
    publicGetCandlesMinutes3(params) { return this['publicGetCandlesMinutes3'](params); }
    publicGetCandlesMinutes5(params) { return this['publicGetCandlesMinutes5'](params); }
    publicGetCandlesMinutes15(params) { return this['publicGetCandlesMinutes15'](params); }
    publicGetCandlesMinutes30(params) { return this['publicGetCandlesMinutes30'](params); }
    publicGetCandlesMinutes60(params) { return this['publicGetCandlesMinutes60'](params); }
    publicGetCandlesMinutes240(params) { return this['publicGetCandlesMinutes240'](params); }
    publicGetCandlesDays(params) { return this['publicGetCandlesDays'](params); }
    publicGetCandlesWeeks(params) { return this['publicGetCandlesWeeks'](params); }
    publicGetCandlesMonths(params) { return this['publicGetCandlesMonths'](params); }
    publicGetTradesTicks(params) { return this['publicGetTradesTicks'](params); }
    publicGetTicker(params) { return this['publicGetTicker'](params); }
    publicGetOrderbook(params) { return this['publicGetOrderbook'](params); }
    privateGetAccounts(params) { return this['privateGetAccounts'](params); }
    privateGetOrdersChance(params) { return this['privateGetOrdersChance'](params); }
    privateGetOrder(params) { return this['privateGetOrder'](params); }
    privateGetOrders(params) { return this['privateGetOrders'](params); }
    privateGetWithdraws(params) { return this['privateGetWithdraws'](params); }
    privateGetWithdraw(params) { return this['privateGetWithdraw'](params); }
    privateGetWithdrawsChance(params) { return this['privateGetWithdrawsChance'](params); }
    privateGetDeposits(params) { return this['privateGetDeposits'](params); }
    privateGetDeposit(params) { return this['privateGetDeposit'](params); }
    privateGetDepositsCoinAddresses(params) { return this['privateGetDepositsCoinAddresses'](params); }
    privateGetDepositsCoinAddress(params) { return this['privateGetDepositsCoinAddress'](params); }
    privatePostOrders(params) { return this['privatePostOrders'](params); }
    privatePostWithdrawsCoin(params) { return this['privatePostWithdrawsCoin'](params); }
    privatePostWithdrawsKrw(params) { return this['privatePostWithdrawsKrw'](params); }
    privatePostDepositsGenerateCoinAddress(params) { return this['privatePostDepositsGenerateCoinAddress'](params); }
    privateDeleteOrder(params) { return this['privateDeleteOrder'](params); }
}

module.exports = Exchange;
