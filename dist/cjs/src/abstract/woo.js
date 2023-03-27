'use strict';

var Exchange$1 = require('../base/Exchange.js');

// -------------------------------------------------------------------------------
class Exchange extends Exchange$1["default"] {
    v1PubGetHistKline(params) { return this['v1PubGetHistKline'](params); }
    v1PubGetHistTrades(params) { return this['v1PubGetHistTrades'](params); }
    v1PublicGetInfo(params) { return this['v1PublicGetInfo'](params); }
    v1PublicGetInfoSymbol(params) { return this['v1PublicGetInfoSymbol'](params); }
    v1PublicGetSystemInfo(params) { return this['v1PublicGetSystemInfo'](params); }
    v1PublicGetMarketTrades(params) { return this['v1PublicGetMarketTrades'](params); }
    v1PublicGetToken(params) { return this['v1PublicGetToken'](params); }
    v1PublicGetTokenNetwork(params) { return this['v1PublicGetTokenNetwork'](params); }
    v1PublicGetFundingRates(params) { return this['v1PublicGetFundingRates'](params); }
    v1PublicGetFundingRateSymbol(params) { return this['v1PublicGetFundingRateSymbol'](params); }
    v1PublicGetFundingRateHistory(params) { return this['v1PublicGetFundingRateHistory'](params); }
    v1PublicGetFutures(params) { return this['v1PublicGetFutures'](params); }
    v1PublicGetFuturesSymbol(params) { return this['v1PublicGetFuturesSymbol'](params); }
    v1PrivateGetClientToken(params) { return this['v1PrivateGetClientToken'](params); }
    v1PrivateGetOrderOid(params) { return this['v1PrivateGetOrderOid'](params); }
    v1PrivateGetClientOrderClientOrderId(params) { return this['v1PrivateGetClientOrderClientOrderId'](params); }
    v1PrivateGetOrders(params) { return this['v1PrivateGetOrders'](params); }
    v1PrivateGetOrderbookSymbol(params) { return this['v1PrivateGetOrderbookSymbol'](params); }
    v1PrivateGetKline(params) { return this['v1PrivateGetKline'](params); }
    v1PrivateGetClientTradeTid(params) { return this['v1PrivateGetClientTradeTid'](params); }
    v1PrivateGetOrderOidTrades(params) { return this['v1PrivateGetOrderOidTrades'](params); }
    v1PrivateGetClientTrades(params) { return this['v1PrivateGetClientTrades'](params); }
    v1PrivateGetClientInfo(params) { return this['v1PrivateGetClientInfo'](params); }
    v1PrivateGetAssetDeposit(params) { return this['v1PrivateGetAssetDeposit'](params); }
    v1PrivateGetAssetHistory(params) { return this['v1PrivateGetAssetHistory'](params); }
    v1PrivateGetSubAccountAll(params) { return this['v1PrivateGetSubAccountAll'](params); }
    v1PrivateGetSubAccountAssets(params) { return this['v1PrivateGetSubAccountAssets'](params); }
    v1PrivateGetTokenInterest(params) { return this['v1PrivateGetTokenInterest'](params); }
    v1PrivateGetTokenInterestToken(params) { return this['v1PrivateGetTokenInterestToken'](params); }
    v1PrivateGetInterestHistory(params) { return this['v1PrivateGetInterestHistory'](params); }
    v1PrivateGetInterestRepay(params) { return this['v1PrivateGetInterestRepay'](params); }
    v1PrivateGetFundingFeeHistory(params) { return this['v1PrivateGetFundingFeeHistory'](params); }
    v1PrivateGetPositions(params) { return this['v1PrivateGetPositions'](params); }
    v1PrivateGetPositionSymbol(params) { return this['v1PrivateGetPositionSymbol'](params); }
    v1PrivatePostOrder(params) { return this['v1PrivatePostOrder'](params); }
    v1PrivatePostAssetMainSubTransfer(params) { return this['v1PrivatePostAssetMainSubTransfer'](params); }
    v1PrivatePostAssetWithdraw(params) { return this['v1PrivatePostAssetWithdraw'](params); }
    v1PrivatePostInterestRepay(params) { return this['v1PrivatePostInterestRepay'](params); }
    v1PrivatePostClientAccountMode(params) { return this['v1PrivatePostClientAccountMode'](params); }
    v1PrivatePostClientLeverage(params) { return this['v1PrivatePostClientLeverage'](params); }
    v1PrivateDeleteOrder(params) { return this['v1PrivateDeleteOrder'](params); }
    v1PrivateDeleteClientOrder(params) { return this['v1PrivateDeleteClientOrder'](params); }
    v1PrivateDeleteOrders(params) { return this['v1PrivateDeleteOrders'](params); }
    v1PrivateDeleteAssetWithdraw(params) { return this['v1PrivateDeleteAssetWithdraw'](params); }
    v2PrivateGetClientHolding(params) { return this['v2PrivateGetClientHolding'](params); }
    v3PrivateGetAlgoOrderOid(params) { return this['v3PrivateGetAlgoOrderOid'](params); }
    v3PrivateGetAlgoOrders(params) { return this['v3PrivateGetAlgoOrders'](params); }
    v3PrivateGetBalances(params) { return this['v3PrivateGetBalances'](params); }
    v3PrivateGetAccountinfo(params) { return this['v3PrivateGetAccountinfo'](params); }
    v3PrivateGetPositions(params) { return this['v3PrivateGetPositions'](params); }
    v3PrivateGetBuypower(params) { return this['v3PrivateGetBuypower'](params); }
    v3PrivatePostAlgoOrder(params) { return this['v3PrivatePostAlgoOrder'](params); }
    v3PrivatePutOrderOid(params) { return this['v3PrivatePutOrderOid'](params); }
    v3PrivatePutOrderClientOid(params) { return this['v3PrivatePutOrderClientOid'](params); }
    v3PrivatePutAlgoOrderOid(params) { return this['v3PrivatePutAlgoOrderOid'](params); }
    v3PrivatePutAlgoOrderClientOid(params) { return this['v3PrivatePutAlgoOrderClientOid'](params); }
    v3PrivateDeleteAlgoOrderOid(params) { return this['v3PrivateDeleteAlgoOrderOid'](params); }
    v3PrivateDeleteAlgoOrdersPending(params) { return this['v3PrivateDeleteAlgoOrdersPending'](params); }
    v3PrivateDeleteAlgoOrdersPendingSymbol(params) { return this['v3PrivateDeleteAlgoOrdersPendingSymbol'](params); }
    v3PrivateDeleteOrdersPending(params) { return this['v3PrivateDeleteOrdersPending'](params); }
}

module.exports = Exchange;
