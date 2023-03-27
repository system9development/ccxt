'use strict';

var Exchange$1 = require('../base/Exchange.js');

// -------------------------------------------------------------------------------
class Exchange extends Exchange$1["default"] {
    v2PublicGetCurrencies(params) { return this['v2PublicGetCurrencies'](params); }
    v2PublicGetTime(params) { return this['v2PublicGetTime'](params); }
    v2PublicGetExchangeRates(params) { return this['v2PublicGetExchangeRates'](params); }
    v2PublicGetUsersUserId(params) { return this['v2PublicGetUsersUserId'](params); }
    v2PublicGetPricesSymbolBuy(params) { return this['v2PublicGetPricesSymbolBuy'](params); }
    v2PublicGetPricesSymbolSell(params) { return this['v2PublicGetPricesSymbolSell'](params); }
    v2PublicGetPricesSymbolSpot(params) { return this['v2PublicGetPricesSymbolSpot'](params); }
    v2PrivateGetAccounts(params) { return this['v2PrivateGetAccounts'](params); }
    v2PrivateGetAccountsAccountId(params) { return this['v2PrivateGetAccountsAccountId'](params); }
    v2PrivateGetAccountsAccountIdAddresses(params) { return this['v2PrivateGetAccountsAccountIdAddresses'](params); }
    v2PrivateGetAccountsAccountIdAddressesAddressId(params) { return this['v2PrivateGetAccountsAccountIdAddressesAddressId'](params); }
    v2PrivateGetAccountsAccountIdAddressesAddressIdTransactions(params) { return this['v2PrivateGetAccountsAccountIdAddressesAddressIdTransactions'](params); }
    v2PrivateGetAccountsAccountIdTransactions(params) { return this['v2PrivateGetAccountsAccountIdTransactions'](params); }
    v2PrivateGetAccountsAccountIdTransactionsTransactionId(params) { return this['v2PrivateGetAccountsAccountIdTransactionsTransactionId'](params); }
    v2PrivateGetAccountsAccountIdBuys(params) { return this['v2PrivateGetAccountsAccountIdBuys'](params); }
    v2PrivateGetAccountsAccountIdBuysBuyId(params) { return this['v2PrivateGetAccountsAccountIdBuysBuyId'](params); }
    v2PrivateGetAccountsAccountIdSells(params) { return this['v2PrivateGetAccountsAccountIdSells'](params); }
    v2PrivateGetAccountsAccountIdSellsSellId(params) { return this['v2PrivateGetAccountsAccountIdSellsSellId'](params); }
    v2PrivateGetAccountsAccountIdDeposits(params) { return this['v2PrivateGetAccountsAccountIdDeposits'](params); }
    v2PrivateGetAccountsAccountIdDepositsDepositId(params) { return this['v2PrivateGetAccountsAccountIdDepositsDepositId'](params); }
    v2PrivateGetAccountsAccountIdWithdrawals(params) { return this['v2PrivateGetAccountsAccountIdWithdrawals'](params); }
    v2PrivateGetAccountsAccountIdWithdrawalsWithdrawalId(params) { return this['v2PrivateGetAccountsAccountIdWithdrawalsWithdrawalId'](params); }
    v2PrivateGetPaymentMethods(params) { return this['v2PrivateGetPaymentMethods'](params); }
    v2PrivateGetPaymentMethodsPaymentMethodId(params) { return this['v2PrivateGetPaymentMethodsPaymentMethodId'](params); }
    v2PrivateGetUser(params) { return this['v2PrivateGetUser'](params); }
    v2PrivateGetUserAuth(params) { return this['v2PrivateGetUserAuth'](params); }
    v2PrivatePostAccounts(params) { return this['v2PrivatePostAccounts'](params); }
    v2PrivatePostAccountsAccountIdPrimary(params) { return this['v2PrivatePostAccountsAccountIdPrimary'](params); }
    v2PrivatePostAccountsAccountIdAddresses(params) { return this['v2PrivatePostAccountsAccountIdAddresses'](params); }
    v2PrivatePostAccountsAccountIdTransactions(params) { return this['v2PrivatePostAccountsAccountIdTransactions'](params); }
    v2PrivatePostAccountsAccountIdTransactionsTransactionIdComplete(params) { return this['v2PrivatePostAccountsAccountIdTransactionsTransactionIdComplete'](params); }
    v2PrivatePostAccountsAccountIdTransactionsTransactionIdResend(params) { return this['v2PrivatePostAccountsAccountIdTransactionsTransactionIdResend'](params); }
    v2PrivatePostAccountsAccountIdBuys(params) { return this['v2PrivatePostAccountsAccountIdBuys'](params); }
    v2PrivatePostAccountsAccountIdBuysBuyIdCommit(params) { return this['v2PrivatePostAccountsAccountIdBuysBuyIdCommit'](params); }
    v2PrivatePostAccountsAccountIdSells(params) { return this['v2PrivatePostAccountsAccountIdSells'](params); }
    v2PrivatePostAccountsAccountIdSellsSellIdCommit(params) { return this['v2PrivatePostAccountsAccountIdSellsSellIdCommit'](params); }
    v2PrivatePostAccountsAccountIdDeposits(params) { return this['v2PrivatePostAccountsAccountIdDeposits'](params); }
    v2PrivatePostAccountsAccountIdDepositsDepositIdCommit(params) { return this['v2PrivatePostAccountsAccountIdDepositsDepositIdCommit'](params); }
    v2PrivatePostAccountsAccountIdWithdrawals(params) { return this['v2PrivatePostAccountsAccountIdWithdrawals'](params); }
    v2PrivatePostAccountsAccountIdWithdrawalsWithdrawalIdCommit(params) { return this['v2PrivatePostAccountsAccountIdWithdrawalsWithdrawalIdCommit'](params); }
    v2PrivatePutAccountsAccountId(params) { return this['v2PrivatePutAccountsAccountId'](params); }
    v2PrivatePutUser(params) { return this['v2PrivatePutUser'](params); }
    v2PrivateDeleteAccountsId(params) { return this['v2PrivateDeleteAccountsId'](params); }
    v2PrivateDeleteAccountsAccountIdTransactionsTransactionId(params) { return this['v2PrivateDeleteAccountsAccountIdTransactionsTransactionId'](params); }
    v3PrivateGetBrokerageAccounts(params) { return this['v3PrivateGetBrokerageAccounts'](params); }
    v3PrivateGetBrokerageAccountsAccountUuid(params) { return this['v3PrivateGetBrokerageAccountsAccountUuid'](params); }
    v3PrivateGetBrokerageOrdersHistoricalBatch(params) { return this['v3PrivateGetBrokerageOrdersHistoricalBatch'](params); }
    v3PrivateGetBrokerageOrdersHistoricalFills(params) { return this['v3PrivateGetBrokerageOrdersHistoricalFills'](params); }
    v3PrivateGetBrokerageOrdersHistoricalOrderId(params) { return this['v3PrivateGetBrokerageOrdersHistoricalOrderId'](params); }
    v3PrivateGetBrokerageProducts(params) { return this['v3PrivateGetBrokerageProducts'](params); }
    v3PrivateGetBrokerageProductsProductId(params) { return this['v3PrivateGetBrokerageProductsProductId'](params); }
    v3PrivateGetBrokerageProductsProductIdCandles(params) { return this['v3PrivateGetBrokerageProductsProductIdCandles'](params); }
    v3PrivateGetBrokerageProductsProductIdTicker(params) { return this['v3PrivateGetBrokerageProductsProductIdTicker'](params); }
    v3PrivateGetBrokerageTransactionSummary(params) { return this['v3PrivateGetBrokerageTransactionSummary'](params); }
    v3PrivatePostBrokerageOrders(params) { return this['v3PrivatePostBrokerageOrders'](params); }
    v3PrivatePostBrokerageOrdersBatchCancel(params) { return this['v3PrivatePostBrokerageOrdersBatchCancel'](params); }
}

module.exports = Exchange;
