'use strict';

var Exchange$1 = require('../base/Exchange.js');

// -------------------------------------------------------------------------------
class Exchange extends Exchange$1["default"] {
    publicGetPublicCurrency(params) { return this['publicGetPublicCurrency'](params); }
    publicGetPublicSymbol(params) { return this['publicGetPublicSymbol'](params); }
    publicGetPublicTicker(params) { return this['publicGetPublicTicker'](params); }
    publicGetPublicPriceRate(params) { return this['publicGetPublicPriceRate'](params); }
    publicGetPublicTrades(params) { return this['publicGetPublicTrades'](params); }
    publicGetPublicOrderbook(params) { return this['publicGetPublicOrderbook'](params); }
    publicGetPublicCandles(params) { return this['publicGetPublicCandles'](params); }
    publicGetPublicFuturesInfo(params) { return this['publicGetPublicFuturesInfo'](params); }
    publicGetPublicFuturesHistoryFunding(params) { return this['publicGetPublicFuturesHistoryFunding'](params); }
    publicGetPublicFuturesCandlesIndexPrice(params) { return this['publicGetPublicFuturesCandlesIndexPrice'](params); }
    publicGetPublicFuturesCandlesMarkPrice(params) { return this['publicGetPublicFuturesCandlesMarkPrice'](params); }
    publicGetPublicFuturesCandlesPremiumIndex(params) { return this['publicGetPublicFuturesCandlesPremiumIndex'](params); }
    publicGetPublicFuturesCandlesOpenInterest(params) { return this['publicGetPublicFuturesCandlesOpenInterest'](params); }
    privateGetSpotBalance(params) { return this['privateGetSpotBalance'](params); }
    privateGetSpotOrder(params) { return this['privateGetSpotOrder'](params); }
    privateGetSpotOrderClientOrderId(params) { return this['privateGetSpotOrderClientOrderId'](params); }
    privateGetSpotFee(params) { return this['privateGetSpotFee'](params); }
    privateGetSpotFeeSymbol(params) { return this['privateGetSpotFeeSymbol'](params); }
    privateGetSpotHistoryOrder(params) { return this['privateGetSpotHistoryOrder'](params); }
    privateGetSpotHistoryTrade(params) { return this['privateGetSpotHistoryTrade'](params); }
    privateGetMarginAccount(params) { return this['privateGetMarginAccount'](params); }
    privateGetMarginAccountIsolatedSymbol(params) { return this['privateGetMarginAccountIsolatedSymbol'](params); }
    privateGetMarginOrder(params) { return this['privateGetMarginOrder'](params); }
    privateGetMarginOrderClientOrderId(params) { return this['privateGetMarginOrderClientOrderId'](params); }
    privateGetMarginHistoryClearing(params) { return this['privateGetMarginHistoryClearing'](params); }
    privateGetMarginHistoryOrder(params) { return this['privateGetMarginHistoryOrder'](params); }
    privateGetMarginHistoryPositions(params) { return this['privateGetMarginHistoryPositions'](params); }
    privateGetMarginHistoryTrade(params) { return this['privateGetMarginHistoryTrade'](params); }
    privateGetFuturesBalance(params) { return this['privateGetFuturesBalance'](params); }
    privateGetFuturesAccount(params) { return this['privateGetFuturesAccount'](params); }
    privateGetFuturesAccountIsolatedSymbol(params) { return this['privateGetFuturesAccountIsolatedSymbol'](params); }
    privateGetFuturesOrder(params) { return this['privateGetFuturesOrder'](params); }
    privateGetFuturesOrderClientOrderId(params) { return this['privateGetFuturesOrderClientOrderId'](params); }
    privateGetFuturesFee(params) { return this['privateGetFuturesFee'](params); }
    privateGetFuturesFeeSymbol(params) { return this['privateGetFuturesFeeSymbol'](params); }
    privateGetFuturesHistoryClearing(params) { return this['privateGetFuturesHistoryClearing'](params); }
    privateGetFuturesHistoryOrder(params) { return this['privateGetFuturesHistoryOrder'](params); }
    privateGetFuturesHistoryPositions(params) { return this['privateGetFuturesHistoryPositions'](params); }
    privateGetFuturesHistoryTrade(params) { return this['privateGetFuturesHistoryTrade'](params); }
    privateGetWalletBalance(params) { return this['privateGetWalletBalance'](params); }
    privateGetWalletCryptoAddress(params) { return this['privateGetWalletCryptoAddress'](params); }
    privateGetWalletCryptoAddressRecentDeposit(params) { return this['privateGetWalletCryptoAddressRecentDeposit'](params); }
    privateGetWalletCryptoAddressRecentWithdraw(params) { return this['privateGetWalletCryptoAddressRecentWithdraw'](params); }
    privateGetWalletCryptoAddressCheckMine(params) { return this['privateGetWalletCryptoAddressCheckMine'](params); }
    privateGetWalletTransactions(params) { return this['privateGetWalletTransactions'](params); }
    privateGetWalletCryptoCheckOffchainAvailable(params) { return this['privateGetWalletCryptoCheckOffchainAvailable'](params); }
    privateGetWalletCryptoFeeEstimate(params) { return this['privateGetWalletCryptoFeeEstimate'](params); }
    privateGetSubAccount(params) { return this['privateGetSubAccount'](params); }
    privateGetSubAccountAcl(params) { return this['privateGetSubAccountAcl'](params); }
    privateGetSubAccountBalanceSubAccID(params) { return this['privateGetSubAccountBalanceSubAccID'](params); }
    privateGetSubAccountCryptoAddressSubAccIDCurrency(params) { return this['privateGetSubAccountCryptoAddressSubAccIDCurrency'](params); }
    privatePostSpotOrder(params) { return this['privatePostSpotOrder'](params); }
    privatePostMarginOrder(params) { return this['privatePostMarginOrder'](params); }
    privatePostFuturesOrder(params) { return this['privatePostFuturesOrder'](params); }
    privatePostWalletConvert(params) { return this['privatePostWalletConvert'](params); }
    privatePostWalletCryptoAddress(params) { return this['privatePostWalletCryptoAddress'](params); }
    privatePostWalletCryptoWithdraw(params) { return this['privatePostWalletCryptoWithdraw'](params); }
    privatePostWalletTransfer(params) { return this['privatePostWalletTransfer'](params); }
    privatePostSubAccountFreeze(params) { return this['privatePostSubAccountFreeze'](params); }
    privatePostSubAccountActivate(params) { return this['privatePostSubAccountActivate'](params); }
    privatePostSubAccountTransfer(params) { return this['privatePostSubAccountTransfer'](params); }
    privatePostSubAccountAcl(params) { return this['privatePostSubAccountAcl'](params); }
    privatePatchSpotOrderClientOrderId(params) { return this['privatePatchSpotOrderClientOrderId'](params); }
    privatePatchMarginOrderClientOrderId(params) { return this['privatePatchMarginOrderClientOrderId'](params); }
    privatePatchFuturesOrderClientOrderId(params) { return this['privatePatchFuturesOrderClientOrderId'](params); }
    privateDeleteSpotOrder(params) { return this['privateDeleteSpotOrder'](params); }
    privateDeleteSpotOrderClientOrderId(params) { return this['privateDeleteSpotOrderClientOrderId'](params); }
    privateDeleteMarginPosition(params) { return this['privateDeleteMarginPosition'](params); }
    privateDeleteMarginPositionIsolatedSymbol(params) { return this['privateDeleteMarginPositionIsolatedSymbol'](params); }
    privateDeleteMarginOrder(params) { return this['privateDeleteMarginOrder'](params); }
    privateDeleteMarginOrderClientOrderId(params) { return this['privateDeleteMarginOrderClientOrderId'](params); }
    privateDeleteFuturesPosition(params) { return this['privateDeleteFuturesPosition'](params); }
    privateDeleteFuturesPositionIsolatedSymbol(params) { return this['privateDeleteFuturesPositionIsolatedSymbol'](params); }
    privateDeleteFuturesOrder(params) { return this['privateDeleteFuturesOrder'](params); }
    privateDeleteFuturesOrderClientOrderId(params) { return this['privateDeleteFuturesOrderClientOrderId'](params); }
    privateDeleteWalletCryptoWithdrawId(params) { return this['privateDeleteWalletCryptoWithdrawId'](params); }
    privatePutMarginAccountIsolatedSymbol(params) { return this['privatePutMarginAccountIsolatedSymbol'](params); }
    privatePutFuturesAccountIsolatedSymbol(params) { return this['privatePutFuturesAccountIsolatedSymbol'](params); }
    privatePutWalletCryptoWithdrawId(params) { return this['privatePutWalletCryptoWithdrawId'](params); }
}

module.exports = Exchange;
