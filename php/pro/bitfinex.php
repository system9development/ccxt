<?php

namespace ccxt\pro;

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

use Exception; // a common import
use ccxt\ExchangeError;
use ccxt\AuthenticationError;
use ccxt\Precise;
use React\Async;
use React\Promise\PromiseInterface;

class bitfinex extends \ccxt\async\bitfinex {

    public function describe() {
        return $this->deep_extend(parent::describe(), array(
            'has' => array(
                'ws' => true,
                'watchTicker' => true,
                'watchTickers' => false,
                'watchOrderBook' => true,
                'watchTrades' => true,
                'watchBalance' => false, // for now
                'watchOHLCV' => false, // missing on the exchange side in v1
            ),
            'urls' => array(
                'api' => array(
                    'ws' => array(
                        'public' => 'wss://api-pub.bitfinex.com/ws/1',
                        'private' => 'wss://api.bitfinex.com/ws/1',
                    ),
                ),
            ),
            'options' => array(
                'watchOrderBook' => array(
                    'prec' => 'P0',
                    'freq' => 'F0',
                ),
                'ordersLimit' => 1000,
            ),
        ));
    }

    public function subscribe($channel, $symbol, $params = array ()) {
        return Async\async(function () use ($channel, $symbol, $params) {
            Async\await($this->load_markets());
            $market = $this->market($symbol);
            $marketId = $market['id'];
            $url = $this->urls['api']['ws']['public'];
            $messageHash = $channel . ':' . $marketId;
            // $channel = 'trades';
            $request = array(
                'event' => 'subscribe',
                'channel' => $channel,
                'symbol' => $marketId,
                'messageHash' => $messageHash,
            );
            return Async\await($this->watch($url, $messageHash, $this->deep_extend($request, $params), $messageHash));
        }) ();
    }

    public function watch_trades(string $symbol, ?int $since = null, ?int $limit = null, $params = array ()): PromiseInterface {
        return Async\async(function () use ($symbol, $since, $limit, $params) {
            /**
             * get the list of most recent $trades for a particular $symbol
             * @param {string} $symbol unified $symbol of the market to fetch $trades for
             * @param {int} [$since] timestamp in ms of the earliest trade to fetch
             * @param {int} [$limit] the maximum amount of $trades to fetch
             * @param {array} [$params] extra parameters specific to the exchange API endpoint
             * @return {array[]} a list of ~@link https://docs.ccxt.com/#/?id=public-$trades trade structures~
             */
            Async\await($this->load_markets());
            $symbol = $this->symbol($symbol);
            $trades = Async\await($this->subscribe('trades', $symbol, $params));
            if ($this->newUpdates) {
                $limit = $trades->getLimit ($symbol, $limit);
            }
            return $this->filter_by_since_limit($trades, $since, $limit, 'timestamp', true);
        }) ();
    }

    public function watch_ticker(string $symbol, $params = array ()): PromiseInterface {
        return Async\async(function () use ($symbol, $params) {
            /**
             * watches a price ticker, a statistical calculation with the information calculated over the past 24 hours for a specific market
             * @param {string} $symbol unified $symbol of the market to fetch the ticker for
             * @param {array} [$params] extra parameters specific to the exchange API endpoint
             * @return {array} a ~@link https://docs.ccxt.com/#/?id=ticker-structure ticker structure~
             */
            return Async\await($this->subscribe('ticker', $symbol, $params));
        }) ();
    }

    public function handle_trades(Client $client, $message, $subscription) {
        //
        // initial snapshot
        //
        //     array(
        //         2,
        //         array(
        //             array( null, 1580565020, 9374.9, 0.005 ),
        //             array( null, 1580565004, 9374.9, 0.005 ),
        //             array( null, 1580565003, 9374.9, 0.005 ),
        //         )
        //     )
        //
        // when a $trade does not have an id yet
        //
        //     // $channel id, update type, seq, time, price, amount
        //     array( 2, "te", "28462857-BTCUSD", 1580565041, 9374.9, 0.005 ),
        //
        // when a $trade already has an id
        //
        //     // $channel id, update type, seq, $trade id, time, price, amount
        //     array( 2, "tu", "28462857-BTCUSD", 413357662, 1580565041, 9374.9, 0.005 )
        //
        $channel = $this->safe_value($subscription, 'channel');
        $marketId = $this->safe_string($subscription, 'pair');
        $messageHash = $channel . ':' . $marketId;
        $tradesLimit = $this->safe_integer($this->options, 'tradesLimit', 1000);
        $market = $this->safe_market($marketId);
        $symbol = $market['symbol'];
        $data = $this->safe_value($message, 1);
        $stored = $this->safe_value($this->trades, $symbol);
        if ($stored === null) {
            $stored = new ArrayCache ($tradesLimit);
            $this->trades[$symbol] = $stored;
        }
        if (gettype($data) === 'array' && array_keys($data) === array_keys(array_keys($data))) {
            $trades = $this->parse_trades($data, $market);
            for ($i = 0; $i < count($trades); $i++) {
                $stored->append ($trades[$i]);
            }
        } else {
            $second = $this->safe_string($message, 1);
            if ($second !== 'tu') {
                return;
            }
            $trade = $this->parse_trade($message, $market);
            $stored->append ($trade);
        }
        $client->resolve ($stored, $messageHash);
        return $message;
    }

    public function parse_trade($trade, $market = null): array {
        //
        // snapshot $trade
        //
        //     // null, time, $price, $amount
        //     array( null, 1580565020, 9374.9, 0.005 ),
        //
        // when a $trade does not have an $id yet
        //
        //     // channel $id, update type, $seq, time, $price, $amount
        //     array( 2, "te", "28462857-BTCUSD", 1580565041, 9374.9, 0.005 ),
        //
        // when a $trade already has an $id
        //
        //     // channel $id, update type, $seq, $trade $id, time, $price, $amount
        //     array( 2, "tu", "28462857-BTCUSD", 413357662, 1580565041, 9374.9, 0.005 )
        //
        if (gettype($trade) !== 'array' || array_keys($trade) !== array_keys(array_keys($trade))) {
            return parent::parse_trade($trade, $market);
        }
        $tradeLength = count($trade);
        $event = $this->safe_string($trade, 1);
        $id = null;
        if ($event === 'tu') {
            $id = $this->safe_string($trade, $tradeLength - 4);
        }
        $timestamp = $this->safe_timestamp($trade, $tradeLength - 3);
        $price = $this->safe_string($trade, $tradeLength - 2);
        $amount = $this->safe_string($trade, $tradeLength - 1);
        $side = null;
        if ($amount !== null) {
            $side = Precise::string_gt($amount, '0') ? 'buy' : 'sell';
            $amount = Precise::string_abs($amount);
        }
        $seq = $this->safe_string($trade, 2);
        $parts = explode('-', $seq);
        $marketId = $this->safe_string($parts, 1);
        if ($marketId !== null) {
            $marketId = str_replace('t', '', $marketId);
        }
        $symbol = $this->safe_symbol($marketId, $market);
        $takerOrMaker = null;
        $orderId = null;
        return $this->safe_trade(array(
            'info' => $trade,
            'timestamp' => $timestamp,
            'datetime' => $this->iso8601($timestamp),
            'symbol' => $symbol,
            'id' => $id,
            'order' => $orderId,
            'type' => null,
            'takerOrMaker' => $takerOrMaker,
            'side' => $side,
            'price' => $price,
            'amount' => $amount,
            'cost' => null,
            'fee' => null,
        ));
    }

    public function handle_ticker(Client $client, $message, $subscription) {
        //
        //     array(
        //         2,             // 0 CHANNEL_ID integer Channel ID
        //         236.62,        // 1 BID float Price of $last highest bid
        //         9.0029,        // 2 BID_SIZE float Size of the $last highest bid
        //         236.88,        // 3 ASK float Price of $last lowest ask
        //         7.1138,        // 4 ASK_SIZE float Size of the $last lowest ask
        //         -1.02,         // 5 DAILY_CHANGE float Amount that the $last price has changed since yesterday
        //         0,             // 6 DAILY_CHANGE_PERC float Amount that the price has changed expressed in percentage terms
        //         236.52,        // 7 LAST_PRICE float Price of the $last trade.
        //         5191.36754297, // 8 VOLUME float Daily volume
        //         250.01,        // 9 HIGH float Daily high
        //         220.05,        // 10 LOW float Daily low
        //     )
        //
        $marketId = $this->safe_string($subscription, 'pair');
        $symbol = $this->safe_symbol($marketId);
        $channel = 'ticker';
        $messageHash = $channel . ':' . $marketId;
        $last = $this->safe_string($message, 7);
        $change = $this->safe_string($message, 5);
        $open = null;
        if (($last !== null) && ($change !== null)) {
            $open = Precise::string_sub($last, $change);
        }
        $result = array(
            'symbol' => $symbol,
            'timestamp' => null,
            'datetime' => null,
            'high' => $this->safe_float($message, 9),
            'low' => $this->safe_float($message, 10),
            'bid' => $this->safe_float($message, 1),
            'bidVolume' => null,
            'ask' => $this->safe_float($message, 3),
            'askVolume' => null,
            'vwap' => null,
            'open' => $this->parse_number($open),
            'close' => $this->parse_number($last),
            'last' => $this->parse_number($last),
            'previousClose' => null,
            'change' => $this->parse_number($change),
            'percentage' => $this->safe_float($message, 6),
            'average' => null,
            'baseVolume' => $this->safe_float($message, 8),
            'quoteVolume' => null,
            'info' => $message,
        );
        $this->tickers[$symbol] = $result;
        $client->resolve ($result, $messageHash);
    }

    public function watch_order_book(string $symbol, ?int $limit = null, $params = array ()): PromiseInterface {
        return Async\async(function () use ($symbol, $limit, $params) {
            /**
             * watches information on open orders with bid (buy) and ask (sell) prices, volumes and other data
             * @param {string} $symbol unified $symbol of the market to fetch the order book for
             * @param {int} [$limit] the maximum amount of order book entries to return
             * @param {array} [$params] extra parameters specific to the exchange API endpoint
             * @return {array} A dictionary of ~@link https://docs.ccxt.com/#/?id=order-book-structure order book structures~ indexed by market symbols
             */
            if ($limit !== null) {
                if (($limit !== 25) && ($limit !== 100)) {
                    throw new ExchangeError($this->id . ' watchOrderBook $limit argument must be null, 25 or 100');
                }
            }
            $options = $this->safe_value($this->options, 'watchOrderBook', array());
            $prec = $this->safe_string($options, 'prec', 'P0');
            $freq = $this->safe_string($options, 'freq', 'F0');
            $request = array(
                // "event" => "subscribe", // added in subscribe()
                // "channel" => channel, // added in subscribe()
                // "symbol" => marketId, // added in subscribe()
                'prec' => $prec, // string, level of price aggregation, 'P0', 'P1', 'P2', 'P3', 'P4', default P0
                'freq' => $freq, // string, frequency of updates 'F0' = realtime, 'F1' = 2 seconds, default is 'F0'
                'len' => $limit, // string, number of price points, '25', '100', default = '25'
            );
            $orderbook = Async\await($this->subscribe('book', $symbol, $this->deep_extend($request, $params)));
            return $orderbook->limit ();
        }) ();
    }

    public function handle_order_book(Client $client, $message, $subscription) {
        //
        // first $message (snapshot)
        //
        //     array(
        //         18691, // $channel $id
        //         array(
        //             array( 7364.8, 10, 4.354802 ), // $price, count, $size > 0 = bid
        //             array( 7364.7, 1, 0.00288831 ),
        //             array( 7364.3, 12, 0.048 ),
        //             array( 7364.9, 3, -0.42028976 ), // $price, count, $size < 0 = ask
        //             array( 7365, 1, -0.25 ),
        //             array( 7365.5, 1, -0.00371937 ),
        //         )
        //     )
        //
        // subsequent updates
        //
        //     array(
        //         30,     // $channel $id
        //         9339.9, // $price
        //         0,      // count
        //         -1,     // $size > 0 = bid, $size < 0 = ask
        //     )
        //
        $marketId = $this->safe_string($subscription, 'pair');
        $symbol = $this->safe_symbol($marketId);
        $channel = 'book';
        $messageHash = $channel . ':' . $marketId;
        $prec = $this->safe_string($subscription, 'prec', 'P0');
        $isRaw = ($prec === 'R0');
        // if it is an initial snapshot
        if (gettype($message[1]) === 'array' && array_keys($message[1]) === array_keys(array_keys($message[1]))) {
            $limit = $this->safe_integer($subscription, 'len');
            if ($isRaw) {
                // raw order books
                $this->orderbooks[$symbol] = $this->indexed_order_book(array(), $limit);
            } else {
                // P0, P1, P2, P3, P4
                $this->orderbooks[$symbol] = $this->counted_order_book(array(), $limit);
            }
            $orderbook = $this->orderbooks[$symbol];
            if ($isRaw) {
                $deltas = $message[1];
                for ($i = 0; $i < count($deltas); $i++) {
                    $delta = $deltas[$i];
                    $id = $this->safe_string($delta, 0);
                    $price = $this->safe_float($delta, 1);
                    $size = ($delta[2] < 0) ? -$delta[2] : $delta[2];
                    $side = ($delta[2] < 0) ? 'asks' : 'bids';
                    $bookside = $orderbook[$side];
                    $bookside->store ($price, $size, $id);
                }
            } else {
                $deltas = $message[1];
                for ($i = 0; $i < count($deltas); $i++) {
                    $delta = $deltas[$i];
                    $size = ($delta[2] < 0) ? -$delta[2] : $delta[2];
                    $side = ($delta[2] < 0) ? 'asks' : 'bids';
                    $bookside = $orderbook[$side];
                    $bookside->store ($delta[0], $size, $delta[1]);
                }
            }
            $client->resolve ($orderbook, $messageHash);
        } else {
            $orderbook = $this->orderbooks[$symbol];
            if ($isRaw) {
                $id = $this->safe_string($message, 1);
                $price = $this->safe_string($message, 2);
                $size = ($message[3] < 0) ? -$message[3] : $message[3];
                $side = ($message[3] < 0) ? 'asks' : 'bids';
                $bookside = $orderbook[$side];
                // $price = 0 means that you have to remove the order from your book
                $amount = Precise::string_gt($price, '0') ? $size : '0';
                $bookside->store ($this->parse_number($price), $this->parse_number($amount), $id);
            } else {
                $size = ($message[3] < 0) ? -$message[3] : $message[3];
                $side = ($message[3] < 0) ? 'asks' : 'bids';
                $bookside = $orderbook[$side];
                $bookside->store ($message[1], $size, $message[2]);
            }
            $client->resolve ($orderbook, $messageHash);
        }
    }

    public function handle_heartbeat(Client $client, $message) {
        //
        // every second (approx) if no other updates are sent
        //
        //     array( "event" => "heartbeat" )
        //
        $event = $this->safe_string($message, 'event');
        $client->resolve ($message, $event);
    }

    public function handle_system_status(Client $client, $message) {
        //
        // todo => answer the question whether handleSystemStatus should be renamed
        // and unified for any usage pattern that
        // involves system status and maintenance updates
        //
        //     {
        //         "event" => "info",
        //         "version" => 2,
        //         "serverId" => "e293377e-7bb7-427e-b28c-5db045b2c1d1",
        //         "platform" => array( status => 1 ), // 1 for operative, 0 for maintenance
        //     }
        //
        return $message;
    }

    public function handle_subscription_status(Client $client, $message) {
        //
        //     {
        //         "event" => "subscribed",
        //         "channel" => "book",
        //         "chanId" => 67473,
        //         "symbol" => "tBTCUSD",
        //         "prec" => "P0",
        //         "freq" => "F0",
        //         "len" => "25",
        //         "pair" => "BTCUSD"
        //     }
        //
        $channelId = $this->safe_string($message, 'chanId');
        $client->subscriptions[$channelId] = $message;
        return $message;
    }

    public function authenticate($params = array ()) {
        return Async\async(function () use ($params) {
            $url = $this->urls['api']['ws']['private'];
            $client = $this->client($url);
            $future = $client->future ('authenticated');
            $method = 'auth';
            $authenticated = $this->safe_value($client->subscriptions, $method);
            if ($authenticated === null) {
                $nonce = $this->milliseconds();
                $payload = 'AUTH' . (string) $nonce;
                $signature = $this->hmac($this->encode($payload), $this->encode($this->secret), 'sha384', 'hex');
                $request = array(
                    'apiKey' => $this->apiKey,
                    'authSig' => $signature,
                    'authNonce' => $nonce,
                    'authPayload' => $payload,
                    'event' => $method,
                    'filter' => array(
                        'trading',
                        'wallet',
                    ),
                );
                $this->spawn(array($this, 'watch'), $url, $method, $request, 1);
            }
            return Async\await($future);
        }) ();
    }

    public function handle_authentication_message(Client $client, $message) {
        $status = $this->safe_string($message, 'status');
        if ($status === 'OK') {
            // we resolve the $future here permanently so authentication only happens once
            $future = $this->safe_value($client->futures, 'authenticated');
            $future->resolve (true);
        } else {
            $error = new AuthenticationError ($this->json($message));
            $client->reject ($error, 'authenticated');
            // allows further authentication attempts
            $method = $this->safe_string($message, 'event');
            if (is_array($client->subscriptions) && array_key_exists($method, $client->subscriptions)) {
                unset($client->subscriptions[$method]);
            }
        }
    }

    public function watch_order($id, ?string $symbol = null, $params = array ()) {
        return Async\async(function () use ($id, $symbol, $params) {
            Async\await($this->load_markets());
            $url = $this->urls['api']['ws']['private'];
            Async\await($this->authenticate());
            return Async\await($this->watch($url, $id, null, 1));
        }) ();
    }

    public function watch_orders(?string $symbol = null, ?int $since = null, ?int $limit = null, $params = array ()): PromiseInterface {
        return Async\async(function () use ($symbol, $since, $limit, $params) {
            /**
             * watches information on multiple $orders made by the user
             * @param {string} $symbol unified market $symbol of the market $orders were made in
             * @param {int} [$since] the earliest time in ms to fetch $orders for
             * @param {int} [$limit] the maximum number of  orde structures to retrieve
             * @param {array} [$params] extra parameters specific to the exchange API endpoint
             * @return {array[]} a list of ~@link https://docs.ccxt.com/#/?id=order-structure order structures~
             */
            Async\await($this->load_markets());
            Async\await($this->authenticate());
            if ($symbol !== null) {
                $symbol = $this->symbol($symbol);
            }
            $url = $this->urls['api']['ws']['private'];
            $orders = Async\await($this->watch($url, 'os', null, 1));
            if ($this->newUpdates) {
                $limit = $orders->getLimit ($symbol, $limit);
            }
            return $this->filter_by_symbol_since_limit($orders, $symbol, $since, $limit, true);
        }) ();
    }

    public function handle_orders(Client $client, $message, $subscription) {
        //
        // order snapshot
        //
        //     array(
        //         0,
        //         "os",
        //         array(
        //             array(
        //                 45287766631,
        //                 "ETHUST",
        //                 -0.07,
        //                 -0.07,
        //                 "EXCHANGE LIMIT",
        //                 "ACTIVE",
        //                 210,
        //                 0,
        //                 "2020-05-16T13:17:46Z",
        //                 0,
        //                 0,
        //                 0
        //             )
        //         )
        //     )
        //
        // order cancel
        //
        //     array(
        //         0,
        //         "oc",
        //         array(
        //             45287766631,
        //             "ETHUST",
        //             -0.07,
        //             -0.07,
        //             "EXCHANGE LIMIT",
        //             "CANCELED",
        //             210,
        //             0,
        //             "2020-05-16T13:17:46Z",
        //             0,
        //             0,
        //             0,
        //         )
        //     )
        //
        $data = $this->safe_value($message, 2, array());
        $messageType = $this->safe_string($message, 1);
        if ($messageType === 'os') {
            for ($i = 0; $i < count($data); $i++) {
                $value = $data[$i];
                $this->handle_order($client, $value);
            }
        } else {
            $this->handle_order($client, $data);
        }
        if ($this->orders !== null) {
            $client->resolve ($this->orders, 'os');
        }
    }

    public function parse_ws_order_status($status) {
        $statuses = array(
            'ACTIVE' => 'open',
            'CANCELED' => 'canceled',
        );
        return $this->safe_string($statuses, $status, $status);
    }

    public function handle_order(Client $client, $order) {
        // array( 45287766631,
        //     "ETHUST",
        //     -0.07,
        //     -0.07,
        //     "EXCHANGE LIMIT",
        //     "CANCELED",
        //     210,
        //     0,
        //     "2020-05-16T13:17:46Z",
        //     0,
        //     0,
        //     0 )
        $id = $this->safe_string($order, 0);
        $marketId = $this->safe_string($order, 1);
        $symbol = $this->safe_symbol($marketId);
        $amount = $this->safe_string($order, 2);
        $remaining = $this->safe_string($order, 3);
        $side = 'buy';
        if (Precise::string_lt($amount, '0')) {
            $amount = Precise::string_abs($amount);
            $remaining = Precise::string_abs($remaining);
            $side = 'sell';
        }
        $type = $this->safe_string($order, 4);
        if (mb_strpos($type, 'LIMIT') > -1) {
            $type = 'limit';
        } elseif (mb_strpos($type, 'MARKET') > -1) {
            $type = 'market';
        }
        $status = $this->parse_ws_order_status($this->safe_string($order, 5));
        $price = $this->safe_string($order, 6);
        $rawDatetime = $this->safe_string($order, 8);
        $timestamp = $this->parse8601($rawDatetime);
        $parsed = $this->safe_order(array(
            'info' => $order,
            'id' => $id,
            'clientOrderId' => null,
            'timestamp' => $timestamp,
            'datetime' => $this->iso8601($timestamp),
            'lastTradeTimestamp' => null,
            'symbol' => $symbol,
            'type' => $type,
            'side' => $side,
            'price' => $price,
            'stopPrice' => null,
            'triggerPrice' => null,
            'average' => null,
            'amount' => $amount,
            'remaining' => $remaining,
            'filled' => null,
            'status' => $status,
            'fee' => null,
            'cost' => null,
            'trades' => null,
        ));
        if ($this->orders === null) {
            $limit = $this->safe_integer($this->options, 'ordersLimit', 1000);
            $this->orders = new ArrayCacheBySymbolById ($limit);
        }
        $orders = $this->orders;
        $orders->append ($parsed);
        $client->resolve ($parsed, $id);
        return $parsed;
    }

    public function handle_message(Client $client, $message) {
        if (gettype($message) === 'array' && array_keys($message) === array_keys(array_keys($message))) {
            $channelId = $this->safe_string($message, 0);
            //
            //     array(
            //         1231,
            //         "hb",
            //     )
            //
            if ($message[1] === 'hb') {
                return $message; // skip heartbeats within $subscription channels for now
            }
            $subscription = $this->safe_value($client->subscriptions, $channelId, array());
            $channel = $this->safe_string($subscription, 'channel');
            $name = $this->safe_string($message, 1);
            $methods = array(
                'book' => array($this, 'handle_order_book'),
                // 'ohlc' => $this->handleOHLCV,
                'ticker' => array($this, 'handle_ticker'),
                'trades' => array($this, 'handle_trades'),
                'os' => array($this, 'handle_orders'),
                'on' => array($this, 'handle_orders'),
                'oc' => array($this, 'handle_orders'),
            );
            $method = $this->safe_value_2($methods, $channel, $name);
            if ($method === null) {
                return $message;
            } else {
                return $method($client, $message, $subscription);
            }
        } else {
            // todo add bitfinex handleErrorMessage
            //
            //     {
            //         "event" => "info",
            //         "version" => 2,
            //         "serverId" => "e293377e-7bb7-427e-b28c-5db045b2c1d1",
            //         "platform" => array( status => 1 ), // 1 for operative, 0 for maintenance
            //     }
            //
            $event = $this->safe_string($message, 'event');
            if ($event !== null) {
                $methods = array(
                    'info' => array($this, 'handle_system_status'),
                    // 'book' => 'handleOrderBook',
                    'subscribed' => array($this, 'handle_subscription_status'),
                    'auth' => array($this, 'handle_authentication_message'),
                );
                $method = $this->safe_value($methods, $event);
                if ($method === null) {
                    return $message;
                } else {
                    return $method($client, $message);
                }
            }
        }
    }
}
