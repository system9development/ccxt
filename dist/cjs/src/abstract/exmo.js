'use strict';

var Exchange$1 = require('../base/Exchange.js');

// -------------------------------------------------------------------------------
class Exchange extends Exchange$1["default"] {
    webGetCtrlFeesAndLimits(params) { return this['webGetCtrlFeesAndLimits'](params); }
    webGetEnDocsFees(params) { return this['webGetEnDocsFees'](params); }
    publicGetCurrency(params) { return this['publicGetCurrency'](params); }
    publicGetCurrencyListExtended(params) { return this['publicGetCurrencyListExtended'](params); }
    publicGetOrderBook(params) { return this['publicGetOrderBook'](params); }
    publicGetPairSettings(params) { return this['publicGetPairSettings'](params); }
    publicGetTicker(params) { return this['publicGetTicker'](params); }
    publicGetTrades(params) { return this['publicGetTrades'](params); }
    publicGetCandlesHistory(params) { return this['publicGetCandlesHistory'](params); }
    publicGetRequiredAmount(params) { return this['publicGetRequiredAmount'](params); }
    publicGetPaymentsProvidersCryptoList(params) { return this['publicGetPaymentsProvidersCryptoList'](params); }
    privatePostUserInfo(params) { return this['privatePostUserInfo'](params); }
    privatePostOrderCreate(params) { return this['privatePostOrderCreate'](params); }
    privatePostOrderCancel(params) { return this['privatePostOrderCancel'](params); }
    privatePostStopMarketOrderCreate(params) { return this['privatePostStopMarketOrderCreate'](params); }
    privatePostStopMarketOrderCancel(params) { return this['privatePostStopMarketOrderCancel'](params); }
    privatePostUserOpenOrders(params) { return this['privatePostUserOpenOrders'](params); }
    privatePostUserTrades(params) { return this['privatePostUserTrades'](params); }
    privatePostUserCancelledOrders(params) { return this['privatePostUserCancelledOrders'](params); }
    privatePostOrderTrades(params) { return this['privatePostOrderTrades'](params); }
    privatePostDepositAddress(params) { return this['privatePostDepositAddress'](params); }
    privatePostWithdrawCrypt(params) { return this['privatePostWithdrawCrypt'](params); }
    privatePostWithdrawGetTxid(params) { return this['privatePostWithdrawGetTxid'](params); }
    privatePostExcodeCreate(params) { return this['privatePostExcodeCreate'](params); }
    privatePostExcodeLoad(params) { return this['privatePostExcodeLoad'](params); }
    privatePostCodeCheck(params) { return this['privatePostCodeCheck'](params); }
    privatePostWalletHistory(params) { return this['privatePostWalletHistory'](params); }
    privatePostWalletOperations(params) { return this['privatePostWalletOperations'](params); }
    privatePostMarginUserOrderCreate(params) { return this['privatePostMarginUserOrderCreate'](params); }
    privatePostMarginUserOrderUpdate(params) { return this['privatePostMarginUserOrderUpdate'](params); }
    privatePostMarginUserOrderCancel(params) { return this['privatePostMarginUserOrderCancel'](params); }
    privatePostMarginUserPositionClose(params) { return this['privatePostMarginUserPositionClose'](params); }
    privatePostMarginUserPositionMarginAdd(params) { return this['privatePostMarginUserPositionMarginAdd'](params); }
    privatePostMarginUserPositionMarginRemove(params) { return this['privatePostMarginUserPositionMarginRemove'](params); }
    privatePostMarginCurrencyList(params) { return this['privatePostMarginCurrencyList'](params); }
    privatePostMarginPairList(params) { return this['privatePostMarginPairList'](params); }
    privatePostMarginSettings(params) { return this['privatePostMarginSettings'](params); }
    privatePostMarginFundingList(params) { return this['privatePostMarginFundingList'](params); }
    privatePostMarginUserInfo(params) { return this['privatePostMarginUserInfo'](params); }
    privatePostMarginUserOrderList(params) { return this['privatePostMarginUserOrderList'](params); }
    privatePostMarginUserOrderHistory(params) { return this['privatePostMarginUserOrderHistory'](params); }
    privatePostMarginUserOrderTrades(params) { return this['privatePostMarginUserOrderTrades'](params); }
    privatePostMarginUserOrderMaxQuantity(params) { return this['privatePostMarginUserOrderMaxQuantity'](params); }
    privatePostMarginUserPositionList(params) { return this['privatePostMarginUserPositionList'](params); }
    privatePostMarginUserPositionMarginRemoveInfo(params) { return this['privatePostMarginUserPositionMarginRemoveInfo'](params); }
    privatePostMarginUserPositionMarginAddInfo(params) { return this['privatePostMarginUserPositionMarginAddInfo'](params); }
    privatePostMarginUserWalletList(params) { return this['privatePostMarginUserWalletList'](params); }
    privatePostMarginUserWalletHistory(params) { return this['privatePostMarginUserWalletHistory'](params); }
    privatePostMarginUserTradeList(params) { return this['privatePostMarginUserTradeList'](params); }
    privatePostMarginTrades(params) { return this['privatePostMarginTrades'](params); }
    privatePostMarginLiquidationFeed(params) { return this['privatePostMarginLiquidationFeed'](params); }
}

module.exports = Exchange;
