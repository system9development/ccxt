<?php

namespace ccxt\abstract;

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code


abstract class bitbay extends \ccxt\zonda {
    public function public_get_id_all($params = array()) {
        return $this->request('{id}/all', 'public', 'GET', $params);
    }
    public function public_get_id_market($params = array()) {
        return $this->request('{id}/market', 'public', 'GET', $params);
    }
    public function public_get_id_orderbook($params = array()) {
        return $this->request('{id}/orderbook', 'public', 'GET', $params);
    }
    public function public_get_id_ticker($params = array()) {
        return $this->request('{id}/ticker', 'public', 'GET', $params);
    }
    public function public_get_id_trades($params = array()) {
        return $this->request('{id}/trades', 'public', 'GET', $params);
    }
    public function private_post_info($params = array()) {
        return $this->request('info', 'private', 'POST', $params);
    }
    public function private_post_trade($params = array()) {
        return $this->request('trade', 'private', 'POST', $params);
    }
    public function private_post_cancel($params = array()) {
        return $this->request('cancel', 'private', 'POST', $params);
    }
    public function private_post_orderbook($params = array()) {
        return $this->request('orderbook', 'private', 'POST', $params);
    }
    public function private_post_orders($params = array()) {
        return $this->request('orders', 'private', 'POST', $params);
    }
    public function private_post_transfer($params = array()) {
        return $this->request('transfer', 'private', 'POST', $params);
    }
    public function private_post_withdraw($params = array()) {
        return $this->request('withdraw', 'private', 'POST', $params);
    }
    public function private_post_history($params = array()) {
        return $this->request('history', 'private', 'POST', $params);
    }
    public function private_post_transactions($params = array()) {
        return $this->request('transactions', 'private', 'POST', $params);
    }
    public function v1_01public_get_trading_ticker($params = array()) {
        return $this->request('trading/ticker', 'v1_01Public', 'GET', $params);
    }
    public function v1_01public_get_trading_ticker_symbol($params = array()) {
        return $this->request('trading/ticker/{symbol}', 'v1_01Public', 'GET', $params);
    }
    public function v1_01public_get_trading_stats($params = array()) {
        return $this->request('trading/stats', 'v1_01Public', 'GET', $params);
    }
    public function v1_01public_get_trading_stats_symbol($params = array()) {
        return $this->request('trading/stats/{symbol}', 'v1_01Public', 'GET', $params);
    }
    public function v1_01public_get_trading_orderbook_symbol($params = array()) {
        return $this->request('trading/orderbook/{symbol}', 'v1_01Public', 'GET', $params);
    }
    public function v1_01public_get_trading_transactions_symbol($params = array()) {
        return $this->request('trading/transactions/{symbol}', 'v1_01Public', 'GET', $params);
    }
    public function v1_01public_get_trading_candle_history_symbol_resolution($params = array()) {
        return $this->request('trading/candle/history/{symbol}/{resolution}', 'v1_01Public', 'GET', $params);
    }
    public function v1_01private_get_api_payments_deposits_crypto_addresses($params = array()) {
        return $this->request('api_payments/deposits/crypto/addresses', 'v1_01Private', 'GET', $params);
    }
    public function v1_01private_get_payments_withdrawal_detailid($params = array()) {
        return $this->request('payments/withdrawal/{detailId}', 'v1_01Private', 'GET', $params);
    }
    public function v1_01private_get_payments_deposit_detailid($params = array()) {
        return $this->request('payments/deposit/{detailId}', 'v1_01Private', 'GET', $params);
    }
    public function v1_01private_get_trading_offer($params = array()) {
        return $this->request('trading/offer', 'v1_01Private', 'GET', $params);
    }
    public function v1_01private_get_trading_stop_offer($params = array()) {
        return $this->request('trading/stop/offer', 'v1_01Private', 'GET', $params);
    }
    public function v1_01private_get_trading_config_symbol($params = array()) {
        return $this->request('trading/config/{symbol}', 'v1_01Private', 'GET', $params);
    }
    public function v1_01private_get_trading_history_transactions($params = array()) {
        return $this->request('trading/history/transactions', 'v1_01Private', 'GET', $params);
    }
    public function v1_01private_get_balances_bitbay_history($params = array()) {
        return $this->request('balances/BITBAY/history', 'v1_01Private', 'GET', $params);
    }
    public function v1_01private_get_balances_bitbay_balance($params = array()) {
        return $this->request('balances/BITBAY/balance', 'v1_01Private', 'GET', $params);
    }
    public function v1_01private_get_fiat_cantor_rate_baseid_quoteid($params = array()) {
        return $this->request('fiat_cantor/rate/{baseId}/{quoteId}', 'v1_01Private', 'GET', $params);
    }
    public function v1_01private_get_fiat_cantor_history($params = array()) {
        return $this->request('fiat_cantor/history', 'v1_01Private', 'GET', $params);
    }
    public function v1_01private_post_trading_offer_symbol($params = array()) {
        return $this->request('trading/offer/{symbol}', 'v1_01Private', 'POST', $params);
    }
    public function v1_01private_post_trading_stop_offer_symbol($params = array()) {
        return $this->request('trading/stop/offer/{symbol}', 'v1_01Private', 'POST', $params);
    }
    public function v1_01private_post_trading_config_symbol($params = array()) {
        return $this->request('trading/config/{symbol}', 'v1_01Private', 'POST', $params);
    }
    public function v1_01private_post_balances_bitbay_balance($params = array()) {
        return $this->request('balances/BITBAY/balance', 'v1_01Private', 'POST', $params);
    }
    public function v1_01private_post_balances_bitbay_balance_transfer_source_destination($params = array()) {
        return $this->request('balances/BITBAY/balance/transfer/{source}/{destination}', 'v1_01Private', 'POST', $params);
    }
    public function v1_01private_post_fiat_cantor_exchange($params = array()) {
        return $this->request('fiat_cantor/exchange', 'v1_01Private', 'POST', $params);
    }
    public function v1_01private_delete_trading_offer_symbol_id_side_price($params = array()) {
        return $this->request('trading/offer/{symbol}/{id}/{side}/{price}', 'v1_01Private', 'DELETE', $params);
    }
    public function v1_01private_delete_trading_stop_offer_symbol_id_side_price($params = array()) {
        return $this->request('trading/stop/offer/{symbol}/{id}/{side}/{price}', 'v1_01Private', 'DELETE', $params);
    }
    public function v1_01private_put_balances_bitbay_balance_id($params = array()) {
        return $this->request('balances/BITBAY/balance/{id}', 'v1_01Private', 'PUT', $params);
    }
    public function publicGetIdAll($params = array()) {
        return $this->request('{id}/all', 'public', 'GET', $params);
    }
    public function publicGetIdMarket($params = array()) {
        return $this->request('{id}/market', 'public', 'GET', $params);
    }
    public function publicGetIdOrderbook($params = array()) {
        return $this->request('{id}/orderbook', 'public', 'GET', $params);
    }
    public function publicGetIdTicker($params = array()) {
        return $this->request('{id}/ticker', 'public', 'GET', $params);
    }
    public function publicGetIdTrades($params = array()) {
        return $this->request('{id}/trades', 'public', 'GET', $params);
    }
    public function privatePostInfo($params = array()) {
        return $this->request('info', 'private', 'POST', $params);
    }
    public function privatePostTrade($params = array()) {
        return $this->request('trade', 'private', 'POST', $params);
    }
    public function privatePostCancel($params = array()) {
        return $this->request('cancel', 'private', 'POST', $params);
    }
    public function privatePostOrderbook($params = array()) {
        return $this->request('orderbook', 'private', 'POST', $params);
    }
    public function privatePostOrders($params = array()) {
        return $this->request('orders', 'private', 'POST', $params);
    }
    public function privatePostTransfer($params = array()) {
        return $this->request('transfer', 'private', 'POST', $params);
    }
    public function privatePostWithdraw($params = array()) {
        return $this->request('withdraw', 'private', 'POST', $params);
    }
    public function privatePostHistory($params = array()) {
        return $this->request('history', 'private', 'POST', $params);
    }
    public function privatePostTransactions($params = array()) {
        return $this->request('transactions', 'private', 'POST', $params);
    }
    public function v1_01PublicGetTradingTicker($params = array()) {
        return $this->request('trading/ticker', 'v1_01Public', 'GET', $params);
    }
    public function v1_01PublicGetTradingTickerSymbol($params = array()) {
        return $this->request('trading/ticker/{symbol}', 'v1_01Public', 'GET', $params);
    }
    public function v1_01PublicGetTradingStats($params = array()) {
        return $this->request('trading/stats', 'v1_01Public', 'GET', $params);
    }
    public function v1_01PublicGetTradingStatsSymbol($params = array()) {
        return $this->request('trading/stats/{symbol}', 'v1_01Public', 'GET', $params);
    }
    public function v1_01PublicGetTradingOrderbookSymbol($params = array()) {
        return $this->request('trading/orderbook/{symbol}', 'v1_01Public', 'GET', $params);
    }
    public function v1_01PublicGetTradingTransactionsSymbol($params = array()) {
        return $this->request('trading/transactions/{symbol}', 'v1_01Public', 'GET', $params);
    }
    public function v1_01PublicGetTradingCandleHistorySymbolResolution($params = array()) {
        return $this->request('trading/candle/history/{symbol}/{resolution}', 'v1_01Public', 'GET', $params);
    }
    public function v1_01PrivateGetApiPaymentsDepositsCryptoAddresses($params = array()) {
        return $this->request('api_payments/deposits/crypto/addresses', 'v1_01Private', 'GET', $params);
    }
    public function v1_01PrivateGetPaymentsWithdrawalDetailId($params = array()) {
        return $this->request('payments/withdrawal/{detailId}', 'v1_01Private', 'GET', $params);
    }
    public function v1_01PrivateGetPaymentsDepositDetailId($params = array()) {
        return $this->request('payments/deposit/{detailId}', 'v1_01Private', 'GET', $params);
    }
    public function v1_01PrivateGetTradingOffer($params = array()) {
        return $this->request('trading/offer', 'v1_01Private', 'GET', $params);
    }
    public function v1_01PrivateGetTradingStopOffer($params = array()) {
        return $this->request('trading/stop/offer', 'v1_01Private', 'GET', $params);
    }
    public function v1_01PrivateGetTradingConfigSymbol($params = array()) {
        return $this->request('trading/config/{symbol}', 'v1_01Private', 'GET', $params);
    }
    public function v1_01PrivateGetTradingHistoryTransactions($params = array()) {
        return $this->request('trading/history/transactions', 'v1_01Private', 'GET', $params);
    }
    public function v1_01PrivateGetBalancesBITBAYHistory($params = array()) {
        return $this->request('balances/BITBAY/history', 'v1_01Private', 'GET', $params);
    }
    public function v1_01PrivateGetBalancesBITBAYBalance($params = array()) {
        return $this->request('balances/BITBAY/balance', 'v1_01Private', 'GET', $params);
    }
    public function v1_01PrivateGetFiatCantorRateBaseIdQuoteId($params = array()) {
        return $this->request('fiat_cantor/rate/{baseId}/{quoteId}', 'v1_01Private', 'GET', $params);
    }
    public function v1_01PrivateGetFiatCantorHistory($params = array()) {
        return $this->request('fiat_cantor/history', 'v1_01Private', 'GET', $params);
    }
    public function v1_01PrivatePostTradingOfferSymbol($params = array()) {
        return $this->request('trading/offer/{symbol}', 'v1_01Private', 'POST', $params);
    }
    public function v1_01PrivatePostTradingStopOfferSymbol($params = array()) {
        return $this->request('trading/stop/offer/{symbol}', 'v1_01Private', 'POST', $params);
    }
    public function v1_01PrivatePostTradingConfigSymbol($params = array()) {
        return $this->request('trading/config/{symbol}', 'v1_01Private', 'POST', $params);
    }
    public function v1_01PrivatePostBalancesBITBAYBalance($params = array()) {
        return $this->request('balances/BITBAY/balance', 'v1_01Private', 'POST', $params);
    }
    public function v1_01PrivatePostBalancesBITBAYBalanceTransferSourceDestination($params = array()) {
        return $this->request('balances/BITBAY/balance/transfer/{source}/{destination}', 'v1_01Private', 'POST', $params);
    }
    public function v1_01PrivatePostFiatCantorExchange($params = array()) {
        return $this->request('fiat_cantor/exchange', 'v1_01Private', 'POST', $params);
    }
    public function v1_01PrivateDeleteTradingOfferSymbolIdSidePrice($params = array()) {
        return $this->request('trading/offer/{symbol}/{id}/{side}/{price}', 'v1_01Private', 'DELETE', $params);
    }
    public function v1_01PrivateDeleteTradingStopOfferSymbolIdSidePrice($params = array()) {
        return $this->request('trading/stop/offer/{symbol}/{id}/{side}/{price}', 'v1_01Private', 'DELETE', $params);
    }
    public function v1_01PrivatePutBalancesBITBAYBalanceId($params = array()) {
        return $this->request('balances/BITBAY/balance/{id}', 'v1_01Private', 'PUT', $params);
    }
}