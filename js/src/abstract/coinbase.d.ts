import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
interface Exchange {
    v2PublicGetCurrencies(params?: {}): Promise<implicitReturnType>;
    v2PublicGetTime(params?: {}): Promise<implicitReturnType>;
    v2PublicGetExchangeRates(params?: {}): Promise<implicitReturnType>;
    v2PublicGetUsersUserId(params?: {}): Promise<implicitReturnType>;
    v2PublicGetPricesSymbolBuy(params?: {}): Promise<implicitReturnType>;
    v2PublicGetPricesSymbolSell(params?: {}): Promise<implicitReturnType>;
    v2PublicGetPricesSymbolSpot(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAccounts(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAccountsAccountId(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAccountsAccountIdAddresses(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAccountsAccountIdAddressesAddressId(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAccountsAccountIdAddressesAddressIdTransactions(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAccountsAccountIdTransactions(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAccountsAccountIdTransactionsTransactionId(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAccountsAccountIdBuys(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAccountsAccountIdBuysBuyId(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAccountsAccountIdSells(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAccountsAccountIdSellsSellId(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAccountsAccountIdDeposits(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAccountsAccountIdDepositsDepositId(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAccountsAccountIdWithdrawals(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAccountsAccountIdWithdrawalsWithdrawalId(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetPaymentMethods(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetPaymentMethodsPaymentMethodId(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetUser(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetUserAuth(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAccounts(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAccountsAccountIdPrimary(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAccountsAccountIdAddresses(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAccountsAccountIdTransactions(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAccountsAccountIdTransactionsTransactionIdComplete(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAccountsAccountIdTransactionsTransactionIdResend(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAccountsAccountIdBuys(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAccountsAccountIdBuysBuyIdCommit(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAccountsAccountIdSells(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAccountsAccountIdSellsSellIdCommit(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAccountsAccountIdDeposits(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAccountsAccountIdDepositsDepositIdCommit(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAccountsAccountIdWithdrawals(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAccountsAccountIdWithdrawalsWithdrawalIdCommit(params?: {}): Promise<implicitReturnType>;
    v2PrivatePutAccountsAccountId(params?: {}): Promise<implicitReturnType>;
    v2PrivatePutUser(params?: {}): Promise<implicitReturnType>;
    v2PrivateDeleteAccountsId(params?: {}): Promise<implicitReturnType>;
    v2PrivateDeleteAccountsAccountIdTransactionsTransactionId(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetBrokerageAccounts(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetBrokerageAccountsAccountUuid(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetBrokerageOrdersHistoricalBatch(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetBrokerageOrdersHistoricalFills(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetBrokerageOrdersHistoricalOrderId(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetBrokerageProducts(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetBrokerageProductsProductId(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetBrokerageProductsProductIdCandles(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetBrokerageProductsProductIdTicker(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetBrokeragePortfolios(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetBrokeragePortfoliosPortfolioUuid(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetBrokerageTransactionSummary(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetBrokerageProductBook(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetBrokerageBestBidAsk(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetBrokerageConvertTradeTradeId(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetBrokerageTime(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetBrokerageCfmBalanceSummary(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetBrokerageCfmPositions(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetBrokerageCfmPositionsProductId(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetBrokerageCfmSweeps(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetBrokerageIntxPortfolioPortfolioUuid(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetBrokerageIntxPositionsPortfolioUuid(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetBrokerageIntxPositionsPortfolioUuidSymbol(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostBrokerageOrders(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostBrokerageOrdersBatchCancel(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostBrokerageOrdersEdit(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostBrokerageOrdersEditPreview(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostBrokeragePortfolios(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostBrokeragePortfoliosMoveFunds(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostBrokerageConvertQuote(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostBrokerageConvertTradeTradeId(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostBrokerageCfmSweepsSchedule(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostBrokerageIntxAllocate(params?: {}): Promise<implicitReturnType>;
    v3PrivatePutBrokeragePortfoliosPortfolioUuid(params?: {}): Promise<implicitReturnType>;
    v3PrivateDeleteBrokeragePortfoliosPortfolioUuid(params?: {}): Promise<implicitReturnType>;
    v3PrivateDeleteBrokerageCfmSweeps(params?: {}): Promise<implicitReturnType>;
}
declare abstract class Exchange extends _Exchange {
}
export default Exchange;
