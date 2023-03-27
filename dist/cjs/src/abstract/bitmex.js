'use strict';

var Exchange$1 = require('../base/Exchange.js');

// -------------------------------------------------------------------------------
class Exchange extends Exchange$1["default"] {
    publicGetAnnouncement(params) { return this['publicGetAnnouncement'](params); }
    publicGetAnnouncementUrgent(params) { return this['publicGetAnnouncementUrgent'](params); }
    publicGetFunding(params) { return this['publicGetFunding'](params); }
    publicGetInstrument(params) { return this['publicGetInstrument'](params); }
    publicGetInstrumentActive(params) { return this['publicGetInstrumentActive'](params); }
    publicGetInstrumentActiveAndIndices(params) { return this['publicGetInstrumentActiveAndIndices'](params); }
    publicGetInstrumentActiveIntervals(params) { return this['publicGetInstrumentActiveIntervals'](params); }
    publicGetInstrumentCompositeIndex(params) { return this['publicGetInstrumentCompositeIndex'](params); }
    publicGetInstrumentIndices(params) { return this['publicGetInstrumentIndices'](params); }
    publicGetInsurance(params) { return this['publicGetInsurance'](params); }
    publicGetLeaderboard(params) { return this['publicGetLeaderboard'](params); }
    publicGetLiquidation(params) { return this['publicGetLiquidation'](params); }
    publicGetOrderBook(params) { return this['publicGetOrderBook'](params); }
    publicGetOrderBookL2(params) { return this['publicGetOrderBookL2'](params); }
    publicGetQuote(params) { return this['publicGetQuote'](params); }
    publicGetQuoteBucketed(params) { return this['publicGetQuoteBucketed'](params); }
    publicGetSchema(params) { return this['publicGetSchema'](params); }
    publicGetSchemaWebsocketHelp(params) { return this['publicGetSchemaWebsocketHelp'](params); }
    publicGetSettlement(params) { return this['publicGetSettlement'](params); }
    publicGetStats(params) { return this['publicGetStats'](params); }
    publicGetStatsHistory(params) { return this['publicGetStatsHistory'](params); }
    publicGetTrade(params) { return this['publicGetTrade'](params); }
    publicGetTradeBucketed(params) { return this['publicGetTradeBucketed'](params); }
    publicGetWalletAssets(params) { return this['publicGetWalletAssets'](params); }
    publicGetWalletNetworks(params) { return this['publicGetWalletNetworks'](params); }
    privateGetApiKey(params) { return this['privateGetApiKey'](params); }
    privateGetChat(params) { return this['privateGetChat'](params); }
    privateGetChatChannels(params) { return this['privateGetChatChannels'](params); }
    privateGetChatConnected(params) { return this['privateGetChatConnected'](params); }
    privateGetExecution(params) { return this['privateGetExecution'](params); }
    privateGetExecutionTradeHistory(params) { return this['privateGetExecutionTradeHistory'](params); }
    privateGetNotification(params) { return this['privateGetNotification'](params); }
    privateGetOrder(params) { return this['privateGetOrder'](params); }
    privateGetPosition(params) { return this['privateGetPosition'](params); }
    privateGetUser(params) { return this['privateGetUser'](params); }
    privateGetUserAffiliateStatus(params) { return this['privateGetUserAffiliateStatus'](params); }
    privateGetUserCheckReferralCode(params) { return this['privateGetUserCheckReferralCode'](params); }
    privateGetUserCommission(params) { return this['privateGetUserCommission'](params); }
    privateGetUserDepositAddress(params) { return this['privateGetUserDepositAddress'](params); }
    privateGetUserExecutionHistory(params) { return this['privateGetUserExecutionHistory'](params); }
    privateGetUserMargin(params) { return this['privateGetUserMargin'](params); }
    privateGetUserMinWithdrawalFee(params) { return this['privateGetUserMinWithdrawalFee'](params); }
    privateGetUserWallet(params) { return this['privateGetUserWallet'](params); }
    privateGetUserWalletHistory(params) { return this['privateGetUserWalletHistory'](params); }
    privateGetUserWalletSummary(params) { return this['privateGetUserWalletSummary'](params); }
    privateGetWalletAssets(params) { return this['privateGetWalletAssets'](params); }
    privateGetWalletNetworks(params) { return this['privateGetWalletNetworks'](params); }
    privateGetUserEvent(params) { return this['privateGetUserEvent'](params); }
    privatePostApiKey(params) { return this['privatePostApiKey'](params); }
    privatePostApiKeyDisable(params) { return this['privatePostApiKeyDisable'](params); }
    privatePostApiKeyEnable(params) { return this['privatePostApiKeyEnable'](params); }
    privatePostChat(params) { return this['privatePostChat'](params); }
    privatePostOrder(params) { return this['privatePostOrder'](params); }
    privatePostOrderBulk(params) { return this['privatePostOrderBulk'](params); }
    privatePostOrderCancelAllAfter(params) { return this['privatePostOrderCancelAllAfter'](params); }
    privatePostOrderClosePosition(params) { return this['privatePostOrderClosePosition'](params); }
    privatePostPositionIsolate(params) { return this['privatePostPositionIsolate'](params); }
    privatePostPositionLeverage(params) { return this['privatePostPositionLeverage'](params); }
    privatePostPositionRiskLimit(params) { return this['privatePostPositionRiskLimit'](params); }
    privatePostPositionTransferMargin(params) { return this['privatePostPositionTransferMargin'](params); }
    privatePostUserCancelWithdrawal(params) { return this['privatePostUserCancelWithdrawal'](params); }
    privatePostUserConfirmEmail(params) { return this['privatePostUserConfirmEmail'](params); }
    privatePostUserConfirmEnableTFA(params) { return this['privatePostUserConfirmEnableTFA'](params); }
    privatePostUserConfirmWithdrawal(params) { return this['privatePostUserConfirmWithdrawal'](params); }
    privatePostUserDisableTFA(params) { return this['privatePostUserDisableTFA'](params); }
    privatePostUserLogout(params) { return this['privatePostUserLogout'](params); }
    privatePostUserLogoutAll(params) { return this['privatePostUserLogoutAll'](params); }
    privatePostUserPreferences(params) { return this['privatePostUserPreferences'](params); }
    privatePostUserRequestEnableTFA(params) { return this['privatePostUserRequestEnableTFA'](params); }
    privatePostUserRequestWithdrawal(params) { return this['privatePostUserRequestWithdrawal'](params); }
    privatePutOrder(params) { return this['privatePutOrder'](params); }
    privatePutOrderBulk(params) { return this['privatePutOrderBulk'](params); }
    privatePutUser(params) { return this['privatePutUser'](params); }
    privateDeleteApiKey(params) { return this['privateDeleteApiKey'](params); }
    privateDeleteOrder(params) { return this['privateDeleteOrder'](params); }
    privateDeleteOrderAll(params) { return this['privateDeleteOrderAll'](params); }
}

module.exports = Exchange;
