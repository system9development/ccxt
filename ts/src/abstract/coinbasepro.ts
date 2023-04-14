// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

interface Exchange {
    publicGetCurrencies (params?: {}): Promise<implicitReturnType>;
    publicGetProducts (params?: {}): Promise<implicitReturnType>;
    publicGetProductsId (params?: {}): Promise<implicitReturnType>;
    publicGetProductsIdBook (params?: {}): Promise<implicitReturnType>;
    publicGetProductsIdCandles (params?: {}): Promise<implicitReturnType>;
    publicGetProductsIdStats (params?: {}): Promise<implicitReturnType>;
    publicGetProductsIdTicker (params?: {}): Promise<implicitReturnType>;
    publicGetProductsIdTrades (params?: {}): Promise<implicitReturnType>;
    publicGetTime (params?: {}): Promise<implicitReturnType>;
    publicGetProductsSparkLines (params?: {}): Promise<implicitReturnType>;
    privateGetAccounts (params?: {}): Promise<implicitReturnType>;
    privateGetAccountsId (params?: {}): Promise<implicitReturnType>;
    privateGetAccountsIdHolds (params?: {}): Promise<implicitReturnType>;
    privateGetAccountsIdLedger (params?: {}): Promise<implicitReturnType>;
    privateGetAccountsIdTransfers (params?: {}): Promise<implicitReturnType>;
    privateGetCoinbaseAccounts (params?: {}): Promise<implicitReturnType>;
    privateGetFills (params?: {}): Promise<implicitReturnType>;
    privateGetFunding (params?: {}): Promise<implicitReturnType>;
    privateGetFees (params?: {}): Promise<implicitReturnType>;
    privateGetMarginProfileInformation (params?: {}): Promise<implicitReturnType>;
    privateGetMarginBuyingPower (params?: {}): Promise<implicitReturnType>;
    privateGetMarginWithdrawalPower (params?: {}): Promise<implicitReturnType>;
    privateGetMarginWithdrawalPowerAll (params?: {}): Promise<implicitReturnType>;
    privateGetMarginExitPlan (params?: {}): Promise<implicitReturnType>;
    privateGetMarginLiquidationHistory (params?: {}): Promise<implicitReturnType>;
    privateGetMarginPositionRefreshAmounts (params?: {}): Promise<implicitReturnType>;
    privateGetMarginStatus (params?: {}): Promise<implicitReturnType>;
    privateGetOracle (params?: {}): Promise<implicitReturnType>;
    privateGetOrders (params?: {}): Promise<implicitReturnType>;
    privateGetOrdersId (params?: {}): Promise<implicitReturnType>;
    privateGetOrdersClientClientOid (params?: {}): Promise<implicitReturnType>;
    privateGetOtcOrders (params?: {}): Promise<implicitReturnType>;
    privateGetPaymentMethods (params?: {}): Promise<implicitReturnType>;
    privateGetPosition (params?: {}): Promise<implicitReturnType>;
    privateGetProfiles (params?: {}): Promise<implicitReturnType>;
    privateGetProfilesId (params?: {}): Promise<implicitReturnType>;
    privateGetReportsReportId (params?: {}): Promise<implicitReturnType>;
    privateGetTransfers (params?: {}): Promise<implicitReturnType>;
    privateGetTransfersTransferId (params?: {}): Promise<implicitReturnType>;
    privateGetUsersSelfExchangeLimits (params?: {}): Promise<implicitReturnType>;
    privateGetUsersSelfHoldBalances (params?: {}): Promise<implicitReturnType>;
    privateGetUsersSelfTrailingVolume (params?: {}): Promise<implicitReturnType>;
    privateGetWithdrawalsFeeEstimate (params?: {}): Promise<implicitReturnType>;
    privateGetConversionsConversionId (params?: {}): Promise<implicitReturnType>;
    privatePostConversions (params?: {}): Promise<implicitReturnType>;
    privatePostDepositsCoinbaseAccount (params?: {}): Promise<implicitReturnType>;
    privatePostDepositsPaymentMethod (params?: {}): Promise<implicitReturnType>;
    privatePostCoinbaseAccountsIdAddresses (params?: {}): Promise<implicitReturnType>;
    privatePostFundingRepay (params?: {}): Promise<implicitReturnType>;
    privatePostOrders (params?: {}): Promise<implicitReturnType>;
    privatePostPositionClose (params?: {}): Promise<implicitReturnType>;
    privatePostProfilesMarginTransfer (params?: {}): Promise<implicitReturnType>;
    privatePostProfilesTransfer (params?: {}): Promise<implicitReturnType>;
    privatePostReports (params?: {}): Promise<implicitReturnType>;
    privatePostWithdrawalsCoinbase (params?: {}): Promise<implicitReturnType>;
    privatePostWithdrawalsCoinbaseAccount (params?: {}): Promise<implicitReturnType>;
    privatePostWithdrawalsCrypto (params?: {}): Promise<implicitReturnType>;
    privatePostWithdrawalsPaymentMethod (params?: {}): Promise<implicitReturnType>;
    privateDeleteOrders (params?: {}): Promise<implicitReturnType>;
    privateDeleteOrdersClientClientOid (params?: {}): Promise<implicitReturnType>;
    privateDeleteOrdersId (params?: {}): Promise<implicitReturnType>;
}
abstract class Exchange extends _Exchange {}

export default Exchange