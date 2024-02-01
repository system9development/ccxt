from ccxt.base.types import Entry


class ImplicitAPI:
    v2_public_get_currencies = v2PublicGetCurrencies = Entry('currencies', ['v2', 'public'], 'GET', {})
    v2_public_get_time = v2PublicGetTime = Entry('time', ['v2', 'public'], 'GET', {})
    v2_public_get_exchange_rates = v2PublicGetExchangeRates = Entry('exchange-rates', ['v2', 'public'], 'GET', {})
    v2_public_get_users_user_id = v2PublicGetUsersUserId = Entry('users/{user_id}', ['v2', 'public'], 'GET', {})
    v2_public_get_prices_symbol_buy = v2PublicGetPricesSymbolBuy = Entry('prices/{symbol}/buy', ['v2', 'public'], 'GET', {})
    v2_public_get_prices_symbol_sell = v2PublicGetPricesSymbolSell = Entry('prices/{symbol}/sell', ['v2', 'public'], 'GET', {})
    v2_public_get_prices_symbol_spot = v2PublicGetPricesSymbolSpot = Entry('prices/{symbol}/spot', ['v2', 'public'], 'GET', {})
    v2_private_get_accounts = v2PrivateGetAccounts = Entry('accounts', ['v2', 'private'], 'GET', {})
    v2_private_get_accounts_account_id = v2PrivateGetAccountsAccountId = Entry('accounts/{account_id}', ['v2', 'private'], 'GET', {})
    v2_private_get_accounts_account_id_addresses = v2PrivateGetAccountsAccountIdAddresses = Entry('accounts/{account_id}/addresses', ['v2', 'private'], 'GET', {})
    v2_private_get_accounts_account_id_addresses_address_id = v2PrivateGetAccountsAccountIdAddressesAddressId = Entry('accounts/{account_id}/addresses/{address_id}', ['v2', 'private'], 'GET', {})
    v2_private_get_accounts_account_id_addresses_address_id_transactions = v2PrivateGetAccountsAccountIdAddressesAddressIdTransactions = Entry('accounts/{account_id}/addresses/{address_id}/transactions', ['v2', 'private'], 'GET', {})
    v2_private_get_accounts_account_id_transactions = v2PrivateGetAccountsAccountIdTransactions = Entry('accounts/{account_id}/transactions', ['v2', 'private'], 'GET', {})
    v2_private_get_accounts_account_id_transactions_transaction_id = v2PrivateGetAccountsAccountIdTransactionsTransactionId = Entry('accounts/{account_id}/transactions/{transaction_id}', ['v2', 'private'], 'GET', {})
    v2_private_get_accounts_account_id_buys = v2PrivateGetAccountsAccountIdBuys = Entry('accounts/{account_id}/buys', ['v2', 'private'], 'GET', {})
    v2_private_get_accounts_account_id_buys_buy_id = v2PrivateGetAccountsAccountIdBuysBuyId = Entry('accounts/{account_id}/buys/{buy_id}', ['v2', 'private'], 'GET', {})
    v2_private_get_accounts_account_id_sells = v2PrivateGetAccountsAccountIdSells = Entry('accounts/{account_id}/sells', ['v2', 'private'], 'GET', {})
    v2_private_get_accounts_account_id_sells_sell_id = v2PrivateGetAccountsAccountIdSellsSellId = Entry('accounts/{account_id}/sells/{sell_id}', ['v2', 'private'], 'GET', {})
    v2_private_get_accounts_account_id_deposits = v2PrivateGetAccountsAccountIdDeposits = Entry('accounts/{account_id}/deposits', ['v2', 'private'], 'GET', {})
    v2_private_get_accounts_account_id_deposits_deposit_id = v2PrivateGetAccountsAccountIdDepositsDepositId = Entry('accounts/{account_id}/deposits/{deposit_id}', ['v2', 'private'], 'GET', {})
    v2_private_get_accounts_account_id_withdrawals = v2PrivateGetAccountsAccountIdWithdrawals = Entry('accounts/{account_id}/withdrawals', ['v2', 'private'], 'GET', {})
    v2_private_get_accounts_account_id_withdrawals_withdrawal_id = v2PrivateGetAccountsAccountIdWithdrawalsWithdrawalId = Entry('accounts/{account_id}/withdrawals/{withdrawal_id}', ['v2', 'private'], 'GET', {})
    v2_private_get_payment_methods = v2PrivateGetPaymentMethods = Entry('payment-methods', ['v2', 'private'], 'GET', {})
    v2_private_get_payment_methods_payment_method_id = v2PrivateGetPaymentMethodsPaymentMethodId = Entry('payment-methods/{payment_method_id}', ['v2', 'private'], 'GET', {})
    v2_private_get_user = v2PrivateGetUser = Entry('user', ['v2', 'private'], 'GET', {})
    v2_private_get_user_auth = v2PrivateGetUserAuth = Entry('user/auth', ['v2', 'private'], 'GET', {})
    v2_private_post_accounts = v2PrivatePostAccounts = Entry('accounts', ['v2', 'private'], 'POST', {})
    v2_private_post_accounts_account_id_primary = v2PrivatePostAccountsAccountIdPrimary = Entry('accounts/{account_id}/primary', ['v2', 'private'], 'POST', {})
    v2_private_post_accounts_account_id_addresses = v2PrivatePostAccountsAccountIdAddresses = Entry('accounts/{account_id}/addresses', ['v2', 'private'], 'POST', {})
    v2_private_post_accounts_account_id_transactions = v2PrivatePostAccountsAccountIdTransactions = Entry('accounts/{account_id}/transactions', ['v2', 'private'], 'POST', {})
    v2_private_post_accounts_account_id_transactions_transaction_id_complete = v2PrivatePostAccountsAccountIdTransactionsTransactionIdComplete = Entry('accounts/{account_id}/transactions/{transaction_id}/complete', ['v2', 'private'], 'POST', {})
    v2_private_post_accounts_account_id_transactions_transaction_id_resend = v2PrivatePostAccountsAccountIdTransactionsTransactionIdResend = Entry('accounts/{account_id}/transactions/{transaction_id}/resend', ['v2', 'private'], 'POST', {})
    v2_private_post_accounts_account_id_buys = v2PrivatePostAccountsAccountIdBuys = Entry('accounts/{account_id}/buys', ['v2', 'private'], 'POST', {})
    v2_private_post_accounts_account_id_buys_buy_id_commit = v2PrivatePostAccountsAccountIdBuysBuyIdCommit = Entry('accounts/{account_id}/buys/{buy_id}/commit', ['v2', 'private'], 'POST', {})
    v2_private_post_accounts_account_id_sells = v2PrivatePostAccountsAccountIdSells = Entry('accounts/{account_id}/sells', ['v2', 'private'], 'POST', {})
    v2_private_post_accounts_account_id_sells_sell_id_commit = v2PrivatePostAccountsAccountIdSellsSellIdCommit = Entry('accounts/{account_id}/sells/{sell_id}/commit', ['v2', 'private'], 'POST', {})
    v2_private_post_accounts_account_id_deposits = v2PrivatePostAccountsAccountIdDeposits = Entry('accounts/{account_id}/deposits', ['v2', 'private'], 'POST', {})
    v2_private_post_accounts_account_id_deposits_deposit_id_commit = v2PrivatePostAccountsAccountIdDepositsDepositIdCommit = Entry('accounts/{account_id}/deposits/{deposit_id}/commit', ['v2', 'private'], 'POST', {})
    v2_private_post_accounts_account_id_withdrawals = v2PrivatePostAccountsAccountIdWithdrawals = Entry('accounts/{account_id}/withdrawals', ['v2', 'private'], 'POST', {})
    v2_private_post_accounts_account_id_withdrawals_withdrawal_id_commit = v2PrivatePostAccountsAccountIdWithdrawalsWithdrawalIdCommit = Entry('accounts/{account_id}/withdrawals/{withdrawal_id}/commit', ['v2', 'private'], 'POST', {})
    v2_private_put_accounts_account_id = v2PrivatePutAccountsAccountId = Entry('accounts/{account_id}', ['v2', 'private'], 'PUT', {})
    v2_private_put_user = v2PrivatePutUser = Entry('user', ['v2', 'private'], 'PUT', {})
    v2_private_delete_accounts_id = v2PrivateDeleteAccountsId = Entry('accounts/{id}', ['v2', 'private'], 'DELETE', {})
    v2_private_delete_accounts_account_id_transactions_transaction_id = v2PrivateDeleteAccountsAccountIdTransactionsTransactionId = Entry('accounts/{account_id}/transactions/{transaction_id}', ['v2', 'private'], 'DELETE', {})
    v3_private_get_brokerage_accounts = v3PrivateGetBrokerageAccounts = Entry('brokerage/accounts', ['v3', 'private'], 'GET', {})
    v3_private_get_brokerage_accounts_account_uuid = v3PrivateGetBrokerageAccountsAccountUuid = Entry('brokerage/accounts/{account_uuid}', ['v3', 'private'], 'GET', {})
    v3_private_get_brokerage_orders_historical_batch = v3PrivateGetBrokerageOrdersHistoricalBatch = Entry('brokerage/orders/historical/batch', ['v3', 'private'], 'GET', {})
    v3_private_get_brokerage_orders_historical_fills = v3PrivateGetBrokerageOrdersHistoricalFills = Entry('brokerage/orders/historical/fills', ['v3', 'private'], 'GET', {})
    v3_private_get_brokerage_orders_historical_order_id = v3PrivateGetBrokerageOrdersHistoricalOrderId = Entry('brokerage/orders/historical/{order_id}', ['v3', 'private'], 'GET', {})
    v3_private_get_brokerage_products = v3PrivateGetBrokerageProducts = Entry('brokerage/products', ['v3', 'private'], 'GET', {})
    v3_private_get_brokerage_products_product_id = v3PrivateGetBrokerageProductsProductId = Entry('brokerage/products/{product_id}', ['v3', 'private'], 'GET', {})
    v3_private_get_brokerage_products_product_id_candles = v3PrivateGetBrokerageProductsProductIdCandles = Entry('brokerage/products/{product_id}/candles', ['v3', 'private'], 'GET', {})
    v3_private_get_brokerage_products_product_id_ticker = v3PrivateGetBrokerageProductsProductIdTicker = Entry('brokerage/products/{product_id}/ticker', ['v3', 'private'], 'GET', {})
    v3_private_get_brokerage_portfolios = v3PrivateGetBrokeragePortfolios = Entry('brokerage/portfolios', ['v3', 'private'], 'GET', {})
    v3_private_get_brokerage_portfolios_portfolio_uuid = v3PrivateGetBrokeragePortfoliosPortfolioUuid = Entry('brokerage/portfolios/{portfolio_uuid}', ['v3', 'private'], 'GET', {})
    v3_private_get_brokerage_transaction_summary = v3PrivateGetBrokerageTransactionSummary = Entry('brokerage/transaction_summary', ['v3', 'private'], 'GET', {})
    v3_private_get_brokerage_product_book = v3PrivateGetBrokerageProductBook = Entry('brokerage/product_book', ['v3', 'private'], 'GET', {})
    v3_private_get_brokerage_best_bid_ask = v3PrivateGetBrokerageBestBidAsk = Entry('brokerage/best_bid_ask', ['v3', 'private'], 'GET', {})
    v3_private_get_brokerage_convert_trade_trade_id = v3PrivateGetBrokerageConvertTradeTradeId = Entry('brokerage/convert/trade/{trade_id}', ['v3', 'private'], 'GET', {})
    v3_private_get_brokerage_time = v3PrivateGetBrokerageTime = Entry('brokerage/time', ['v3', 'private'], 'GET', {})
    v3_private_get_brokerage_cfm_balance_summary = v3PrivateGetBrokerageCfmBalanceSummary = Entry('brokerage/cfm/balance_summary', ['v3', 'private'], 'GET', {})
    v3_private_get_brokerage_cfm_positions = v3PrivateGetBrokerageCfmPositions = Entry('brokerage/cfm/positions', ['v3', 'private'], 'GET', {})
    v3_private_get_brokerage_cfm_positions_product_id = v3PrivateGetBrokerageCfmPositionsProductId = Entry('brokerage/cfm/positions/{product_id}', ['v3', 'private'], 'GET', {})
    v3_private_get_brokerage_cfm_sweeps = v3PrivateGetBrokerageCfmSweeps = Entry('brokerage/cfm/sweeps', ['v3', 'private'], 'GET', {})
    v3_private_get_brokerage_intx_portfolio_portfolio_uuid = v3PrivateGetBrokerageIntxPortfolioPortfolioUuid = Entry('brokerage/intx/portfolio/{portfolio_uuid}', ['v3', 'private'], 'GET', {})
    v3_private_get_brokerage_intx_positions_portfolio_uuid = v3PrivateGetBrokerageIntxPositionsPortfolioUuid = Entry('brokerage/intx/positions/{portfolio_uuid}', ['v3', 'private'], 'GET', {})
    v3_private_get_brokerage_intx_positions_portfolio_uuid_symbol = v3PrivateGetBrokerageIntxPositionsPortfolioUuidSymbol = Entry('brokerage/intx/positions/{portfolio_uuid}/{symbol}', ['v3', 'private'], 'GET', {})
    v3_private_post_brokerage_orders = v3PrivatePostBrokerageOrders = Entry('brokerage/orders', ['v3', 'private'], 'POST', {})
    v3_private_post_brokerage_orders_batch_cancel = v3PrivatePostBrokerageOrdersBatchCancel = Entry('brokerage/orders/batch_cancel', ['v3', 'private'], 'POST', {})
    v3_private_post_brokerage_orders_edit = v3PrivatePostBrokerageOrdersEdit = Entry('brokerage/orders/edit', ['v3', 'private'], 'POST', {})
    v3_private_post_brokerage_orders_edit_preview = v3PrivatePostBrokerageOrdersEditPreview = Entry('brokerage/orders/edit_preview', ['v3', 'private'], 'POST', {})
    v3_private_post_brokerage_portfolios = v3PrivatePostBrokeragePortfolios = Entry('brokerage/portfolios', ['v3', 'private'], 'POST', {})
    v3_private_post_brokerage_portfolios_move_funds = v3PrivatePostBrokeragePortfoliosMoveFunds = Entry('brokerage/portfolios/move_funds', ['v3', 'private'], 'POST', {})
    v3_private_post_brokerage_convert_quote = v3PrivatePostBrokerageConvertQuote = Entry('brokerage/convert/quote', ['v3', 'private'], 'POST', {})
    v3_private_post_brokerage_convert_trade_trade_id = v3PrivatePostBrokerageConvertTradeTradeId = Entry('brokerage/convert/trade/{trade_id}', ['v3', 'private'], 'POST', {})
    v3_private_post_brokerage_cfm_sweeps_schedule = v3PrivatePostBrokerageCfmSweepsSchedule = Entry('brokerage/cfm/sweeps/schedule', ['v3', 'private'], 'POST', {})
    v3_private_post_brokerage_intx_allocate = v3PrivatePostBrokerageIntxAllocate = Entry('brokerage/intx/allocate', ['v3', 'private'], 'POST', {})
    v3_private_put_brokerage_portfolios_portfolio_uuid = v3PrivatePutBrokeragePortfoliosPortfolioUuid = Entry('brokerage/portfolios/{portfolio_uuid}', ['v3', 'private'], 'PUT', {})
    v3_private_delete_brokerage_portfolios_portfolio_uuid = v3PrivateDeleteBrokeragePortfoliosPortfolioUuid = Entry('brokerage/portfolios/{portfolio_uuid}', ['v3', 'private'], 'DELETE', {})
    v3_private_delete_brokerage_cfm_sweeps = v3PrivateDeleteBrokerageCfmSweeps = Entry('brokerage/cfm/sweeps', ['v3', 'private'], 'DELETE', {})
