'use strict';

var Exchange$1 = require('../base/Exchange.js');

// -------------------------------------------------------------------------------
class Exchange extends Exchange$1["default"] {
    v2GetPlatformStatus(params) { return this['v2GetPlatformStatus'](params); }
    v2GetTickers(params) { return this['v2GetTickers'](params); }
    v2GetTickerSymbol(params) { return this['v2GetTickerSymbol'](params); }
    v2GetTickersHist(params) { return this['v2GetTickersHist'](params); }
    v2GetTradesSymbolHist(params) { return this['v2GetTradesSymbolHist'](params); }
    v2GetBookSymbolPrecision(params) { return this['v2GetBookSymbolPrecision'](params); }
    v2GetBookSymbolP0(params) { return this['v2GetBookSymbolP0'](params); }
    v2GetBookSymbolP1(params) { return this['v2GetBookSymbolP1'](params); }
    v2GetBookSymbolP2(params) { return this['v2GetBookSymbolP2'](params); }
    v2GetBookSymbolP3(params) { return this['v2GetBookSymbolP3'](params); }
    v2GetBookSymbolR0(params) { return this['v2GetBookSymbolR0'](params); }
    v2GetStats1KeySizeSymbolSideSection(params) { return this['v2GetStats1KeySizeSymbolSideSection'](params); }
    v2GetStats1KeySizeSymbolSection(params) { return this['v2GetStats1KeySizeSymbolSection'](params); }
    v2GetStats1KeySizeSymbolLongLast(params) { return this['v2GetStats1KeySizeSymbolLongLast'](params); }
    v2GetStats1KeySizeSymbolLongHist(params) { return this['v2GetStats1KeySizeSymbolLongHist'](params); }
    v2GetStats1KeySizeSymbolShortLast(params) { return this['v2GetStats1KeySizeSymbolShortLast'](params); }
    v2GetStats1KeySizeSymbolShortHist(params) { return this['v2GetStats1KeySizeSymbolShortHist'](params); }
    v2GetCandlesTradeTimeframeSymbolSection(params) { return this['v2GetCandlesTradeTimeframeSymbolSection'](params); }
    v2GetCandlesTradeTimeframeSymbolLast(params) { return this['v2GetCandlesTradeTimeframeSymbolLast'](params); }
    v2GetCandlesTradeTimeframeSymbolHist(params) { return this['v2GetCandlesTradeTimeframeSymbolHist'](params); }
    publicGetBookSymbol(params) { return this['publicGetBookSymbol'](params); }
    publicGetLendbookCurrency(params) { return this['publicGetLendbookCurrency'](params); }
    publicGetLendsCurrency(params) { return this['publicGetLendsCurrency'](params); }
    publicGetPubtickerSymbol(params) { return this['publicGetPubtickerSymbol'](params); }
    publicGetStatsSymbol(params) { return this['publicGetStatsSymbol'](params); }
    publicGetSymbols(params) { return this['publicGetSymbols'](params); }
    publicGetSymbolsDetails(params) { return this['publicGetSymbolsDetails'](params); }
    publicGetTickers(params) { return this['publicGetTickers'](params); }
    publicGetTradesSymbol(params) { return this['publicGetTradesSymbol'](params); }
    privatePostAccountFees(params) { return this['privatePostAccountFees'](params); }
    privatePostAccountInfos(params) { return this['privatePostAccountInfos'](params); }
    privatePostBalances(params) { return this['privatePostBalances'](params); }
    privatePostBasketManage(params) { return this['privatePostBasketManage'](params); }
    privatePostCredits(params) { return this['privatePostCredits'](params); }
    privatePostDepositNew(params) { return this['privatePostDepositNew'](params); }
    privatePostFundingClose(params) { return this['privatePostFundingClose'](params); }
    privatePostHistory(params) { return this['privatePostHistory'](params); }
    privatePostHistoryMovements(params) { return this['privatePostHistoryMovements'](params); }
    privatePostKeyInfo(params) { return this['privatePostKeyInfo'](params); }
    privatePostMarginInfos(params) { return this['privatePostMarginInfos'](params); }
    privatePostMytrades(params) { return this['privatePostMytrades'](params); }
    privatePostMytradesFunding(params) { return this['privatePostMytradesFunding'](params); }
    privatePostOfferCancel(params) { return this['privatePostOfferCancel'](params); }
    privatePostOfferNew(params) { return this['privatePostOfferNew'](params); }
    privatePostOfferStatus(params) { return this['privatePostOfferStatus'](params); }
    privatePostOffers(params) { return this['privatePostOffers'](params); }
    privatePostOffersHist(params) { return this['privatePostOffersHist'](params); }
    privatePostOrderCancel(params) { return this['privatePostOrderCancel'](params); }
    privatePostOrderCancelAll(params) { return this['privatePostOrderCancelAll'](params); }
    privatePostOrderCancelMulti(params) { return this['privatePostOrderCancelMulti'](params); }
    privatePostOrderCancelReplace(params) { return this['privatePostOrderCancelReplace'](params); }
    privatePostOrderNew(params) { return this['privatePostOrderNew'](params); }
    privatePostOrderNewMulti(params) { return this['privatePostOrderNewMulti'](params); }
    privatePostOrderStatus(params) { return this['privatePostOrderStatus'](params); }
    privatePostOrders(params) { return this['privatePostOrders'](params); }
    privatePostOrdersHist(params) { return this['privatePostOrdersHist'](params); }
    privatePostPositionClaim(params) { return this['privatePostPositionClaim'](params); }
    privatePostPositionClose(params) { return this['privatePostPositionClose'](params); }
    privatePostPositions(params) { return this['privatePostPositions'](params); }
    privatePostSummary(params) { return this['privatePostSummary'](params); }
    privatePostTakenFunds(params) { return this['privatePostTakenFunds'](params); }
    privatePostTotalTakenFunds(params) { return this['privatePostTotalTakenFunds'](params); }
    privatePostTransfer(params) { return this['privatePostTransfer'](params); }
    privatePostUnusedTakenFunds(params) { return this['privatePostUnusedTakenFunds'](params); }
    privatePostWithdraw(params) { return this['privatePostWithdraw'](params); }
}

module.exports = Exchange;
