// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

export default class Exchange extends _Exchange {
    publicGetMarketTickers (params?: {}): Promise<implicitReturnType> { return this['publicGetMarketTickers'] (params); }
    publicGetMarketTicker (params?: {}): Promise<implicitReturnType> { return this['publicGetMarketTicker'] (params); }
    publicGetMarketIndexTickers (params?: {}): Promise<implicitReturnType> { return this['publicGetMarketIndexTickers'] (params); }
    publicGetMarketBooks (params?: {}): Promise<implicitReturnType> { return this['publicGetMarketBooks'] (params); }
    publicGetMarketBooksLite (params?: {}): Promise<implicitReturnType> { return this['publicGetMarketBooksLite'] (params); }
    publicGetMarketCandles (params?: {}): Promise<implicitReturnType> { return this['publicGetMarketCandles'] (params); }
    publicGetMarketHistoryCandles (params?: {}): Promise<implicitReturnType> { return this['publicGetMarketHistoryCandles'] (params); }
    publicGetMarketHistoryMarkPriceCandles (params?: {}): Promise<implicitReturnType> { return this['publicGetMarketHistoryMarkPriceCandles'] (params); }
    publicGetMarketHistoryIndexCandles (params?: {}): Promise<implicitReturnType> { return this['publicGetMarketHistoryIndexCandles'] (params); }
    publicGetMarketIndexCandles (params?: {}): Promise<implicitReturnType> { return this['publicGetMarketIndexCandles'] (params); }
    publicGetMarketMarkPriceCandles (params?: {}): Promise<implicitReturnType> { return this['publicGetMarketMarkPriceCandles'] (params); }
    publicGetMarketTrades (params?: {}): Promise<implicitReturnType> { return this['publicGetMarketTrades'] (params); }
    publicGetMarketPlatform24Volume (params?: {}): Promise<implicitReturnType> { return this['publicGetMarketPlatform24Volume'] (params); }
    publicGetMarketOpenOracle (params?: {}): Promise<implicitReturnType> { return this['publicGetMarketOpenOracle'] (params); }
    publicGetMarketIndexComponents (params?: {}): Promise<implicitReturnType> { return this['publicGetMarketIndexComponents'] (params); }
    publicGetMarketOptionInstrumentFamilyTrades (params?: {}): Promise<implicitReturnType> { return this['publicGetMarketOptionInstrumentFamilyTrades'] (params); }
    publicGetPublicInstruments (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicInstruments'] (params); }
    publicGetPublicInstrumentTickBands (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicInstrumentTickBands'] (params); }
    publicGetPublicDeliveryExerciseHistory (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicDeliveryExerciseHistory'] (params); }
    publicGetPublicOpenInterest (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicOpenInterest'] (params); }
    publicGetPublicFundingRate (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicFundingRate'] (params); }
    publicGetPublicFundingRateHistory (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicFundingRateHistory'] (params); }
    publicGetPublicPriceLimit (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicPriceLimit'] (params); }
    publicGetPublicOptSummary (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicOptSummary'] (params); }
    publicGetPublicEstimatedPrice (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicEstimatedPrice'] (params); }
    publicGetPublicDiscountRateInterestFreeQuota (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicDiscountRateInterestFreeQuota'] (params); }
    publicGetPublicTime (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicTime'] (params); }
    publicGetPublicLiquidationOrders (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicLiquidationOrders'] (params); }
    publicGetPublicMarkPrice (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicMarkPrice'] (params); }
    publicGetPublicOptionTrades (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicOptionTrades'] (params); }
    publicGetPublicPositionTiers (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicPositionTiers'] (params); }
    publicGetPublicUnderlying (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicUnderlying'] (params); }
    publicGetPublicInterestRateLoanQuota (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicInterestRateLoanQuota'] (params); }
    publicGetPublicVipInterestRateLoanQuota (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicVipInterestRateLoanQuota'] (params); }
    publicGetRubikStatTradingDataSupportCoin (params?: {}): Promise<implicitReturnType> { return this['publicGetRubikStatTradingDataSupportCoin'] (params); }
    publicGetRubikStatTakerVolume (params?: {}): Promise<implicitReturnType> { return this['publicGetRubikStatTakerVolume'] (params); }
    publicGetRubikStatMarginLoanRatio (params?: {}): Promise<implicitReturnType> { return this['publicGetRubikStatMarginLoanRatio'] (params); }
    publicGetRubikStatContractsLongShortAccountRatio (params?: {}): Promise<implicitReturnType> { return this['publicGetRubikStatContractsLongShortAccountRatio'] (params); }
    publicGetRubikStatContractsOpenInterestVolume (params?: {}): Promise<implicitReturnType> { return this['publicGetRubikStatContractsOpenInterestVolume'] (params); }
    publicGetRubikStatOptionOpenInterestVolume (params?: {}): Promise<implicitReturnType> { return this['publicGetRubikStatOptionOpenInterestVolume'] (params); }
    publicGetRubikStatOptionOpenInterestVolumeRatio (params?: {}): Promise<implicitReturnType> { return this['publicGetRubikStatOptionOpenInterestVolumeRatio'] (params); }
    publicGetRubikStatOptionOpenInterestVolumeExpiry (params?: {}): Promise<implicitReturnType> { return this['publicGetRubikStatOptionOpenInterestVolumeExpiry'] (params); }
    publicGetRubikStatOptionOpenInterestVolumeStrike (params?: {}): Promise<implicitReturnType> { return this['publicGetRubikStatOptionOpenInterestVolumeStrike'] (params); }
    publicGetRubikStatOptionTakerBlockVolume (params?: {}): Promise<implicitReturnType> { return this['publicGetRubikStatOptionTakerBlockVolume'] (params); }
    publicGetSystemStatus (params?: {}): Promise<implicitReturnType> { return this['publicGetSystemStatus'] (params); }
    publicGetFinanceSavingsLendingRateSummary (params?: {}): Promise<implicitReturnType> { return this['publicGetFinanceSavingsLendingRateSummary'] (params); }
    publicGetFinanceSavingsLendingRateHistory (params?: {}): Promise<implicitReturnType> { return this['publicGetFinanceSavingsLendingRateHistory'] (params); }
    publicGetMarketExchangeRate (params?: {}): Promise<implicitReturnType> { return this['publicGetMarketExchangeRate'] (params); }
    privateGetAccountAccountPositionRisk (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountAccountPositionRisk'] (params); }
    privateGetAccountBalance (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountBalance'] (params); }
    privateGetAccountPositions (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountPositions'] (params); }
    privateGetAccountPositionsHistory (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountPositionsHistory'] (params); }
    privateGetAccountBills (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountBills'] (params); }
    privateGetAccountBillsArchive (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountBillsArchive'] (params); }
    privateGetAccountConfig (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountConfig'] (params); }
    privateGetAccountMaxSize (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountMaxSize'] (params); }
    privateGetAccountMaxAvailSize (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountMaxAvailSize'] (params); }
    privateGetAccountLeverageInfo (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountLeverageInfo'] (params); }
    privateGetAccountMaxLoan (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountMaxLoan'] (params); }
    privateGetAccountTradeFee (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountTradeFee'] (params); }
    privateGetAccountInterestAccrued (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountInterestAccrued'] (params); }
    privateGetAccountInterestRate (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountInterestRate'] (params); }
    privateGetAccountMaxWithdrawal (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountMaxWithdrawal'] (params); }
    privateGetAccountRiskState (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountRiskState'] (params); }
    privateGetAccountBorrowRepayHistory (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountBorrowRepayHistory'] (params); }
    privateGetAccountQuickMarginBorrowRepayHistory (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountQuickMarginBorrowRepayHistory'] (params); }
    privateGetAccountInterestLimits (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountInterestLimits'] (params); }
    privateGetAccountVipInterestAccrued (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountVipInterestAccrued'] (params); }
    privateGetAccountVipLoanOrderList (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountVipLoanOrderList'] (params); }
    privateGetAccountVipLoanOrderDetail (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountVipLoanOrderDetail'] (params); }
    privateGetAssetAssetValuation (params?: {}): Promise<implicitReturnType> { return this['privateGetAssetAssetValuation'] (params); }
    privateGetAssetDepositAddress (params?: {}): Promise<implicitReturnType> { return this['privateGetAssetDepositAddress'] (params); }
    privateGetAssetBalances (params?: {}): Promise<implicitReturnType> { return this['privateGetAssetBalances'] (params); }
    privateGetAssetTransferState (params?: {}): Promise<implicitReturnType> { return this['privateGetAssetTransferState'] (params); }
    privateGetAssetDepositHistory (params?: {}): Promise<implicitReturnType> { return this['privateGetAssetDepositHistory'] (params); }
    privateGetAssetWithdrawalHistory (params?: {}): Promise<implicitReturnType> { return this['privateGetAssetWithdrawalHistory'] (params); }
    privateGetAssetDepositWithdrawStatus (params?: {}): Promise<implicitReturnType> { return this['privateGetAssetDepositWithdrawStatus'] (params); }
    privateGetAssetCurrencies (params?: {}): Promise<implicitReturnType> { return this['privateGetAssetCurrencies'] (params); }
    privateGetAssetBills (params?: {}): Promise<implicitReturnType> { return this['privateGetAssetBills'] (params); }
    privateGetAssetPiggyBalance (params?: {}): Promise<implicitReturnType> { return this['privateGetAssetPiggyBalance'] (params); }
    privateGetAssetDepositLightning (params?: {}): Promise<implicitReturnType> { return this['privateGetAssetDepositLightning'] (params); }
    privateGetAssetNonTradableAssets (params?: {}): Promise<implicitReturnType> { return this['privateGetAssetNonTradableAssets'] (params); }
    privateGetTradeOrder (params?: {}): Promise<implicitReturnType> { return this['privateGetTradeOrder'] (params); }
    privateGetTradeOrdersPending (params?: {}): Promise<implicitReturnType> { return this['privateGetTradeOrdersPending'] (params); }
    privateGetTradeOrdersHistory (params?: {}): Promise<implicitReturnType> { return this['privateGetTradeOrdersHistory'] (params); }
    privateGetTradeOrdersHistoryArchive (params?: {}): Promise<implicitReturnType> { return this['privateGetTradeOrdersHistoryArchive'] (params); }
    privateGetTradeFills (params?: {}): Promise<implicitReturnType> { return this['privateGetTradeFills'] (params); }
    privateGetTradeFillsHistory (params?: {}): Promise<implicitReturnType> { return this['privateGetTradeFillsHistory'] (params); }
    privateGetTradeOrdersAlgoPending (params?: {}): Promise<implicitReturnType> { return this['privateGetTradeOrdersAlgoPending'] (params); }
    privateGetTradeOrdersAlgoHistory (params?: {}): Promise<implicitReturnType> { return this['privateGetTradeOrdersAlgoHistory'] (params); }
    privateGetTradeOrderAlgo (params?: {}): Promise<implicitReturnType> { return this['privateGetTradeOrderAlgo'] (params); }
    privateGetAccountSubaccountBalances (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountSubaccountBalances'] (params); }
    privateGetAssetSubaccountBills (params?: {}): Promise<implicitReturnType> { return this['privateGetAssetSubaccountBills'] (params); }
    privateGetUsersSubaccountList (params?: {}): Promise<implicitReturnType> { return this['privateGetUsersSubaccountList'] (params); }
    privateGetUsersSubaccountApikey (params?: {}): Promise<implicitReturnType> { return this['privateGetUsersSubaccountApikey'] (params); }
    privateGetUsersEntrustSubaccountList (params?: {}): Promise<implicitReturnType> { return this['privateGetUsersEntrustSubaccountList'] (params); }
    privateGetBrokerNdInfo (params?: {}): Promise<implicitReturnType> { return this['privateGetBrokerNdInfo'] (params); }
    privateGetBrokerNdSubaccountInfo (params?: {}): Promise<implicitReturnType> { return this['privateGetBrokerNdSubaccountInfo'] (params); }
    privateGetAssetBrokerNdSubaccountDepositAddress (params?: {}): Promise<implicitReturnType> { return this['privateGetAssetBrokerNdSubaccountDepositAddress'] (params); }
    privateGetAssetBrokerNdSubaccountDepositHistory (params?: {}): Promise<implicitReturnType> { return this['privateGetAssetBrokerNdSubaccountDepositHistory'] (params); }
    privateGetBrokerNdRebateDaily (params?: {}): Promise<implicitReturnType> { return this['privateGetBrokerNdRebateDaily'] (params); }
    privateGetBrokerNdSubaccountApikey (params?: {}): Promise<implicitReturnType> { return this['privateGetBrokerNdSubaccountApikey'] (params); }
    privateGetBrokerNdRebatePerOrders (params?: {}): Promise<implicitReturnType> { return this['privateGetBrokerNdRebatePerOrders'] (params); }
    privateGetAssetBrokerNdSubaccountWithdrawalHistory (params?: {}): Promise<implicitReturnType> { return this['privateGetAssetBrokerNdSubaccountWithdrawalHistory'] (params); }
    privateGetAssetConvertCurrencies (params?: {}): Promise<implicitReturnType> { return this['privateGetAssetConvertCurrencies'] (params); }
    privateGetAssetConvertCurrencyPair (params?: {}): Promise<implicitReturnType> { return this['privateGetAssetConvertCurrencyPair'] (params); }
    privateGetAssetConvertEstimateQuote (params?: {}): Promise<implicitReturnType> { return this['privateGetAssetConvertEstimateQuote'] (params); }
    privateGetAssetConvertTrade (params?: {}): Promise<implicitReturnType> { return this['privateGetAssetConvertTrade'] (params); }
    privateGetAssetConvertHistory (params?: {}): Promise<implicitReturnType> { return this['privateGetAssetConvertHistory'] (params); }
    privateGetAccountGreeks (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountGreeks'] (params); }
    privateGetFinanceStakingDefiOffers (params?: {}): Promise<implicitReturnType> { return this['privateGetFinanceStakingDefiOffers'] (params); }
    privateGetFinanceStakingDefiOrdersActive (params?: {}): Promise<implicitReturnType> { return this['privateGetFinanceStakingDefiOrdersActive'] (params); }
    privateGetFinanceStakingDefiOrdersHistory (params?: {}): Promise<implicitReturnType> { return this['privateGetFinanceStakingDefiOrdersHistory'] (params); }
    privateGetFinanceSavingsBalance (params?: {}): Promise<implicitReturnType> { return this['privateGetFinanceSavingsBalance'] (params); }
    privateGetFinanceSavingsLendingHistory (params?: {}): Promise<implicitReturnType> { return this['privateGetFinanceSavingsLendingHistory'] (params); }
    privateGetRfqCounterparties (params?: {}): Promise<implicitReturnType> { return this['privateGetRfqCounterparties'] (params); }
    privateGetRfqMakerInstrumentSettings (params?: {}): Promise<implicitReturnType> { return this['privateGetRfqMakerInstrumentSettings'] (params); }
    privateGetRfqRfqs (params?: {}): Promise<implicitReturnType> { return this['privateGetRfqRfqs'] (params); }
    privateGetRfqQuotes (params?: {}): Promise<implicitReturnType> { return this['privateGetRfqQuotes'] (params); }
    privateGetRfqTrades (params?: {}): Promise<implicitReturnType> { return this['privateGetRfqTrades'] (params); }
    privateGetRfqPublicTrades (params?: {}): Promise<implicitReturnType> { return this['privateGetRfqPublicTrades'] (params); }
    privateGetCopytradingCurrentSubpositions (params?: {}): Promise<implicitReturnType> { return this['privateGetCopytradingCurrentSubpositions'] (params); }
    privateGetCopytradingSubpositionsHistory (params?: {}): Promise<implicitReturnType> { return this['privateGetCopytradingSubpositionsHistory'] (params); }
    privateGetCopytradingInstruments (params?: {}): Promise<implicitReturnType> { return this['privateGetCopytradingInstruments'] (params); }
    privateGetCopytradingProfitSharingDetails (params?: {}): Promise<implicitReturnType> { return this['privateGetCopytradingProfitSharingDetails'] (params); }
    privateGetCopytradingTotalProfitSharing (params?: {}): Promise<implicitReturnType> { return this['privateGetCopytradingTotalProfitSharing'] (params); }
    privateGetCopytradingUnrealizedProfitSharingDetails (params?: {}): Promise<implicitReturnType> { return this['privateGetCopytradingUnrealizedProfitSharingDetails'] (params); }
    privateGetTradingBotGridOrdersAlgoPending (params?: {}): Promise<implicitReturnType> { return this['privateGetTradingBotGridOrdersAlgoPending'] (params); }
    privateGetTradingBotGridOrdersAlgoHistory (params?: {}): Promise<implicitReturnType> { return this['privateGetTradingBotGridOrdersAlgoHistory'] (params); }
    privateGetTradingBotGridOrdersAlgoDetails (params?: {}): Promise<implicitReturnType> { return this['privateGetTradingBotGridOrdersAlgoDetails'] (params); }
    privateGetTradingBotGridSubOrders (params?: {}): Promise<implicitReturnType> { return this['privateGetTradingBotGridSubOrders'] (params); }
    privateGetTradingBotGridPositions (params?: {}): Promise<implicitReturnType> { return this['privateGetTradingBotGridPositions'] (params); }
    privateGetTradingBotGridAiParam (params?: {}): Promise<implicitReturnType> { return this['privateGetTradingBotGridAiParam'] (params); }
    privatePostAccountSetPositionMode (params?: {}): Promise<implicitReturnType> { return this['privatePostAccountSetPositionMode'] (params); }
    privatePostAccountSetLeverage (params?: {}): Promise<implicitReturnType> { return this['privatePostAccountSetLeverage'] (params); }
    privatePostAccountPositionMarginBalance (params?: {}): Promise<implicitReturnType> { return this['privatePostAccountPositionMarginBalance'] (params); }
    privatePostAccountSetGreeks (params?: {}): Promise<implicitReturnType> { return this['privatePostAccountSetGreeks'] (params); }
    privatePostAccountSetIsolatedMode (params?: {}): Promise<implicitReturnType> { return this['privatePostAccountSetIsolatedMode'] (params); }
    privatePostAccountSetRiskOffsetType (params?: {}): Promise<implicitReturnType> { return this['privatePostAccountSetRiskOffsetType'] (params); }
    privatePostAccountSimulatedMargin (params?: {}): Promise<implicitReturnType> { return this['privatePostAccountSimulatedMargin'] (params); }
    privatePostAccountBorrowRepay (params?: {}): Promise<implicitReturnType> { return this['privatePostAccountBorrowRepay'] (params); }
    privatePostAccountQuickMarginBorrowRepay (params?: {}): Promise<implicitReturnType> { return this['privatePostAccountQuickMarginBorrowRepay'] (params); }
    privatePostAccountActivateOption (params?: {}): Promise<implicitReturnType> { return this['privatePostAccountActivateOption'] (params); }
    privatePostAccountSetAutoLoan (params?: {}): Promise<implicitReturnType> { return this['privatePostAccountSetAutoLoan'] (params); }
    privatePostAssetTransfer (params?: {}): Promise<implicitReturnType> { return this['privatePostAssetTransfer'] (params); }
    privatePostAssetWithdrawal (params?: {}): Promise<implicitReturnType> { return this['privatePostAssetWithdrawal'] (params); }
    privatePostAssetWithdrawalLightning (params?: {}): Promise<implicitReturnType> { return this['privatePostAssetWithdrawalLightning'] (params); }
    privatePostAssetCancelWithdrawal (params?: {}): Promise<implicitReturnType> { return this['privatePostAssetCancelWithdrawal'] (params); }
    privatePostAssetConvertDustAssets (params?: {}): Promise<implicitReturnType> { return this['privatePostAssetConvertDustAssets'] (params); }
    privatePostTradeOrder (params?: {}): Promise<implicitReturnType> { return this['privatePostTradeOrder'] (params); }
    privatePostTradeBatchOrders (params?: {}): Promise<implicitReturnType> { return this['privatePostTradeBatchOrders'] (params); }
    privatePostTradeCancelOrder (params?: {}): Promise<implicitReturnType> { return this['privatePostTradeCancelOrder'] (params); }
    privatePostTradeCancelBatchOrders (params?: {}): Promise<implicitReturnType> { return this['privatePostTradeCancelBatchOrders'] (params); }
    privatePostTradeAmendOrder (params?: {}): Promise<implicitReturnType> { return this['privatePostTradeAmendOrder'] (params); }
    privatePostTradeAmendBatchOrders (params?: {}): Promise<implicitReturnType> { return this['privatePostTradeAmendBatchOrders'] (params); }
    privatePostTradeClosePosition (params?: {}): Promise<implicitReturnType> { return this['privatePostTradeClosePosition'] (params); }
    privatePostTradeOrderAlgo (params?: {}): Promise<implicitReturnType> { return this['privatePostTradeOrderAlgo'] (params); }
    privatePostTradeCancelAlgos (params?: {}): Promise<implicitReturnType> { return this['privatePostTradeCancelAlgos'] (params); }
    privatePostTradeCancelAdvanceAlgos (params?: {}): Promise<implicitReturnType> { return this['privatePostTradeCancelAdvanceAlgos'] (params); }
    privatePostUsersSubaccountDeleteApikey (params?: {}): Promise<implicitReturnType> { return this['privatePostUsersSubaccountDeleteApikey'] (params); }
    privatePostUsersSubaccountModifyApikey (params?: {}): Promise<implicitReturnType> { return this['privatePostUsersSubaccountModifyApikey'] (params); }
    privatePostUsersSubaccountApikey (params?: {}): Promise<implicitReturnType> { return this['privatePostUsersSubaccountApikey'] (params); }
    privatePostUsersSubaccountSetTransferOut (params?: {}): Promise<implicitReturnType> { return this['privatePostUsersSubaccountSetTransferOut'] (params); }
    privatePostAssetSubaccountTransfer (params?: {}): Promise<implicitReturnType> { return this['privatePostAssetSubaccountTransfer'] (params); }
    privatePostBrokerNdCreateSubaccount (params?: {}): Promise<implicitReturnType> { return this['privatePostBrokerNdCreateSubaccount'] (params); }
    privatePostBrokerNdDeleteSubaccount (params?: {}): Promise<implicitReturnType> { return this['privatePostBrokerNdDeleteSubaccount'] (params); }
    privatePostBrokerNdSetSubaccountLevel (params?: {}): Promise<implicitReturnType> { return this['privatePostBrokerNdSetSubaccountLevel'] (params); }
    privatePostBrokerNdSetSubaccountFeeRate (params?: {}): Promise<implicitReturnType> { return this['privatePostBrokerNdSetSubaccountFeeRate'] (params); }
    privatePostAssetBrokerNdSubaccountDepositAddress (params?: {}): Promise<implicitReturnType> { return this['privatePostAssetBrokerNdSubaccountDepositAddress'] (params); }
    privatePostBrokerNdSubaccountApikey (params?: {}): Promise<implicitReturnType> { return this['privatePostBrokerNdSubaccountApikey'] (params); }
    privatePostBrokerNdSubaccountDeleteApikey (params?: {}): Promise<implicitReturnType> { return this['privatePostBrokerNdSubaccountDeleteApikey'] (params); }
    privatePostBrokerNdSubaccountModifyApikey (params?: {}): Promise<implicitReturnType> { return this['privatePostBrokerNdSubaccountModifyApikey'] (params); }
    privatePostBrokerNdRebatePerOrders (params?: {}): Promise<implicitReturnType> { return this['privatePostBrokerNdRebatePerOrders'] (params); }
    privatePostFinanceStakingDefiPurchase (params?: {}): Promise<implicitReturnType> { return this['privatePostFinanceStakingDefiPurchase'] (params); }
    privatePostFinanceStakingDefiRedeem (params?: {}): Promise<implicitReturnType> { return this['privatePostFinanceStakingDefiRedeem'] (params); }
    privatePostFinanceStakingDefiCancel (params?: {}): Promise<implicitReturnType> { return this['privatePostFinanceStakingDefiCancel'] (params); }
    privatePostFinanceSavingsPurchaseRedempt (params?: {}): Promise<implicitReturnType> { return this['privatePostFinanceSavingsPurchaseRedempt'] (params); }
    privatePostFinanceSavingsSetLendingRate (params?: {}): Promise<implicitReturnType> { return this['privatePostFinanceSavingsSetLendingRate'] (params); }
    privatePostRfqCreateRfq (params?: {}): Promise<implicitReturnType> { return this['privatePostRfqCreateRfq'] (params); }
    privatePostRfqCancelRfq (params?: {}): Promise<implicitReturnType> { return this['privatePostRfqCancelRfq'] (params); }
    privatePostRfqCancelBatchRfqs (params?: {}): Promise<implicitReturnType> { return this['privatePostRfqCancelBatchRfqs'] (params); }
    privatePostRfqCancelAllRfqs (params?: {}): Promise<implicitReturnType> { return this['privatePostRfqCancelAllRfqs'] (params); }
    privatePostRfqExecuteQuote (params?: {}): Promise<implicitReturnType> { return this['privatePostRfqExecuteQuote'] (params); }
    privatePostRfqMakerInstrumentSettings (params?: {}): Promise<implicitReturnType> { return this['privatePostRfqMakerInstrumentSettings'] (params); }
    privatePostRfqMmpReset (params?: {}): Promise<implicitReturnType> { return this['privatePostRfqMmpReset'] (params); }
    privatePostRfqCreateQuote (params?: {}): Promise<implicitReturnType> { return this['privatePostRfqCreateQuote'] (params); }
    privatePostRfqCancelQuote (params?: {}): Promise<implicitReturnType> { return this['privatePostRfqCancelQuote'] (params); }
    privatePostRfqCancelBatchQuotes (params?: {}): Promise<implicitReturnType> { return this['privatePostRfqCancelBatchQuotes'] (params); }
    privatePostRfqCancelAllQuotes (params?: {}): Promise<implicitReturnType> { return this['privatePostRfqCancelAllQuotes'] (params); }
    privatePostCopytradingAlgoOrder (params?: {}): Promise<implicitReturnType> { return this['privatePostCopytradingAlgoOrder'] (params); }
    privatePostCopytradingCloseSubposition (params?: {}): Promise<implicitReturnType> { return this['privatePostCopytradingCloseSubposition'] (params); }
    privatePostCopytradingSetInstruments (params?: {}): Promise<implicitReturnType> { return this['privatePostCopytradingSetInstruments'] (params); }
    privatePostTradingBotGridOrderAlgo (params?: {}): Promise<implicitReturnType> { return this['privatePostTradingBotGridOrderAlgo'] (params); }
    privatePostTradingBotGridAmendOrderAlgo (params?: {}): Promise<implicitReturnType> { return this['privatePostTradingBotGridAmendOrderAlgo'] (params); }
    privatePostTradingBotGridStopOrderAlgo (params?: {}): Promise<implicitReturnType> { return this['privatePostTradingBotGridStopOrderAlgo'] (params); }
    privatePostTradingBotGridWithdrawIncome (params?: {}): Promise<implicitReturnType> { return this['privatePostTradingBotGridWithdrawIncome'] (params); }
    privatePostTradingBotGridComputeMarginBalance (params?: {}): Promise<implicitReturnType> { return this['privatePostTradingBotGridComputeMarginBalance'] (params); }
    privatePostTradingBotGridMarginBalance (params?: {}): Promise<implicitReturnType> { return this['privatePostTradingBotGridMarginBalance'] (params); }
}