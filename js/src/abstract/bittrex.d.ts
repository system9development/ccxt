import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
export default class Exchange extends _Exchange {
    publicGetPing(params?: {}): Promise<implicitReturnType>;
    publicGetCurrencies(params?: {}): Promise<implicitReturnType>;
    publicGetCurrenciesSymbol(params?: {}): Promise<implicitReturnType>;
    publicGetMarkets(params?: {}): Promise<implicitReturnType>;
    publicGetMarketsTickers(params?: {}): Promise<implicitReturnType>;
    publicGetMarketsSummaries(params?: {}): Promise<implicitReturnType>;
    publicGetMarketsMarketSymbol(params?: {}): Promise<implicitReturnType>;
    publicGetMarketsMarketSymbolSummary(params?: {}): Promise<implicitReturnType>;
    publicGetMarketsMarketSymbolOrderbook(params?: {}): Promise<implicitReturnType>;
    publicGetMarketsMarketSymbolTrades(params?: {}): Promise<implicitReturnType>;
    publicGetMarketsMarketSymbolTicker(params?: {}): Promise<implicitReturnType>;
    publicGetMarketsMarketSymbolCandlesCandleIntervalRecent(params?: {}): Promise<implicitReturnType>;
    publicGetMarketsMarketSymbolCandlesCandleIntervalHistoricalYearMonthDay(params?: {}): Promise<implicitReturnType>;
    publicGetMarketsMarketSymbolCandlesCandleIntervalHistoricalYearMonth(params?: {}): Promise<implicitReturnType>;
    publicGetMarketsMarketSymbolCandlesCandleIntervalHistoricalYear(params?: {}): Promise<implicitReturnType>;
    privateGetAccount(params?: {}): Promise<implicitReturnType>;
    privateGetAccountFeesFiat(params?: {}): Promise<implicitReturnType>;
    privateGetAccountFeesFiatCurrencySymbol(params?: {}): Promise<implicitReturnType>;
    privateGetAccountFeesTrading(params?: {}): Promise<implicitReturnType>;
    privateGetAccountFeesTradingMarketSymbol(params?: {}): Promise<implicitReturnType>;
    privateGetAccountVolume(params?: {}): Promise<implicitReturnType>;
    privateGetAccountPermissionsMarkets(params?: {}): Promise<implicitReturnType>;
    privateGetAccountPermissionsMarketsMarketSymbol(params?: {}): Promise<implicitReturnType>;
    privateGetAccountPermissionsCurrencies(params?: {}): Promise<implicitReturnType>;
    privateGetAccountPermissionsCurrenciesCurrencySymbol(params?: {}): Promise<implicitReturnType>;
    privateGetAddresses(params?: {}): Promise<implicitReturnType>;
    privateGetAddressesCurrencySymbol(params?: {}): Promise<implicitReturnType>;
    privateGetBalances(params?: {}): Promise<implicitReturnType>;
    privateGetBalancesCurrencySymbol(params?: {}): Promise<implicitReturnType>;
    privateGetDepositsOpen(params?: {}): Promise<implicitReturnType>;
    privateGetDepositsClosed(params?: {}): Promise<implicitReturnType>;
    privateGetDepositsByTxIdTxId(params?: {}): Promise<implicitReturnType>;
    privateGetDepositsDepositId(params?: {}): Promise<implicitReturnType>;
    privateGetExecutions(params?: {}): Promise<implicitReturnType>;
    privateGetExecutionsLastId(params?: {}): Promise<implicitReturnType>;
    privateGetExecutionsExecutionId(params?: {}): Promise<implicitReturnType>;
    privateGetOrdersClosed(params?: {}): Promise<implicitReturnType>;
    privateGetOrdersOpen(params?: {}): Promise<implicitReturnType>;
    privateGetOrdersOrderId(params?: {}): Promise<implicitReturnType>;
    privateGetOrdersOrderIdExecutions(params?: {}): Promise<implicitReturnType>;
    privateGetPing(params?: {}): Promise<implicitReturnType>;
    privateGetSubaccountsSubaccountId(params?: {}): Promise<implicitReturnType>;
    privateGetSubaccounts(params?: {}): Promise<implicitReturnType>;
    privateGetSubaccountsWithdrawalsOpen(params?: {}): Promise<implicitReturnType>;
    privateGetSubaccountsWithdrawalsClosed(params?: {}): Promise<implicitReturnType>;
    privateGetSubaccountsDepositsOpen(params?: {}): Promise<implicitReturnType>;
    privateGetSubaccountsDepositsClosed(params?: {}): Promise<implicitReturnType>;
    privateGetWithdrawalsOpen(params?: {}): Promise<implicitReturnType>;
    privateGetWithdrawalsClosed(params?: {}): Promise<implicitReturnType>;
    privateGetWithdrawalsByTxIdTxId(params?: {}): Promise<implicitReturnType>;
    privateGetWithdrawalsWithdrawalId(params?: {}): Promise<implicitReturnType>;
    privateGetWithdrawalsAllowedAddresses(params?: {}): Promise<implicitReturnType>;
    privateGetConditionalOrdersConditionalOrderId(params?: {}): Promise<implicitReturnType>;
    privateGetConditionalOrdersClosed(params?: {}): Promise<implicitReturnType>;
    privateGetConditionalOrdersOpen(params?: {}): Promise<implicitReturnType>;
    privateGetTransfersSent(params?: {}): Promise<implicitReturnType>;
    privateGetTransfersReceived(params?: {}): Promise<implicitReturnType>;
    privateGetTransfersTransferId(params?: {}): Promise<implicitReturnType>;
    privateGetFundsTransferMethodsFundsTransferMethodId(params?: {}): Promise<implicitReturnType>;
    privatePostAddresses(params?: {}): Promise<implicitReturnType>;
    privatePostOrders(params?: {}): Promise<implicitReturnType>;
    privatePostSubaccounts(params?: {}): Promise<implicitReturnType>;
    privatePostWithdrawals(params?: {}): Promise<implicitReturnType>;
    privatePostConditionalOrders(params?: {}): Promise<implicitReturnType>;
    privatePostTransfers(params?: {}): Promise<implicitReturnType>;
    privatePostBatch(params?: {}): Promise<implicitReturnType>;
    privateDeleteOrdersOpen(params?: {}): Promise<implicitReturnType>;
    privateDeleteOrdersOrderId(params?: {}): Promise<implicitReturnType>;
    privateDeleteWithdrawalsWithdrawalId(params?: {}): Promise<implicitReturnType>;
    privateDeleteConditionalOrdersConditionalOrderId(params?: {}): Promise<implicitReturnType>;
    signalrGetNegotiate(params?: {}): Promise<implicitReturnType>;
    signalrGetStart(params?: {}): Promise<implicitReturnType>;
}
