import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
export default class Exchange extends _Exchange {
    publicGetConfConfig(params?: {}): Promise<implicitReturnType>;
    publicGetConfPubActionObject(params?: {}): Promise<implicitReturnType>;
    publicGetConfPubActionObjectDetail(params?: {}): Promise<implicitReturnType>;
    publicGetConfPubMapObject(params?: {}): Promise<implicitReturnType>;
    publicGetConfPubMapObjectDetail(params?: {}): Promise<implicitReturnType>;
    publicGetConfPubMapCurrencyDetail(params?: {}): Promise<implicitReturnType>;
    publicGetConfPubMapCurrencySym(params?: {}): Promise<implicitReturnType>;
    publicGetConfPubMapCurrencyLabel(params?: {}): Promise<implicitReturnType>;
    publicGetConfPubMapCurrencyUnit(params?: {}): Promise<implicitReturnType>;
    publicGetConfPubMapCurrencyUndl(params?: {}): Promise<implicitReturnType>;
    publicGetConfPubMapCurrencyPool(params?: {}): Promise<implicitReturnType>;
    publicGetConfPubMapCurrencyExplorer(params?: {}): Promise<implicitReturnType>;
    publicGetConfPubMapCurrencyTxFee(params?: {}): Promise<implicitReturnType>;
    publicGetConfPubMapTxMethod(params?: {}): Promise<implicitReturnType>;
    publicGetConfPubListObject(params?: {}): Promise<implicitReturnType>;
    publicGetConfPubListObjectDetail(params?: {}): Promise<implicitReturnType>;
    publicGetConfPubListCurrency(params?: {}): Promise<implicitReturnType>;
    publicGetConfPubListPairExchange(params?: {}): Promise<implicitReturnType>;
    publicGetConfPubListPairMargin(params?: {}): Promise<implicitReturnType>;
    publicGetConfPubListPairFutures(params?: {}): Promise<implicitReturnType>;
    publicGetConfPubListCompetitions(params?: {}): Promise<implicitReturnType>;
    publicGetConfPubInfoObject(params?: {}): Promise<implicitReturnType>;
    publicGetConfPubInfoObjectDetail(params?: {}): Promise<implicitReturnType>;
    publicGetConfPubInfoPair(params?: {}): Promise<implicitReturnType>;
    publicGetConfPubInfoPairFutures(params?: {}): Promise<implicitReturnType>;
    publicGetConfPubInfoTxStatus(params?: {}): Promise<implicitReturnType>;
    publicGetConfPubFees(params?: {}): Promise<implicitReturnType>;
    publicGetPlatformStatus(params?: {}): Promise<implicitReturnType>;
    publicGetTickers(params?: {}): Promise<implicitReturnType>;
    publicGetTickerSymbol(params?: {}): Promise<implicitReturnType>;
    publicGetTickersHist(params?: {}): Promise<implicitReturnType>;
    publicGetTradesSymbolHist(params?: {}): Promise<implicitReturnType>;
    publicGetBookSymbolPrecision(params?: {}): Promise<implicitReturnType>;
    publicGetBookSymbolP0(params?: {}): Promise<implicitReturnType>;
    publicGetBookSymbolP1(params?: {}): Promise<implicitReturnType>;
    publicGetBookSymbolP2(params?: {}): Promise<implicitReturnType>;
    publicGetBookSymbolP3(params?: {}): Promise<implicitReturnType>;
    publicGetBookSymbolR0(params?: {}): Promise<implicitReturnType>;
    publicGetStats1KeySizeSymbolSideSection(params?: {}): Promise<implicitReturnType>;
    publicGetStats1KeySizeSymbolSideLast(params?: {}): Promise<implicitReturnType>;
    publicGetStats1KeySizeSymbolSideHist(params?: {}): Promise<implicitReturnType>;
    publicGetStats1KeySizeSymbolSection(params?: {}): Promise<implicitReturnType>;
    publicGetStats1KeySizeSymbolLast(params?: {}): Promise<implicitReturnType>;
    publicGetStats1KeySizeSymbolHist(params?: {}): Promise<implicitReturnType>;
    publicGetStats1KeySizeSymbolLongLast(params?: {}): Promise<implicitReturnType>;
    publicGetStats1KeySizeSymbolLongHist(params?: {}): Promise<implicitReturnType>;
    publicGetStats1KeySizeSymbolShortLast(params?: {}): Promise<implicitReturnType>;
    publicGetStats1KeySizeSymbolShortHist(params?: {}): Promise<implicitReturnType>;
    publicGetCandlesTradeTimeframeSymbolPeriodSection(params?: {}): Promise<implicitReturnType>;
    publicGetCandlesTradeTimeframeSymbolSection(params?: {}): Promise<implicitReturnType>;
    publicGetCandlesTradeTimeframeSymbolLast(params?: {}): Promise<implicitReturnType>;
    publicGetCandlesTradeTimeframeSymbolHist(params?: {}): Promise<implicitReturnType>;
    publicGetStatusType(params?: {}): Promise<implicitReturnType>;
    publicGetStatusDeriv(params?: {}): Promise<implicitReturnType>;
    publicGetLiquidationsHist(params?: {}): Promise<implicitReturnType>;
    publicGetRankingsKeyTimeframeSymbolSection(params?: {}): Promise<implicitReturnType>;
    publicGetRankingsKeyTimeframeSymbolHist(params?: {}): Promise<implicitReturnType>;
    publicGetPulseHist(params?: {}): Promise<implicitReturnType>;
    publicGetPulseProfileNickname(params?: {}): Promise<implicitReturnType>;
    publicGetFundingStatsSymbolHist(params?: {}): Promise<implicitReturnType>;
    publicPostCalcTradeAvg(params?: {}): Promise<implicitReturnType>;
    publicPostCalcFx(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRWallets(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRWalletsHist(params?: {}): Promise<implicitReturnType>;
    privatePostAuthROrders(params?: {}): Promise<implicitReturnType>;
    privatePostAuthROrdersSymbol(params?: {}): Promise<implicitReturnType>;
    privatePostAuthWOrderSubmit(params?: {}): Promise<implicitReturnType>;
    privatePostAuthWOrderUpdate(params?: {}): Promise<implicitReturnType>;
    privatePostAuthWOrderCancel(params?: {}): Promise<implicitReturnType>;
    privatePostAuthWOrderMulti(params?: {}): Promise<implicitReturnType>;
    privatePostAuthWOrderCancelMulti(params?: {}): Promise<implicitReturnType>;
    privatePostAuthROrdersSymbolHist(params?: {}): Promise<implicitReturnType>;
    privatePostAuthROrdersHist(params?: {}): Promise<implicitReturnType>;
    privatePostAuthROrderSymbolIdTrades(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRTradesSymbolHist(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRTradesHist(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRLedgersCurrencyHist(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRLedgersHist(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRInfoMarginKey(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRInfoMarginBase(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRInfoMarginSymAll(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRPositions(params?: {}): Promise<implicitReturnType>;
    privatePostAuthWPositionClaim(params?: {}): Promise<implicitReturnType>;
    privatePostAuthWPositionIncrease(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRPositionIncreaseInfo(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRPositionsHist(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRPositionsAudit(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRPositionsSnap(params?: {}): Promise<implicitReturnType>;
    privatePostAuthWDerivCollateralSet(params?: {}): Promise<implicitReturnType>;
    privatePostAuthWDerivCollateralLimits(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRFundingOffers(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRFundingOffersSymbol(params?: {}): Promise<implicitReturnType>;
    privatePostAuthWFundingOfferSubmit(params?: {}): Promise<implicitReturnType>;
    privatePostAuthWFundingOfferCancel(params?: {}): Promise<implicitReturnType>;
    privatePostAuthWFundingOfferCancelAll(params?: {}): Promise<implicitReturnType>;
    privatePostAuthWFundingClose(params?: {}): Promise<implicitReturnType>;
    privatePostAuthWFundingAuto(params?: {}): Promise<implicitReturnType>;
    privatePostAuthWFundingKeep(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRFundingOffersSymbolHist(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRFundingOffersHist(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRFundingLoans(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRFundingLoansHist(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRFundingLoansSymbol(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRFundingLoansSymbolHist(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRFundingCredits(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRFundingCreditsHist(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRFundingCreditsSymbol(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRFundingCreditsSymbolHist(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRFundingTradesSymbolHist(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRFundingTradesHist(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRInfoFundingKey(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRInfoUser(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRSummary(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRLoginsHist(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRPermissions(params?: {}): Promise<implicitReturnType>;
    privatePostAuthWToken(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRAuditHist(params?: {}): Promise<implicitReturnType>;
    privatePostAuthWTransfer(params?: {}): Promise<implicitReturnType>;
    privatePostAuthWDepositAddress(params?: {}): Promise<implicitReturnType>;
    privatePostAuthWDepositInvoice(params?: {}): Promise<implicitReturnType>;
    privatePostAuthWWithdraw(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRMovementsCurrencyHist(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRMovementsHist(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRAlerts(params?: {}): Promise<implicitReturnType>;
    privatePostAuthWAlertSet(params?: {}): Promise<implicitReturnType>;
    privatePostAuthWAlertPriceSymbolPriceDel(params?: {}): Promise<implicitReturnType>;
    privatePostAuthWAlertTypeSymbolPriceDel(params?: {}): Promise<implicitReturnType>;
    privatePostAuthCalcOrderAvail(params?: {}): Promise<implicitReturnType>;
    privatePostAuthWSettingsSet(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRSettings(params?: {}): Promise<implicitReturnType>;
    privatePostAuthWSettingsDel(params?: {}): Promise<implicitReturnType>;
    privatePostAuthRPulseHist(params?: {}): Promise<implicitReturnType>;
    privatePostAuthWPulseAdd(params?: {}): Promise<implicitReturnType>;
    privatePostAuthWPulseDel(params?: {}): Promise<implicitReturnType>;
}
