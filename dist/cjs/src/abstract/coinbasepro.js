'use strict';

var Exchange$1 = require('../base/Exchange.js');

// -------------------------------------------------------------------------------
class Exchange extends Exchange$1["default"] {
    publicGetCurrencies(params) { return this['publicGetCurrencies'](params); }
    publicGetProducts(params) { return this['publicGetProducts'](params); }
    publicGetProductsId(params) { return this['publicGetProductsId'](params); }
    publicGetProductsIdBook(params) { return this['publicGetProductsIdBook'](params); }
    publicGetProductsIdCandles(params) { return this['publicGetProductsIdCandles'](params); }
    publicGetProductsIdStats(params) { return this['publicGetProductsIdStats'](params); }
    publicGetProductsIdTicker(params) { return this['publicGetProductsIdTicker'](params); }
    publicGetProductsIdTrades(params) { return this['publicGetProductsIdTrades'](params); }
    publicGetTime(params) { return this['publicGetTime'](params); }
    publicGetProductsSparkLines(params) { return this['publicGetProductsSparkLines'](params); }
    privateGetAccounts(params) { return this['privateGetAccounts'](params); }
    privateGetAccountsId(params) { return this['privateGetAccountsId'](params); }
    privateGetAccountsIdHolds(params) { return this['privateGetAccountsIdHolds'](params); }
    privateGetAccountsIdLedger(params) { return this['privateGetAccountsIdLedger'](params); }
    privateGetAccountsIdTransfers(params) { return this['privateGetAccountsIdTransfers'](params); }
    privateGetCoinbaseAccounts(params) { return this['privateGetCoinbaseAccounts'](params); }
    privateGetFills(params) { return this['privateGetFills'](params); }
    privateGetFunding(params) { return this['privateGetFunding'](params); }
    privateGetFees(params) { return this['privateGetFees'](params); }
    privateGetMarginProfileInformation(params) { return this['privateGetMarginProfileInformation'](params); }
    privateGetMarginBuyingPower(params) { return this['privateGetMarginBuyingPower'](params); }
    privateGetMarginWithdrawalPower(params) { return this['privateGetMarginWithdrawalPower'](params); }
    privateGetMarginWithdrawalPowerAll(params) { return this['privateGetMarginWithdrawalPowerAll'](params); }
    privateGetMarginExitPlan(params) { return this['privateGetMarginExitPlan'](params); }
    privateGetMarginLiquidationHistory(params) { return this['privateGetMarginLiquidationHistory'](params); }
    privateGetMarginPositionRefreshAmounts(params) { return this['privateGetMarginPositionRefreshAmounts'](params); }
    privateGetMarginStatus(params) { return this['privateGetMarginStatus'](params); }
    privateGetOracle(params) { return this['privateGetOracle'](params); }
    privateGetOrders(params) { return this['privateGetOrders'](params); }
    privateGetOrdersId(params) { return this['privateGetOrdersId'](params); }
    privateGetOrdersClientClientOid(params) { return this['privateGetOrdersClientClientOid'](params); }
    privateGetOtcOrders(params) { return this['privateGetOtcOrders'](params); }
    privateGetPaymentMethods(params) { return this['privateGetPaymentMethods'](params); }
    privateGetPosition(params) { return this['privateGetPosition'](params); }
    privateGetProfiles(params) { return this['privateGetProfiles'](params); }
    privateGetProfilesId(params) { return this['privateGetProfilesId'](params); }
    privateGetReportsReportId(params) { return this['privateGetReportsReportId'](params); }
    privateGetTransfers(params) { return this['privateGetTransfers'](params); }
    privateGetTransfersTransferId(params) { return this['privateGetTransfersTransferId'](params); }
    privateGetUsersSelfExchangeLimits(params) { return this['privateGetUsersSelfExchangeLimits'](params); }
    privateGetUsersSelfHoldBalances(params) { return this['privateGetUsersSelfHoldBalances'](params); }
    privateGetUsersSelfTrailingVolume(params) { return this['privateGetUsersSelfTrailingVolume'](params); }
    privateGetWithdrawalsFeeEstimate(params) { return this['privateGetWithdrawalsFeeEstimate'](params); }
    privateGetConversionsConversionId(params) { return this['privateGetConversionsConversionId'](params); }
    privatePostConversions(params) { return this['privatePostConversions'](params); }
    privatePostDepositsCoinbaseAccount(params) { return this['privatePostDepositsCoinbaseAccount'](params); }
    privatePostDepositsPaymentMethod(params) { return this['privatePostDepositsPaymentMethod'](params); }
    privatePostCoinbaseAccountsIdAddresses(params) { return this['privatePostCoinbaseAccountsIdAddresses'](params); }
    privatePostFundingRepay(params) { return this['privatePostFundingRepay'](params); }
    privatePostOrders(params) { return this['privatePostOrders'](params); }
    privatePostPositionClose(params) { return this['privatePostPositionClose'](params); }
    privatePostProfilesMarginTransfer(params) { return this['privatePostProfilesMarginTransfer'](params); }
    privatePostProfilesTransfer(params) { return this['privatePostProfilesTransfer'](params); }
    privatePostReports(params) { return this['privatePostReports'](params); }
    privatePostWithdrawalsCoinbase(params) { return this['privatePostWithdrawalsCoinbase'](params); }
    privatePostWithdrawalsCoinbaseAccount(params) { return this['privatePostWithdrawalsCoinbaseAccount'](params); }
    privatePostWithdrawalsCrypto(params) { return this['privatePostWithdrawalsCrypto'](params); }
    privatePostWithdrawalsPaymentMethod(params) { return this['privatePostWithdrawalsPaymentMethod'](params); }
    privateDeleteOrders(params) { return this['privateDeleteOrders'](params); }
    privateDeleteOrdersClientClientOid(params) { return this['privateDeleteOrdersClientClientOid'](params); }
    privateDeleteOrdersId(params) { return this['privateDeleteOrdersId'](params); }
}

module.exports = Exchange;
