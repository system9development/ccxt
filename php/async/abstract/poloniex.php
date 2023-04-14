<?php

namespace ccxt\async\abstract;

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code


abstract class poloniex extends \ccxt\async\Exchange {
    public function public_get_markets($params = array()) {
        return $this->request('markets', 'public', 'GET', $params);
    }
    public function public_get_markets_symbol($params = array()) {
        return $this->request('markets/{symbol}', 'public', 'GET', $params);
    }
    public function public_get_currencies($params = array()) {
        return $this->request('currencies', 'public', 'GET', $params);
    }
    public function public_get_currencies_currency($params = array()) {
        return $this->request('currencies/{currency}', 'public', 'GET', $params);
    }
    public function public_get_timestamp($params = array()) {
        return $this->request('timestamp', 'public', 'GET', $params);
    }
    public function public_get_markets_price($params = array()) {
        return $this->request('markets/price', 'public', 'GET', $params);
    }
    public function public_get_markets_symbol_price($params = array()) {
        return $this->request('markets/{symbol}/price', 'public', 'GET', $params);
    }
    public function public_get_markets_symbol_orderbook($params = array()) {
        return $this->request('markets/{symbol}/orderBook', 'public', 'GET', $params);
    }
    public function public_get_markets_symbol_candles($params = array()) {
        return $this->request('markets/{symbol}/candles', 'public', 'GET', $params);
    }
    public function public_get_markets_symbol_trades($params = array()) {
        return $this->request('markets/{symbol}/trades', 'public', 'GET', $params);
    }
    public function public_get_markets_ticker24h($params = array()) {
        return $this->request('markets/ticker24h', 'public', 'GET', $params);
    }
    public function public_get_markets_symbol_ticker24h($params = array()) {
        return $this->request('markets/{symbol}/ticker24h', 'public', 'GET', $params);
    }
    public function private_get_accounts($params = array()) {
        return $this->request('accounts', 'private', 'GET', $params);
    }
    public function private_get_accounts_activity($params = array()) {
        return $this->request('accounts/activity', 'private', 'GET', $params);
    }
    public function private_get_accounts_balances($params = array()) {
        return $this->request('accounts/balances', 'private', 'GET', $params);
    }
    public function private_get_accounts_id_balances($params = array()) {
        return $this->request('accounts/{id}/balances', 'private', 'GET', $params);
    }
    public function private_get_accounts_transfer($params = array()) {
        return $this->request('accounts/transfer', 'private', 'GET', $params);
    }
    public function private_get_accounts_transfer_id($params = array()) {
        return $this->request('accounts/transfer/{id}', 'private', 'GET', $params);
    }
    public function private_get_subaccounts($params = array()) {
        return $this->request('subaccounts', 'private', 'GET', $params);
    }
    public function private_get_subaccounts_balances($params = array()) {
        return $this->request('subaccounts/balances', 'private', 'GET', $params);
    }
    public function private_get_subaccounts_id_balances($params = array()) {
        return $this->request('subaccounts/{id}/balances', 'private', 'GET', $params);
    }
    public function private_get_subaccounts_transfer($params = array()) {
        return $this->request('subaccounts/transfer', 'private', 'GET', $params);
    }
    public function private_get_subaccounts_transfer_id($params = array()) {
        return $this->request('subaccounts/transfer/{id}', 'private', 'GET', $params);
    }
    public function private_get_feeinfo($params = array()) {
        return $this->request('feeinfo', 'private', 'GET', $params);
    }
    public function private_get_wallets_addresses($params = array()) {
        return $this->request('wallets/addresses', 'private', 'GET', $params);
    }
    public function private_get_wallets_activity($params = array()) {
        return $this->request('wallets/activity', 'private', 'GET', $params);
    }
    public function private_get_wallets_addresses_currency($params = array()) {
        return $this->request('wallets/addresses/{currency}', 'private', 'GET', $params);
    }
    public function private_get_orders($params = array()) {
        return $this->request('orders', 'private', 'GET', $params);
    }
    public function private_get_orders_id($params = array()) {
        return $this->request('orders/{id}', 'private', 'GET', $params);
    }
    public function private_get_orders_history($params = array()) {
        return $this->request('orders/history', 'private', 'GET', $params);
    }
    public function private_get_orders_killswitchstatus($params = array()) {
        return $this->request('orders/killSwitchStatus', 'private', 'GET', $params);
    }
    public function private_get_smartorders($params = array()) {
        return $this->request('smartorders', 'private', 'GET', $params);
    }
    public function private_get_smartorders_id($params = array()) {
        return $this->request('smartorders/{id}', 'private', 'GET', $params);
    }
    public function private_get_smartorders_history($params = array()) {
        return $this->request('smartorders/history', 'private', 'GET', $params);
    }
    public function private_get_trades($params = array()) {
        return $this->request('trades', 'private', 'GET', $params);
    }
    public function private_get_orders_id_trades($params = array()) {
        return $this->request('orders/{id}/trades', 'private', 'GET', $params);
    }
    public function private_post_accounts_transfer($params = array()) {
        return $this->request('accounts/transfer', 'private', 'POST', $params);
    }
    public function private_post_subaccounts_transfer($params = array()) {
        return $this->request('subaccounts/transfer', 'private', 'POST', $params);
    }
    public function private_post_wallets_address($params = array()) {
        return $this->request('wallets/address', 'private', 'POST', $params);
    }
    public function private_post_wallets_withdraw($params = array()) {
        return $this->request('wallets/withdraw', 'private', 'POST', $params);
    }
    public function private_post_orders($params = array()) {
        return $this->request('orders', 'private', 'POST', $params);
    }
    public function private_post_orders_killswitch($params = array()) {
        return $this->request('orders/killSwitch', 'private', 'POST', $params);
    }
    public function private_post_orders_batch($params = array()) {
        return $this->request('orders/batch', 'private', 'POST', $params);
    }
    public function private_post_smartorders($params = array()) {
        return $this->request('smartorders', 'private', 'POST', $params);
    }
    public function private_delete_orders_id($params = array()) {
        return $this->request('orders/{id}', 'private', 'DELETE', $params);
    }
    public function private_delete_orders_cancelbyids($params = array()) {
        return $this->request('orders/cancelByIds', 'private', 'DELETE', $params);
    }
    public function private_delete_orders($params = array()) {
        return $this->request('orders', 'private', 'DELETE', $params);
    }
    public function private_delete_smartorders_id($params = array()) {
        return $this->request('smartorders/{id}', 'private', 'DELETE', $params);
    }
    public function private_delete_smartorders_cancelbyids($params = array()) {
        return $this->request('smartorders/cancelByIds', 'private', 'DELETE', $params);
    }
    public function private_delete_smartorders($params = array()) {
        return $this->request('smartorders', 'private', 'DELETE', $params);
    }
    public function private_put_orders_id($params = array()) {
        return $this->request('orders/{id}', 'private', 'PUT', $params);
    }
    public function private_put_smartorders_id($params = array()) {
        return $this->request('smartorders/{id}', 'private', 'PUT', $params);
    }
    public function publicGetMarkets($params = array()) {
        return $this->request('markets', 'public', 'GET', $params);
    }
    public function publicGetMarketsSymbol($params = array()) {
        return $this->request('markets/{symbol}', 'public', 'GET', $params);
    }
    public function publicGetCurrencies($params = array()) {
        return $this->request('currencies', 'public', 'GET', $params);
    }
    public function publicGetCurrenciesCurrency($params = array()) {
        return $this->request('currencies/{currency}', 'public', 'GET', $params);
    }
    public function publicGetTimestamp($params = array()) {
        return $this->request('timestamp', 'public', 'GET', $params);
    }
    public function publicGetMarketsPrice($params = array()) {
        return $this->request('markets/price', 'public', 'GET', $params);
    }
    public function publicGetMarketsSymbolPrice($params = array()) {
        return $this->request('markets/{symbol}/price', 'public', 'GET', $params);
    }
    public function publicGetMarketsSymbolOrderBook($params = array()) {
        return $this->request('markets/{symbol}/orderBook', 'public', 'GET', $params);
    }
    public function publicGetMarketsSymbolCandles($params = array()) {
        return $this->request('markets/{symbol}/candles', 'public', 'GET', $params);
    }
    public function publicGetMarketsSymbolTrades($params = array()) {
        return $this->request('markets/{symbol}/trades', 'public', 'GET', $params);
    }
    public function publicGetMarketsTicker24h($params = array()) {
        return $this->request('markets/ticker24h', 'public', 'GET', $params);
    }
    public function publicGetMarketsSymbolTicker24h($params = array()) {
        return $this->request('markets/{symbol}/ticker24h', 'public', 'GET', $params);
    }
    public function privateGetAccounts($params = array()) {
        return $this->request('accounts', 'private', 'GET', $params);
    }
    public function privateGetAccountsActivity($params = array()) {
        return $this->request('accounts/activity', 'private', 'GET', $params);
    }
    public function privateGetAccountsBalances($params = array()) {
        return $this->request('accounts/balances', 'private', 'GET', $params);
    }
    public function privateGetAccountsIdBalances($params = array()) {
        return $this->request('accounts/{id}/balances', 'private', 'GET', $params);
    }
    public function privateGetAccountsTransfer($params = array()) {
        return $this->request('accounts/transfer', 'private', 'GET', $params);
    }
    public function privateGetAccountsTransferId($params = array()) {
        return $this->request('accounts/transfer/{id}', 'private', 'GET', $params);
    }
    public function privateGetSubaccounts($params = array()) {
        return $this->request('subaccounts', 'private', 'GET', $params);
    }
    public function privateGetSubaccountsBalances($params = array()) {
        return $this->request('subaccounts/balances', 'private', 'GET', $params);
    }
    public function privateGetSubaccountsIdBalances($params = array()) {
        return $this->request('subaccounts/{id}/balances', 'private', 'GET', $params);
    }
    public function privateGetSubaccountsTransfer($params = array()) {
        return $this->request('subaccounts/transfer', 'private', 'GET', $params);
    }
    public function privateGetSubaccountsTransferId($params = array()) {
        return $this->request('subaccounts/transfer/{id}', 'private', 'GET', $params);
    }
    public function privateGetFeeinfo($params = array()) {
        return $this->request('feeinfo', 'private', 'GET', $params);
    }
    public function privateGetWalletsAddresses($params = array()) {
        return $this->request('wallets/addresses', 'private', 'GET', $params);
    }
    public function privateGetWalletsActivity($params = array()) {
        return $this->request('wallets/activity', 'private', 'GET', $params);
    }
    public function privateGetWalletsAddressesCurrency($params = array()) {
        return $this->request('wallets/addresses/{currency}', 'private', 'GET', $params);
    }
    public function privateGetOrders($params = array()) {
        return $this->request('orders', 'private', 'GET', $params);
    }
    public function privateGetOrdersId($params = array()) {
        return $this->request('orders/{id}', 'private', 'GET', $params);
    }
    public function privateGetOrdersHistory($params = array()) {
        return $this->request('orders/history', 'private', 'GET', $params);
    }
    public function privateGetOrdersKillSwitchStatus($params = array()) {
        return $this->request('orders/killSwitchStatus', 'private', 'GET', $params);
    }
    public function privateGetSmartorders($params = array()) {
        return $this->request('smartorders', 'private', 'GET', $params);
    }
    public function privateGetSmartordersId($params = array()) {
        return $this->request('smartorders/{id}', 'private', 'GET', $params);
    }
    public function privateGetSmartordersHistory($params = array()) {
        return $this->request('smartorders/history', 'private', 'GET', $params);
    }
    public function privateGetTrades($params = array()) {
        return $this->request('trades', 'private', 'GET', $params);
    }
    public function privateGetOrdersIdTrades($params = array()) {
        return $this->request('orders/{id}/trades', 'private', 'GET', $params);
    }
    public function privatePostAccountsTransfer($params = array()) {
        return $this->request('accounts/transfer', 'private', 'POST', $params);
    }
    public function privatePostSubaccountsTransfer($params = array()) {
        return $this->request('subaccounts/transfer', 'private', 'POST', $params);
    }
    public function privatePostWalletsAddress($params = array()) {
        return $this->request('wallets/address', 'private', 'POST', $params);
    }
    public function privatePostWalletsWithdraw($params = array()) {
        return $this->request('wallets/withdraw', 'private', 'POST', $params);
    }
    public function privatePostOrders($params = array()) {
        return $this->request('orders', 'private', 'POST', $params);
    }
    public function privatePostOrdersKillSwitch($params = array()) {
        return $this->request('orders/killSwitch', 'private', 'POST', $params);
    }
    public function privatePostOrdersBatch($params = array()) {
        return $this->request('orders/batch', 'private', 'POST', $params);
    }
    public function privatePostSmartorders($params = array()) {
        return $this->request('smartorders', 'private', 'POST', $params);
    }
    public function privateDeleteOrdersId($params = array()) {
        return $this->request('orders/{id}', 'private', 'DELETE', $params);
    }
    public function privateDeleteOrdersCancelByIds($params = array()) {
        return $this->request('orders/cancelByIds', 'private', 'DELETE', $params);
    }
    public function privateDeleteOrders($params = array()) {
        return $this->request('orders', 'private', 'DELETE', $params);
    }
    public function privateDeleteSmartordersId($params = array()) {
        return $this->request('smartorders/{id}', 'private', 'DELETE', $params);
    }
    public function privateDeleteSmartordersCancelByIds($params = array()) {
        return $this->request('smartorders/cancelByIds', 'private', 'DELETE', $params);
    }
    public function privateDeleteSmartorders($params = array()) {
        return $this->request('smartorders', 'private', 'DELETE', $params);
    }
    public function privatePutOrdersId($params = array()) {
        return $this->request('orders/{id}', 'private', 'PUT', $params);
    }
    public function privatePutSmartordersId($params = array()) {
        return $this->request('smartorders/{id}', 'private', 'PUT', $params);
    }
}