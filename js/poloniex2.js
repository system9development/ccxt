'use strict';

//  ---------------------------------------------------------------------------

const Exchange = require ('./base/Exchange');
const { ExchangeError, ExchangeNotAvailable, RequestTimeout, AuthenticationError, PermissionDenied, RateLimitExceeded, InsufficientFunds, OrderNotFound, InvalidOrder, AccountSuspended, CancelPending, InvalidNonce, OnMaintenance, BadSymbol } = require ('./base/errors');
const { TICK_SIZE } = require ('./base/functions/number');
const Precise = require ('./base/Precise');

//  ---------------------------------------------------------------------------

module.exports = class poloniex extends Exchange {
    describe () {
        return this.deepExtend (super.describe (), {
            'id': 'poloniex2',
            'name': 'Poloniex2',
            'countries': [ 'US' ],
            'rateLimit': 100,
            'certified': false,
            'pro': true,
            'has': {
                'CORS': undefined,
                'spot': true,
                'margin': undefined, // has but not fully implemented
                'swap': undefined, // has but not fully implemented
                'future': undefined, // has but not fully implemented
                'option': undefined,
                'cancelAllOrders': true,
                'cancelOrder': true,
                'createDepositAddress': true,
                'createMarketOrder': undefined,
                'createOrder': true,
                'editOrder': true,
                'fetchBalance': true,
                'fetchClosedOrder': 'emulated',
                'fetchCurrencies': true,
                'fetchDepositAddress': true,
                'fetchDeposits': true,
                'fetchMarginMode': false,
                'fetchMarkets': true,
                'fetchMyTrades': true,
                'fetchOHLCV': true,
                'fetchOpenInterestHistory': false,
                'fetchOpenOrder': true, // true endpoint for a single open order
                'fetchOpenOrders': true, // true endpoint for open orders
                'fetchOrderBook': true,
                'fetchOrderBooks': false,
                'fetchOrderTrades': true, // true endpoint for trades of a single open or closed order
                'fetchPosition': true,
                'fetchPositionMode': false,
                'fetchTicker': true,
                'fetchTickers': true,
                'fetchTime': true,
                'fetchTrades': true,
                'fetchTradingFee': false,
                'fetchTradingFees': true,
                'fetchTransactions': true,
                'fetchTransfer': false,
                'fetchTransfers': false,
                'fetchWithdrawals': true,
                'transfer': true,
                'withdraw': true,
            },
            'timeframes': {
                '1m': 'MINUTE_1',
                '5m': 'MINUTE_5',
                '10m': 'MINUTE_10',
                '15m': 'MINUTE_15',
                '30m': 'MINUTE_30',
                '1h': 'HOUR_1',
                '2h': 'HOUR_2',
                '4h': 'HOUR_4',
                '6h': 'HOUR_6',
                '12h': 'HOUR_12',
                '1d': 'DAY_1',
                '3d': 'DAY_3',
                '1w': 'WEEK_1',
                '1M': 'MONTH_1',
            },
            'urls': {
                'logo': 'https://user-images.githubusercontent.com/1294454/27766817-e9456312-5ee6-11e7-9b3c-b628ca5626a5.jpg',
                'api': 'https://api.poloniex.com',
                'test': 'https://sand-spot-api-gateway.poloniex.com',
                'www': 'https://www.poloniex.com',
                'doc': 'https://docs.poloniex.com',
                'fees': 'https://poloniex.com/fees',
                'referral': 'https://poloniex.com/signup?c=UBFZJRPJ',
            },
            'api': {
                'public': {
                    'get': {
                        'markets': 1,
                        'markets/{symbol}': 0.2,
                        'currencies': 1,
                        'currencies/{currency}': 1,
                        'timestamp': 0.2,
                        'markets/price': 0.2,
                        'markets/{symbol}/price': 0.2,
                        'markets/{symbol}/orderBook': 0.2,
                        'markets/{symbol}/candles': 0.2,
                        'markets/{symbol}/trades': 0.2,
                        'markets/ticker24h': 1,
                        'markets/{symbol}/ticker24h': 1,
                    },
                },
                'private': {
                    'get': {
                        'accounts': 0.2,
                        'accounts/balances': 0.2,
                        'accounts/{id}/balances': 0.2,
                        'accounts/transfer': 500,
                        'accounts/transfer/{id}': 0.2,
                        'feeinfo': 500,
                        'wallets/addresses': 500,
                        'wallets/activity': 500,
                        'wallets/addresses/{currency}': 500,
                        'orders': 500,
                        'orders/{id}': 0.2,
                        'orders/history': 500,
                        'smartorders': 500,
                        'smartorders/{id}': 0.2,
                        'smartorders/history': 500,
                        'trades': 500,
                        'orders/{id}/trades': 0.2,
                    },
                    'post': {
                        'accounts/transfer': 0.2,
                        'wallets/address': 500,
                        'wallets/withdraw': 500,
                        'orders': 0.2,
                        'smartorders': 0.2,
                    },
                    'delete': {
                        'orders/{id}': 0.2,
                        'orders/cancelByIds': 500,
                        'orders': 500,
                        'smartorders/{id}': 0.2,
                        'smartorders/cancelByIds': 500,
                        'smartorders': 500,
                    },
                },
            },
            'fees': {
                'trading': {
                    'feeSide': 'get',
                    // starting from Jan 8 2020
                    'maker': this.parseNumber ('0.0009'),
                    'taker': this.parseNumber ('0.0009'),
                },
                'funding': {},
            },
            'limits': {
                'amount': {
                    'min': 0.000001,
                    'max': undefined,
                },
                'price': {
                    'min': 0.00000001,
                    'max': undefined,
                },
                'cost': {
                    'min': undefined,
                    'max': undefined,
                },
            },
            'commonCurrencies': {
                'AIR': 'AirCoin',
                'APH': 'AphroditeCoin',
                'BCC': 'BTCtalkcoin',
                'BCHABC': 'BCHABC',
                'BDG': 'Badgercoin',
                'BTM': 'Bitmark',
                'CON': 'Coino',
                'GOLD': 'GoldEagles',
                'GPUC': 'GPU',
                'HOT': 'Hotcoin',
                'ITC': 'Information Coin',
                'KEY': 'KEYCoin',
                'MASK': 'NFTX Hashmasks Index', // conflict with Mask Network
                'MEME': 'Degenerator Meme', // Degenerator Meme migrated to Meme Inu, this exchange still has the old price
                'PLX': 'ParallaxCoin',
                'REPV2': 'REP',
                'STR': 'XLM',
                'SOC': 'SOCC',
                'TRADE': 'Unitrade',
                'XAP': 'API Coin',
                // this is not documented in the API docs for Poloniex
                // https://github.com/ccxt/ccxt/issues/7084
                // when the user calls withdraw ('USDT', amount, address, tag, params)
                // with params = { 'currencyToWithdrawAs': 'USDTTRON' }
                // or params = { 'currencyToWithdrawAs': 'USDTETH' }
                // fetchWithdrawals ('USDT') returns the corresponding withdrawals
                // with a USDTTRON or a USDTETH currency id, respectfully
                // therefore we have map them back to the original code USDT
                // otherwise the returned withdrawals are filtered out
                'USDTTRON': 'USDT',
                'USDTETH': 'USDT',
                'UST': 'USTC',
            },
            'options': {
                'networks': {
                    'ERC20': 'ETH',
                    'TRX': 'TRON',
                    'TRC20': 'TRON',
                },
                'limits': {
                    'cost': {
                        'min': {
                            'BTC': 0.0001,
                            'ETH': 0.0001,
                            'USDT': 1.0,
                            'TRX': 100,
                            'BNB': 0.06,
                            'USDC': 1.0,
                            'USDJ': 1.0,
                            'TUSD': 0.0001,
                            'DAI': 1.0,
                            'PAX': 1.0,
                            'BUSD': 1.0,
                        },
                    },
                },
                'accountsByType': {
                    'spot': 'exchange',
                    'margin': 'margin',
                    'future': 'futures',
                    'lending': 'lending',
                },
                'accountsById': {
                    'exchange': 'spot',
                    'margin': 'margin',
                    'futures': 'future',
                    'lending': 'lending',
                },
            },
            'precisionMode': TICK_SIZE,
            'exceptions': {
                'exact': {
                    'You may only place orders that reduce your position.': InvalidOrder,
                    'Invalid order number, or you are not the person who placed the order.': OrderNotFound,
                    'Permission denied': PermissionDenied,
                    'Permission denied.': PermissionDenied,
                    'Connection timed out. Please try again.': RequestTimeout,
                    'Internal error. Please try again.': ExchangeNotAvailable,
                    'Currently in maintenance mode.': OnMaintenance,
                    'Order not found, or you are not the person who placed it.': OrderNotFound,
                    'Invalid API key/secret pair.': AuthenticationError,
                    'Please do not make more than 8 API calls per second.': RateLimitExceeded,
                    'This IP has been temporarily throttled. Please ensure your requests are valid and try again in one minute.': RateLimitExceeded,
                    'Rate must be greater than zero.': InvalidOrder, // {"error":"Rate must be greater than zero."}
                    'Invalid currency pair.': BadSymbol, // {"error":"Invalid currency pair."}
                    'Invalid currencyPair parameter.': BadSymbol, // {"error":"Invalid currencyPair parameter."}
                    'Trading is disabled in this market.': BadSymbol, // {"error":"Trading is disabled in this market."}
                    'Invalid orderNumber parameter.': OrderNotFound,
                    'Order is beyond acceptable bounds.': InvalidOrder, // {"error":"Order is beyond acceptable bounds.","fee":"0.00155000","currencyPair":"USDT_BOBA"}
                    'This account is closed.': AccountSuspended, // {"error":"This account is closed."}
                },
                'broad': {
                    'Total must be at least': InvalidOrder, // {"error":"Total must be at least 0.0001."}
                    'This account is frozen': AccountSuspended, // {"error":"This account is frozen for trading."} || {"error":"This account is frozen."}
                    'This account is locked.': AccountSuspended, // {"error":"This account is locked."}
                    'Not enough': InsufficientFunds,
                    'Nonce must be greater': InvalidNonce,
                    'You have already called cancelOrder': CancelPending, // {"error":"You have already called cancelOrder, moveOrder, or cancelReplace on this order. Please wait for that call's response."}
                    'Amount must be at least': InvalidOrder, // {"error":"Amount must be at least 0.000001."}
                    'is either completed or does not exist': OrderNotFound, // {"error":"Order 587957810791 is either completed or does not exist."}
                    'Error pulling ': ExchangeError, // {"error":"Error pulling order book"}
                },
            },
        });
    }

    parseOHLCV (ohlcv, market = undefined) {
        //
        //     [
        //         [
        //             "22814.01",
        //             "22937.42",
        //             "22832.57",
        //             "22937.42",
        //             "3916.58764051",
        //             "0.171199",
        //             "2982.64647063",
        //             "0.130295",
        //             33,
        //             0,
        //             "22877.449915304470460711",
        //             "MINUTE_5",
        //             1659664800000,
        //             1659665099999
        //         ]
        //     ]
        //
        return [
            this.safeInteger (ohlcv, 12),
            this.safeNumber (ohlcv, 2),
            this.safeNumber (ohlcv, 1),
            this.safeNumber (ohlcv, 0),
            this.safeNumber (ohlcv, 3),
            this.safeNumber (ohlcv, 4),
        ];
    }

    async fetchOHLCV (symbol, timeframe = '5m', since = undefined, limit = undefined, params = {}) {
        /**
         * @method
         * @name poloniex#fetchOHLCV
         * @description fetches historical candlestick data containing the open, high, low, and close price, and the volume of a market
         * @param {string} symbol unified symbol of the market to fetch OHLCV data for
         * @param {string} timeframe the length of time each candle represents
         * @param {int|undefined} since timestamp in ms of the earliest candle to fetch
         * @param {int|undefined} limit the maximum amount of candles to fetch
         * @param {object} params extra parameters specific to the poloniex api endpoint
         * @returns {[[int]]} A list of candles ordered as timestamp, open, high, low, close, volume
         */
        await this.loadMarkets ();
        const market = this.market (symbol);
        const request = {
            'symbol': market['id'],
            'interval': this.timeframes[timeframe],
        };
        if (since !== undefined) {
            request['startTime'] = since;
        }
        if (limit !== undefined) {
            // limit should in between 100 and 500
            request['limit'] = limit;
        }
        const response = await this.publicGetMarketsSymbolCandles (this.extend (request, params));
        //
        //     [
        //         [
        //             "22814.01",
        //             "22937.42",
        //             "22832.57",
        //             "22937.42",
        //             "3916.58764051",
        //             "0.171199",
        //             "2982.64647063",
        //             "0.130295",
        //             33,
        //             0,
        //             "22877.449915304470460711",
        //             "MINUTE_5",
        //             1659664800000,
        //             1659665099999
        //         ]
        //     ]
        //
        return this.parseOHLCVs (response, market, timeframe, since, limit);
    }

    async loadMarkets (reload = false, params = {}) {
        const markets = await super.loadMarkets (reload, params);
        const currenciesByNumericId = this.safeValue (this.options, 'currenciesByNumericId');
        if ((currenciesByNumericId === undefined) || reload) {
            this.options['currenciesByNumericId'] = this.indexBy (this.currencies, 'numericId');
        }
        return markets;
    }

    async fetchMarkets (params = {}) {
        /**
         * @method
         * @name poloniex#fetchMarkets
         * @description retrieves data on all markets for poloniex
         * @param {object} params extra parameters specific to the exchange api endpoint
         * @returns {[object]} an array of objects representing market data
         */
        const markets = await this.publicGetMarkets (params);
        //
        //     [
        //         {
        //             "symbol" : "BTS_BTC",
        //             "baseCurrencyName" : "BTS",
        //             "quoteCurrencyName" : "BTC",
        //             "displayName" : "BTS/BTC",
        //             "state" : "NORMAL",
        //             "visibleStartTime" : 1659018816626,
        //             "tradableStartTime" : 1659018816626,
        //             "symbolTradeLimit" : {
        //                 "symbol" : "BTS_BTC",
        //                 "priceScale" : 10,
        //                 "quantityScale" : 0,
        //                 "amountScale" : 8,
        //                 "minQuantity" : "100",
        //                 "minAmount" : "0.00001",
        //                 "highestBid" : "0",
        //                 "lowestAsk" : "0"
        //             }
        //         }
        //     ]
        //
        const result = [];
        for (let i = 0; i < markets.length; i++) {
            const market = this.safeValue (markets, i);
            const id = this.safeString (market, 'symbol');
            const baseId = this.safeString (market, 'baseCurrencyName');
            const quoteId = this.safeString (market, 'quoteCurrencyName');
            const base = this.safeCurrencyCode (baseId);
            const quote = this.safeCurrencyCode (quoteId);
            const state = this.safeString (market, 'state');
            const isFrozen = state === 'PAUSE';
            const symbolTradeLimit = this.safeValue (market, 'symbolTradeLimit');
            // these are known defaults
            result.push ({
                'id': id,
                'symbol': base + '/' + quote,
                'base': base,
                'quote': quote,
                'settle': undefined,
                'baseId': baseId,
                'quoteId': quoteId,
                'settleId': undefined,
                'type': 'spot',
                'spot': true,
                'margin': false,
                'swap': false,
                'future': false,
                'option': false,
                'active': (isFrozen !== '1'),
                'contract': false,
                'linear': undefined,
                'inverse': undefined,
                'contractSize': undefined,
                'expiry': undefined,
                'expiryDatetime': undefined,
                'strike': undefined,
                'optionType': undefined,
                'precision': {
                    'amount': this.safeNumber (symbolTradeLimit, 'amountScale'),
                    'price': this.safeNumber (symbolTradeLimit, 'priceScale'),
                },
                'limits': this.extend (this.limits, {
                    'leverage': {
                        'min': undefined,
                        'max': undefined,
                    },
                    'amount': {
                        'min': this.safeNumber (symbolTradeLimit, 'minAmount'),
                        'max': undefined,
                    },
                    'price': {
                        'min': undefined,
                        'max': undefined,
                    },
                    'cost': {
                        'min': undefined,
                        'max': undefined,
                    },
                }),
                'info': market,
            });
        }
        return result;
    }

    async fetchTime (params = {}) {
        /**
         * @method
         * @name poloniex#fetchTime
         * @description fetches the current integer timestamp in milliseconds from the exchange server
         * @param {object} params extra parameters specific to the poloniex api endpoint
         * @returns {int} the current integer timestamp in milliseconds from the exchange server
         */
        const response = await this.publicGetTimestamp (params);
        return this.safeInteger (response, 'serverTime');
    }

    parseTicker (ticker, market = undefined) {
        //
        //     {
        //         "symbol" : "BTC_USDT",
        //         "open" : "22814.93",
        //         "low" : "22441.90",
        //         "high" : "23413.00",
        //         "close" : "23148.66",
        //         "quantity" : "71.743706",
        //         "amount" : "1638994.52683452",
        //         "tradeCount" : 3893,
        //         "startTime" : 1659605760000,
        //         "closeTime" : 1659692161077,
        //         "displayName" : "BTC/USDT",
        //         "dailyChange" : "0.0152",
        //         "ts" : 1659692169838
        //     }
        //
        const timestamp = this.safeInteger (ticker, 'ts');
        const marketId = this.safeString (ticker, 'symbol');
        market = this.market (marketId);
        const close = this.safeString (ticker, 'close');
        const relativeChange = this.safeString (ticker, 'percentChange');
        const percentage = Precise.stringMul (relativeChange, '100');
        return this.safeTicker ({
            'id': marketId,
            'symbol': market['symbol'],
            'timestamp': timestamp,
            'datetime': this.iso8601 (timestamp),
            'high': this.safeString (ticker, 'high'),
            'low': this.safeString (ticker, 'low'),
            'bid': undefined,
            'bidVolume': undefined,
            'ask': undefined,
            'askVolume': undefined,
            'vwap': undefined,
            'open': this.safeString (ticker, 'open'),
            'close': close,
            'last': close,
            'previousClose': undefined,
            'change': undefined,
            'percentage': percentage,
            'average': undefined,
            'baseVolume': this.safeString (ticker, 'quantity'),
            'quoteVolume': this.safeString (ticker, 'amount'),
            'info': ticker,
        }, market);
    }

    async fetchTickers (symbols = undefined, params = {}) {
        /**
         * @method
         * @name poloniex#fetchTickers
         * @description fetches price tickers for multiple markets, statistical calculations with the information calculated over the past 24 hours each market
         * @param {[string]|undefined} symbols unified symbols of the markets to fetch the ticker for, all market tickers are returned if not assigned
         * @param {object} params extra parameters specific to the poloniex api endpoint
         * @returns {object} an array of [ticker structures]{@link https://docs.ccxt.com/en/latest/manual.html#ticker-structure}
         */
        await this.loadMarkets ();
        const response = await this.publicGetMarketsTicker24h (params);
        //
        //     [
        //         {
        //             "symbol" : "KUB_USDD",
        //             "open" : "0",
        //             "low" : "0",
        //             "high" : "0",
        //             "close" : "0",
        //             "quantity" : "0",
        //             "amount" : "0",
        //             "tradeCount" : 0,
        //             "startTime" : 1659606240000,
        //             "closeTime" : 1659692648742,
        //             "displayName" : "KUB/USDD",
        //             "dailyChange" : "0.00",
        //             "ts" : 1659692648742
        //         }
        //     ]
        //
        return this.parseTickers (response, symbols);
    }

    async fetchCurrencies (params = {}) {
        /**
         * @method
         * @name poloniex#fetchCurrencies
         * @description fetches all available currencies on an exchange
         * @param {object} params extra parameters specific to the poloniex api endpoint
         * @returns {object} an associative dictionary of currencies
         */
        const response = await this.publicGetCurrencies (params);
        //
        //     [
        //         {
        //             "1CR": {
        //                 "id": 1,
        //                 "name": "1CRedit",
        //                 "description": "BTC Clone",
        //                 "type": "address",
        //                 "withdrawalFee": "0.01000000",
        //                 "minConf": 10000,
        //                 "depositAddress": null,
        //                 "blockchain": "1CR",
        //                 "delisted": false,
        //                 "tradingState": "NORMAL",
        //                 "walletState": "DISABLED",
        //                 "parentChain": null,
        //                 "isMultiChain": false,
        //                 "isChildChain": false,
        //                 "childChains": []
        //             }
        //         }
        //     ]
        //
        const result = {};
        for (let i = 0; i < response.length; i++) {
            const item = this.safeValue (response, i);
            const ids = Object.keys (item);
            const id = this.safeValue (ids, 0);
            const currency = this.safeValue (item, id);
            const code = this.safeCurrencyCode (id);
            const delisted = this.safeValue (currency, 'delisted');
            const walletState = this.safeString (currency, 'walletState');
            const enabled = walletState === 'ENABLED';
            const listed = !delisted;
            const active = listed && enabled;
            const numericId = this.safeInteger (currency, 'id');
            const fee = this.safeNumber (currency, 'withdrawalFee');
            result[code] = {
                'id': id,
                'numericId': numericId,
                'code': code,
                'info': currency,
                'name': currency['name'],
                'active': active,
                'deposit': undefined,
                'withdraw': undefined,
                'fee': fee,
                'precision': undefined,
                'limits': {
                    'amount': {
                        'min': undefined,
                        'max': undefined,
                    },
                    'withdraw': {
                        'min': fee,
                        'max': undefined,
                    },
                },
            };
        }
        return result;
    }

    async fetchTicker (symbol, params = {}) {
        /**
         * @method
         * @name poloniex#fetchTicker
         * @description fetches a price ticker, a statistical calculation with the information calculated over the past 24 hours for a specific market
         * @param {string} symbol unified symbol of the market to fetch the ticker for
         * @param {object} params extra parameters specific to the poloniex api endpoint
         * @returns {object} a [ticker structure]{@link https://docs.ccxt.com/en/latest/manual.html#ticker-structure}
         */
        await this.loadMarkets ();
        const market = this.market (symbol);
        const request = {
            'symbol': market['id'],
        };
        const response = await this.publicGetMarketsSymbolTicker24h (this.extend (request, params));
        //
        //     {
        //         "symbol" : "BTC_USDT",
        //         "open" : "22814.93",
        //         "low" : "22441.90",
        //         "high" : "23413.00",
        //         "close" : "23148.66",
        //         "quantity" : "71.743706",
        //         "amount" : "1638994.52683452",
        //         "tradeCount" : 3893,
        //         "startTime" : 1659605760000,
        //         "closeTime" : 1659692161077,
        //         "displayName" : "BTC/USDT",
        //         "dailyChange" : "0.0152",
        //         "ts" : 1659692169838
        //     }
        //
        return this.parseTicker (response, market);
    }

    parseTrade (trade, market = undefined) {
        //
        // fetchTrades
        //
        //     [
        //         {
        //             "id" : "60014521",
        //             "price" : "23162.94",
        //             "quantity" : "0.00009",
        //             "amount" : "2.0846646",
        //             "takerSide" : "SELL",
        //             "ts" : 1659684602042,
        //             "createTime" : 1659684602036
        //         }
        //     ]
        //
        // fetchMyTrades
        //
        //     {
        //       globalTradeID: 471030550,
        //       tradeID: '42582',
        //       date: '2020-06-16 09:47:50',
        //       rate: '0.000079980000',
        //       amount: '75215.00000000',
        //       total: '6.01569570',
        //       fee: '0.00095000',
        //       feeDisplay: '0.26636100 TRX (0.07125%)',
        //       orderNumber: '5963454848',
        //       type: 'sell',
        //       category: 'exchange'
        //     }
        //
        // createOrder (taker trades)
        //
        //     {
        //         'amount': '200.00000000',
        //         'date': '2019-12-15 16:04:10',
        //         'rate': '0.00000355',
        //         'total': '0.00071000',
        //         'tradeID': '119871',
        //         'type': 'buy',
        //         'takerAdjustment': '200.00000000'
        //     }
        //
        const id = this.safeString2 (trade, 'globalTradeID', 'tradeID');
        const orderId = this.safeString (trade, 'orderNumber');
        const timestamp = this.safeInteger (trade, 'ts');
        const marketId = this.safeString (trade, 'currencyPair');
        market = this.safeMarket (marketId, market, '_');
        const symbol = market['symbol'];
        const rawSide = this.safeString (trade, 'type');
        let side = rawSide;
        if (rawSide === '1') {
            side = 'buy';
        } else if (rawSide === '2') {
            side = 'sell';
        }
        let fee = undefined;
        const priceString = this.safeString (trade, 'rate');
        const amountString = this.safeString (trade, 'amount');
        const costString = this.safeString (trade, 'total');
        const feeDisplay = this.safeString (trade, 'feeDisplay');
        if (feeDisplay !== undefined) {
            const parts = feeDisplay.split (' ');
            const feeCostString = this.safeString (parts, 0);
            if (feeCostString !== undefined) {
                const feeCurrencyId = this.safeString (parts, 1);
                const feeCurrencyCode = this.safeCurrencyCode (feeCurrencyId);
                let feeRateString = this.safeString (parts, 2);
                if (feeRateString !== undefined) {
                    feeRateString = feeRateString.replace ('(', '');
                    const feeRateParts = feeRateString.split ('%');
                    feeRateString = this.safeString (feeRateParts, 0);
                    feeRateString = Precise.stringDiv (feeRateString, '100');
                }
                fee = {
                    'cost': feeCostString,
                    'currency': feeCurrencyCode,
                    'rate': feeRateString,
                };
            }
        } else {
            const feeCostString = this.safeString (trade, 'fee');
            if (feeCostString !== undefined && market !== undefined) {
                const feeCurrencyCode = (side === 'buy') ? market['base'] : market['quote'];
                const feeBase = (side === 'buy') ? amountString : costString;
                const feeRateString = Precise.stringDiv (feeCostString, feeBase);
                fee = {
                    'cost': feeCostString,
                    'currency': feeCurrencyCode,
                    'rate': feeRateString,
                };
            }
        }
        let takerOrMaker = undefined;
        const takerAdjustment = this.safeNumber (trade, 'takerAdjustment');
        if (takerAdjustment !== undefined) {
            takerOrMaker = 'taker';
        }
        return this.safeTrade ({
            'id': id,
            'info': trade,
            'timestamp': timestamp,
            'datetime': this.iso8601 (timestamp),
            'symbol': symbol,
            'order': orderId,
            'type': 'limit',
            'side': side,
            'takerOrMaker': takerOrMaker,
            'price': priceString,
            'amount': amountString,
            'cost': costString,
            'fee': fee,
        }, market);
    }

    async fetchTrades (symbol, since = undefined, limit = undefined, params = {}) {
        /**
         * @method
         * @name poloniex#fetchTrades
         * @description get the list of most recent trades for a particular symbol
         * @param {string} symbol unified symbol of the market to fetch trades for
         * @param {int|undefined} since timestamp in ms of the earliest trade to fetch
         * @param {int|undefined} limit the maximum amount of trades to fetch
         * @param {object} params extra parameters specific to the poloniex api endpoint
         * @returns {[object]} a list of [trade structures]{@link https://docs.ccxt.com/en/latest/manual.html?#public-trades}
         */
        await this.loadMarkets ();
        const market = this.market (symbol);
        const request = {
            'symbol': market['id'],
        };
        if (limit !== undefined) {
            request['limit'] = limit;
        }
        const trades = await this.publicGetMarketsSymbolTrades (this.extend (request, params));
        //
        //     [
        //         {
        //             "id" : "60014521",
        //             "price" : "23162.94",
        //             "quantity" : "0.00009",
        //             "amount" : "2.0846646",
        //             "takerSide" : "SELL",
        //             "ts" : 1659684602042,
        //             "createTime" : 1659684602036
        //         }
        //     ]
        //
        return this.parseTrades (trades, market, since, limit);
    }

    async fetchMyTrades (symbol = undefined, since = undefined, limit = undefined, params = {}) {
        /**
         * @method
         * @name poloniex#fetchMyTrades
         * @description fetch all trades made by the user
         * @param {string|undefined} symbol unified market symbol
         * @param {int|undefined} since the earliest time in ms to fetch trades for
         * @param {int|undefined} limit the maximum number of trades structures to retrieve
         * @param {object} params extra parameters specific to the poloniex api endpoint
         * @returns {[object]} a list of [trade structures]{@link https://docs.ccxt.com/en/latest/manual.html#trade-structure}
         */
        await this.loadMarkets ();
        let market = undefined;
        if (symbol !== undefined) {
            market = this.market (symbol);
        }
        const pair = market ? market['id'] : 'all';
        const request = { 'currencyPair': pair };
        if (since !== undefined) {
            request['start'] = parseInt (since / 1000);
            request['end'] = this.sum (this.seconds (), 1); // adding 1 is a fix for #3411
        }
        // limit is disabled (does not really work as expected)
        if (limit !== undefined) {
            request['limit'] = parseInt (limit);
        }
        const response = await this.privatePostReturnTradeHistory (this.extend (request, params));
        //
        // specific market (symbol defined)
        //
        //     [
        //         {
        //             globalTradeID: 470912587,
        //             tradeID: '42543',
        //             date: '2020-06-15 17:31:22',
        //             rate: '0.000083840000',
        //             amount: '95237.60321429',
        //             total: '7.98472065',
        //             fee: '0.00095000',
        //             feeDisplay: '0.36137761 TRX (0.07125%)',
        //             orderNumber: '5926344995',
        //             type: 'sell',
        //             category: 'exchange'
        //         },
        //         {
        //             globalTradeID: 470974497,
        //             tradeID: '42560',
        //             date: '2020-06-16 00:41:23',
        //             rate: '0.000078220000',
        //             amount: '1000000.00000000',
        //             total: '78.22000000',
        //             fee: '0.00095000',
        //             feeDisplay: '3.48189819 TRX (0.07125%)',
        //             orderNumber: '5945490830',
        //             type: 'sell',
        //             category: 'exchange'
        //         }
        //     ]
        //
        // all markets (symbol undefined)
        //
        //     {
        //        BTC_GNT: [{
        //             globalTradeID: 470839947,
        //             tradeID: '4322347',
        //             date: '2020-06-15 12:25:24',
        //             rate: '0.000005810000',
        //             amount: '1702.04429303',
        //             total: '0.00988887',
        //             fee: '0.00095000',
        //             feeDisplay: '4.18235294 TRX (0.07125%)',
        //             orderNumber: '102290272520',
        //             type: 'buy',
        //             category: 'exchange'
        //     }, {
        //             globalTradeID: 470895902,
        //             tradeID: '4322413',
        //             date: '2020-06-15 16:19:00',
        //             rate: '0.000005980000',
        //             amount: '18.66879219',
        //             total: '0.00011163',
        //             fee: '0.00095000',
        //             feeDisplay: '0.04733727 TRX (0.07125%)',
        //             orderNumber: '102298304480',
        //             type: 'buy',
        //             category: 'exchange'
        //         }],
        //     }
        //
        let result = [];
        if (market !== undefined) {
            result = this.parseTrades (response, market);
        } else {
            if (response) {
                const ids = Object.keys (response);
                for (let i = 0; i < ids.length; i++) {
                    const id = ids[i];
                    let market = undefined;
                    if (id in this.markets_by_id) {
                        market = this.markets_by_id[id];
                        const trades = this.parseTrades (response[id], market);
                        for (let j = 0; j < trades.length; j++) {
                            result.push (trades[j]);
                        }
                    } else {
                        const [ quoteId, baseId ] = id.split ('_');
                        const base = this.safeCurrencyCode (baseId);
                        const quote = this.safeCurrencyCode (quoteId);
                        const symbol = base + '/' + quote;
                        const trades = response[id];
                        for (let j = 0; j < trades.length; j++) {
                            const market = {
                                'symbol': symbol,
                                'base': base,
                                'quote': quote,
                            };
                            result.push (this.parseTrade (trades[j], market));
                        }
                    }
                }
            }
        }
        return this.filterBySinceLimit (result, since, limit);
    }

    parseOrderStatus (status) {
        const statuses = {
            'Open': 'open',
            'Partially filled': 'open',
        };
        return this.safeString (statuses, status, status);
    }

    parseOrder (order, market = undefined) {
        //
        // fetchOpenOrder
        //
        //     {
        //         status: 'Open',
        //         rate: '0.40000000',
        //         amount: '1.00000000',
        //         currencyPair: 'BTC_ETH',
        //         date: '2018-10-17 17:04:50',
        //         total: '0.40000000',
        //         type: 'buy',
        //         startingAmount: '1.00000',
        //     }
        //
        // fetchOpenOrders
        //
        //     {
        //         orderNumber: '514514894224',
        //         type: 'buy',
        //         rate: '0.00001000',
        //         startingAmount: '100.00000000',
        //         amount: '100.00000000',
        //         total: '0.00100000',
        //         date: '2018-10-23 17:38:53',
        //         margin: 0,
        //     }
        //
        // createOrder
        //
        //     {
        //         'orderNumber': '9805453960',
        //         'resultingTrades': [
        //             {
        //                 'amount': '200.00000000',
        //                 'date': '2019-12-15 16:04:10',
        //                 'rate': '0.00000355',
        //                 'total': '0.00071000',
        //                 'tradeID': '119871',
        //                 'type': 'buy',
        //                 'takerAdjustment': '200.00000000',
        //             },
        //         ],
        //         'fee': '0.00000000',
        //         'clientOrderId': '12345',
        //         'currencyPair': 'BTC_MANA',
        //         // 'resultingTrades' in editOrder
        //         'resultingTrades': {
        //             'BTC_MANA': [],
        //          }
        //     }
        //
        let timestamp = this.safeInteger (order, 'timestamp');
        if (timestamp === undefined) {
            timestamp = this.parse8601 (this.safeString (order, 'date'));
        }
        const marketId = this.safeString (order, 'currencyPair');
        market = this.safeMarket (marketId, market, '_');
        const symbol = market['symbol'];
        let resultingTrades = this.safeValue (order, 'resultingTrades');
        if (!Array.isArray (resultingTrades)) {
            resultingTrades = this.safeValue (resultingTrades, this.safeString (market, 'id', marketId));
        }
        const price = this.safeString2 (order, 'price', 'rate');
        const remaining = this.safeString (order, 'amount');
        const amount = this.safeString (order, 'startingAmount');
        const status = this.parseOrderStatus (this.safeString (order, 'status'));
        const side = this.safeString (order, 'type');
        const id = this.safeString (order, 'orderNumber');
        let fee = undefined;
        const feeCurrency = this.safeString (order, 'tokenFeeCurrency');
        let feeCost = undefined;
        let feeCurrencyCode = undefined;
        const rate = this.safeString (order, 'fee');
        if (feeCurrency === undefined) {
            feeCurrencyCode = (side === 'buy') ? market['base'] : market['quote'];
        } else {
            // poloniex accepts a 30% discount to pay fees in TRX
            feeCurrencyCode = this.safeCurrencyCode (feeCurrency);
            feeCost = this.safeString (order, 'tokenFee');
        }
        if (feeCost !== undefined) {
            fee = {
                'rate': rate,
                'cost': feeCost,
                'currency': feeCurrencyCode,
            };
        }
        const clientOrderId = this.safeString (order, 'clientOrderId');
        return this.safeOrder ({
            'info': order,
            'id': id,
            'clientOrderId': clientOrderId,
            'timestamp': timestamp,
            'datetime': this.iso8601 (timestamp),
            'lastTradeTimestamp': undefined,
            'status': status,
            'symbol': symbol,
            'type': 'limit',
            'timeInForce': undefined,
            'postOnly': undefined,
            'side': side,
            'price': price,
            'stopPrice': undefined,
            'cost': undefined,
            'average': undefined,
            'amount': amount,
            'filled': undefined,
            'remaining': remaining,
            'trades': resultingTrades,
            'fee': fee,
        }, market);
    }

    parseOpenOrders (orders, market, result) {
        for (let i = 0; i < orders.length; i++) {
            const order = orders[i];
            const extended = this.extend (order, {
                'status': 'open',
                'type': 'limit',
                'side': order['type'],
                'price': order['rate'],
            });
            result.push (this.parseOrder (extended, market));
        }
        return result;
    }

    async fetchOpenOrders (symbol = undefined, since = undefined, limit = undefined, params = {}) {
        /**
         * @method
         * @name poloniex#fetchOpenOrders
         * @description fetch all unfilled currently open orders
         * @param {string|undefined} symbol unified market symbol
         * @param {int|undefined} since the earliest time in ms to fetch open orders for
         * @param {int|undefined} limit the maximum number of  open orders structures to retrieve
         * @param {object} params extra parameters specific to the poloniex api endpoint
         * @returns {[object]} a list of [order structures]{@link https://docs.ccxt.com/en/latest/manual.html#order-structure}
         */
        await this.loadMarkets ();
        let market = undefined;
        if (symbol !== undefined) {
            market = this.market (symbol);
        }
        const pair = market ? market['id'] : 'all';
        const request = {
            'currencyPair': pair,
        };
        const response = await this.privatePostReturnOpenOrders (this.extend (request, params));
        const extension = { 'status': 'open' };
        if (market === undefined) {
            const marketIds = Object.keys (response);
            let openOrders = [];
            for (let i = 0; i < marketIds.length; i++) {
                const marketId = marketIds[i];
                const orders = response[marketId];
                const m = this.markets_by_id[marketId];
                openOrders = this.arrayConcat (openOrders, this.parseOrders (orders, m, undefined, undefined, extension));
            }
            return this.filterBySinceLimit (openOrders, since, limit);
        } else {
            return this.parseOrders (response, market, since, limit, extension);
        }
    }

    async createOrder (symbol, type, side, amount, price = undefined, params = {}) {
        /**
         * @method
         * @name poloniex#createOrder
         * @description create a trade order
         * @param {string} symbol unified symbol of the market to create an order in
         * @param {string} type 'market' or 'limit'
         * @param {string} side 'buy' or 'sell'
         * @param {float} amount how much of currency you want to trade in units of base currency
         * @param {float|undefined} price the price at which the order is to be fullfilled, in units of the quote currency, ignored in market orders
         * @param {object} params extra parameters specific to the poloniex api endpoint
         * @returns {object} an [order structure]{@link https://docs.ccxt.com/en/latest/manual.html#order-structure}
         */
        if (type === 'market') {
            throw new ExchangeError (this.id + ' createOrder() does not accept market orders');
        }
        await this.loadMarkets ();
        const method = 'privatePost' + this.capitalize (side);
        const market = this.market (symbol);
        amount = this.amountToPrecision (symbol, amount);
        const request = {
            'currencyPair': market['id'],
            'rate': this.priceToPrecision (symbol, price),
            'amount': amount,
        };
        const clientOrderId = this.safeString (params, 'clientOrderId');
        if (clientOrderId !== undefined) {
            request['clientOrderId'] = clientOrderId;
            params = this.omit (params, 'clientOrderId');
        }
        // remember the timestamp before issuing the request
        let response = await this[method] (this.extend (request, params));
        //
        //     {
        //         'orderNumber': '9805453960',
        //         'resultingTrades': [
        //             {
        //                 'amount': '200.00000000',
        //                 'date': '2019-12-15 16:04:10',
        //                 'rate': '0.00000355',
        //                 'total': '0.00071000',
        //                 'tradeID': '119871',
        //                 'type': 'buy',
        //                 'takerAdjustment': '200.00000000',
        //             },
        //         ],
        //         'fee': '0.00000000',
        //         'currencyPair': 'BTC_MANA',
        //     }
        //
        response = this.extend (response, {
            'type': side,
        });
        return this.parseOrder (response, market);
    }

    async editOrder (id, symbol, type, side, amount, price = undefined, params = {}) {
        await this.loadMarkets ();
        price = parseFloat (price);
        const request = {
            'orderNumber': id,
            'rate': this.priceToPrecision (symbol, price),
        };
        if (amount !== undefined) {
            request['amount'] = this.amountToPrecision (symbol, amount);
        }
        const response = await this.privatePostMoveOrder (this.extend (request, params));
        return this.parseOrder (response);
    }

    async cancelOrder (id, symbol = undefined, params = {}) {
        /**
         * @method
         * @name poloniex#cancelOrder
         * @description cancels an open order
         * @param {string} id order id
         * @param {string|undefined} symbol unified symbol of the market the order was made in
         * @param {object} params extra parameters specific to the poloniex api endpoint
         * @returns {object} An [order structure]{@link https://docs.ccxt.com/en/latest/manual.html#order-structure}
         */
        await this.loadMarkets ();
        const request = {};
        const clientOrderId = this.safeValue (params, 'clientOrderId');
        if (clientOrderId === undefined) {
            request['orderNumber'] = id;
        } else {
            request['clientOrderId'] = clientOrderId;
        }
        params = this.omit (params, 'clientOrderId');
        return await this.privatePostCancelOrder (this.extend (request, params));
    }

    async cancelAllOrders (symbol = undefined, params = {}) {
        /**
         * @method
         * @name poloniex#cancelAllOrders
         * @description cancel all open orders
         * @param {string|undefined} symbol unified market symbol, only orders in the market of this symbol are cancelled when symbol is not undefined
         * @param {object} params extra parameters specific to the poloniex api endpoint
         * @returns {[object]} a list of [order structures]{@link https://docs.ccxt.com/en/latest/manual.html#order-structure}
         */
        await this.loadMarkets ();
        const request = {};
        let market = undefined;
        if (symbol !== undefined) {
            market = this.market (symbol);
            request['currencyPair'] = market['id'];
        }
        const response = await this.privatePostCancelAllOrders (this.extend (request, params));
        //
        //     {
        //         "success": 1,
        //         "message": "Orders canceled",
        //         "orderNumbers": [
        //             503749,
        //             888321,
        //             7315825,
        //             7316824
        //         ]
        //     }
        //
        return response;
    }

    async fetchOpenOrder (id, symbol = undefined, params = {}) {
        /**
         * @method
         * @name poloniex#fetchOpenOrder
         * @description fetch an open order by it's id
         * @param {string} id order id
         * @param {string|undefined} symbol unified market symbol, default is undefined
         * @param {object} params extra parameters specific to the poloniex api endpoint
         * @returns {object} an [order structure]{@link https://docs.ccxt.com/en/latest/manual.html#order-structure}
         */
        await this.loadMarkets ();
        id = id.toString ();
        const request = {
            'orderNumber': id,
        };
        const response = await this.privatePostReturnOrderStatus (this.extend (request, params));
        //
        //     {
        //         success: 1,
        //         result: {
        //             '6071071': {
        //                 status: 'Open',
        //                 rate: '0.40000000',
        //                 amount: '1.00000000',
        //                 currencyPair: 'BTC_ETH',
        //                 date: '2018-10-17 17:04:50',
        //                 total: '0.40000000',
        //                 type: 'buy',
        //                 startingAmount: '1.00000',
        //             },
        //         },
        //     }
        //
        const result = this.safeValue (response['result'], id);
        if (result === undefined) {
            throw new OrderNotFound (this.id + ' order id ' + id + ' not found');
        }
        return this.extend (this.parseOrder (result), {
            'id': id,
        });
    }

    async fetchClosedOrder (id, symbol = undefined, params = {}) {
        /**
         * @method
         * @name poloniex#fetchClosedOrder
         * @description fetch an open order by it's id
         * @param {string} id order id
         * @param {string|undefined} symbol not used by poloniex fetchClosedOrder
         * @param {object} params extra parameters specific to the poloniex api endpoint
         * @returns {object} an [order structure]{@link https://docs.ccxt.com/en/latest/manual.html#order-structure}
         */
        await this.loadMarkets ();
        const request = {
            'orderNumber': id,
        };
        const response = await this.privatePostReturnOrderTrades (this.extend (request, params));
        //
        //     [
        //         {
        //             "globalTradeID":570264000,
        //             "tradeID":8026283,
        //             "currencyPair":"USDT_LTC",
        //             "type":"sell",
        //             "rate":"144.73833409",
        //             "amount":"0.18334460",
        //             "total":"26.53699196",
        //             "fee":"0.00155000",
        //             "date":"2021-07-04 15:16:20"
        //         }
        //     ]
        //
        const firstTrade = this.safeValue (response, 0);
        if (firstTrade === undefined) {
            throw new OrderNotFound (this.id + ' order id ' + id + ' not found');
        }
        id = this.safeValue (firstTrade, 'globalTradeID', id);
        return this.safeOrder ({
            'info': response,
            'id': id,
            'clientOrderId': this.safeValue (firstTrade, 'clientOrderId'),
            'timestamp': undefined,
            'datetime': undefined,
            'lastTradeTimestamp': undefined,
            'status': 'closed',
            'symbol': undefined,
            'type': undefined,
            'timeInForce': undefined,
            'postOnly': undefined,
            'side': undefined,
            'price': undefined,
            'stopPrice': undefined,
            'cost': undefined,
            'average': undefined,
            'amount': undefined,
            'filled': undefined,
            'remaining': undefined,
            'trades': response,
            'fee': undefined,
        });
    }

    async fetchOrderStatus (id, symbol = undefined, params = {}) {
        await this.loadMarkets ();
        const orders = await this.fetchOpenOrders (symbol, undefined, undefined, params);
        const indexed = this.indexBy (orders, 'id');
        return (id in indexed) ? 'open' : 'closed';
    }

    async fetchOrderTrades (id, symbol = undefined, since = undefined, limit = undefined, params = {}) {
        /**
         * @method
         * @name poloniex#fetchOrderTrades
         * @description fetch all the trades made from a single order
         * @param {string} id order id
         * @param {string|undefined} symbol unified market symbol
         * @param {int|undefined} since the earliest time in ms to fetch trades for
         * @param {int|undefined} limit the maximum number of trades to retrieve
         * @param {object} params extra parameters specific to the poloniex api endpoint
         * @returns {[object]} a list of [trade structures]{@link https://docs.ccxt.com/en/latest/manual.html#trade-structure}
         */
        await this.loadMarkets ();
        const request = {
            'orderNumber': id,
        };
        const trades = await this.privatePostReturnOrderTrades (this.extend (request, params));
        return this.parseTrades (trades);
    }

    parseBalance (response) {
        const result = {
            'info': response,
            'timestamp': undefined,
            'datetime': undefined,
        };
        for (let i = 0; i < response.length; i++) {
            const account = this.safeValue (response, i, {});
            const balances = this.safeValue (account, 'balances');
            for (let j = 0; j < balances.length; j++) {
                const balance = this.safeValue (balances, j);
                const currencyId = this.safeString (balance, 'currency');
                const code = this.safeCurrencyCode (currencyId);
                const newAccount = this.account ();
                newAccount['free'] = this.safeString (balance, 'available');
                newAccount['used'] = this.safeString (balance, 'hold');
                result[code] = newAccount;
            }
        }
        return this.safeBalance (result);
    }

    async fetchBalance (params = {}) {
        /**
         * @method
         * @name poloniex#fetchBalance
         * @description query for balance and get the amount of funds available for trading or funds locked in orders
         * @param {object} params extra parameters specific to the poloniex api endpoint
         * @returns {object} a [balance structure]{@link https://docs.ccxt.com/en/latest/manual.html?#balance-structure}
         */
        await this.loadMarkets ();
        const request = {
            'account': 'all',
        };
        const response = await this.privateGetAccountsBalances (this.extend (request, params));
        //
        //     [
        //         {
        //             "accountId" : "7xxxxxxxxxx8",
        //             "accountType" : "SPOT",
        //             "balances" : [
        //                 {
        //                     "currencyId" : "214",
        //                     "currency" : "USDT",
        //                     "available" : "2.00",
        //                     "hold" : "0.00"
        //                 }
        //             ]
        //         }
        //     ]
        //
        return this.parseBalance (response);
    }

    async fetchTradingFees (params = {}) {
        /**
         * @method
         * @name poloniex#fetchTradingFees
         * @description fetch the trading fees for multiple markets
         * @param {object} params extra parameters specific to the poloniex api endpoint
         * @returns {object} a dictionary of [fee structures]{@link https://docs.ccxt.com/en/latest/manual.html#fee-structure} indexed by market symbols
         */
        await this.loadMarkets ();
        const response = await this.privateGetFeeinfo (params);
        //
        //     {
        //         "trxDiscount" : false,
        //         "makerRate" : "0.00145",
        //         "takerRate" : "0.00155",
        //         "volume30D" : "0.00"
        //     }
        //
        const result = {};
        for (let i = 0; i < this.symbols.length; i++) {
            const symbol = this.symbols[i];
            result[symbol] = {
                'info': response,
                'symbol': symbol,
                'maker': this.safeNumber (response, 'makerRate'),
                'taker': this.safeNumber (response, 'takerRate'),
                'percentage': true,
                'tierBased': true,
            };
        }
        return result;
    }

    async fetchOrderBook (symbol, limit = undefined, params = {}) {
        /**
         * @method
         * @name poloniex#fetchOrderBook
         * @description fetches information on open orders with bid (buy) and ask (sell) prices, volumes and other data
         * @param {string} symbol unified symbol of the market to fetch the order book for
         * @param {int|undefined} limit the maximum amount of order book entries to return
         * @param {object} params extra parameters specific to the poloniex api endpoint
         * @returns {object} A dictionary of [order book structures]{@link https://docs.ccxt.com/en/latest/manual.html#order-book-structure} indexed by market symbols
         */
        await this.loadMarkets ();
        const market = this.market (symbol);
        const request = {
            'symbol': market['id'],
        };
        if (limit !== undefined) {
            request['limit'] = limit; // The default value of limit is 10. Valid limit values are: 5, 10, 20, 50, 100, 150.
        }
        const response = await this.publicGetMarketsSymbolOrderBook (this.extend (request, params));
        //
        //     {
        //         "time" : 1659695219507,
        //         "scale" : "-1",
        //         "asks" : [ "23139.82", "0.317981", "23140", "0.191091", "23170.06", "0.01", "23200", "0.107758", "23230.55", "0.01", "23247.2", "0.154", "23254", "0.005121", "23263", "0.038", "23285.4", "0.308", "23300", "0.108896" ],
        //         "bids" : [ "23139.74", "0.432092", "23139.73", "0.198592", "23123.21", "0.000886", "23123.2", "0.308", "23121.4", "0.154", "23105", "0.000789", "23100", "0.078175", "23069.1", "0.026276", "23068.83", "0.001329", "23051", "0.000048" ],
        //         "ts" : 1659695219513
        //     }
        //
        // TODO: fix this
        const timestamp = this.safeInteger (response, 'time');
        const orderbook = this.parseOrderBook (response, market['symbol'], timestamp, 'bids', 'asks');
        orderbook['nonce'] = this.safeInteger (response, 'seq');
        return orderbook;
    }

    async createDepositAddress (code, params = {}) {
        /**
         * @method
         * @name poloniex#createDepositAddress
         * @description create a currency deposit address
         * @param {string} code unified currency code of the currency for the deposit address
         * @param {object} params extra parameters specific to the poloniex api endpoint
         * @returns {object} an [address structure]{@link https://docs.ccxt.com/en/latest/manual.html#address-structure}
         */
        await this.loadMarkets ();
        // USDT, USDTETH, USDTTRON
        let currencyId = undefined;
        let currency = undefined;
        if (code in this.currencies) {
            currency = this.currency (code);
            currencyId = currency['id'];
        } else {
            currencyId = code;
        }
        const request = {
            'currency': currencyId,
        };
        const response = await this.privatePostWalletsAddress (this.extend (request, params));
        //
        //     {
        //         "address" : "0xfxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxf"
        //     }
        //
        let address = this.safeString (response, 'address');
        let tag = undefined;
        this.checkAddress (address);
        if (currency !== undefined) {
            const depositAddress = this.safeString (currency['info'], 'depositAddress');
            if (depositAddress !== undefined) {
                tag = address;
                address = depositAddress;
            }
        }
        return {
            'currency': code,
            'address': address,
            'tag': tag,
            'info': response,
        };
    }

    async fetchDepositAddress (code, params = {}) {
        /**
         * @method
         * @name poloniex#fetchDepositAddress
         * @description fetch the deposit address for a currency associated with this account
         * @param {string} code unified currency code
         * @param {object} params extra parameters specific to the poloniex api endpoint
         * @returns {object} an [address structure]{@link https://docs.ccxt.com/en/latest/manual.html#address-structure}
         */
        await this.loadMarkets ();
        // USDT, USDTETH, USDTTRON
        let currencyId = undefined;
        let currency = undefined;
        if (code in this.currencies) {
            currency = this.currency (code);
            currencyId = currency['id'];
        } else {
            currencyId = code;
        }
        const request = {
            'currency': currencyId,
        };
        const response = await this.privateGetWalletsAddresses (this.extend (request, params));
        //
        //     {
        //         "USDTTRON" : "Txxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxp"
        //     }
        //
        let address = this.safeString (response, currencyId);
        let tag = undefined;
        this.checkAddress (address);
        if (currency !== undefined) {
            const depositAddress = this.safeString (currency['info'], 'depositAddress');
            if (depositAddress !== undefined) {
                tag = address;
                address = depositAddress;
            }
        }
        return {
            'currency': code,
            'address': address,
            'tag': tag,
            'network': undefined,
            'info': response,
        };
    }

    async transfer (code, amount, fromAccount, toAccount, params = {}) {
        /**
         * @method
         * @name poloniex#transfer
         * @description transfer currency internally between wallets on the same account
         * @param {string} code unified currency code
         * @param {float} amount amount to transfer
         * @param {string} fromAccount account to transfer from
         * @param {string} toAccount account to transfer to
         * @param {object} params extra parameters specific to the poloniex api endpoint
         * @returns {object} a [transfer structure]{@link https://docs.ccxt.com/en/latest/manual.html#transfer-structure}
         */
        await this.loadMarkets ();
        const currency = this.currency (code);
        amount = this.currencyToPrecision (code, amount);
        const accountsByType = this.safeValue (this.options, 'accountsByType', {});
        const fromId = this.safeString (accountsByType, fromAccount, fromAccount);
        const toId = this.safeString (accountsByType, toAccount, fromAccount);
        const request = {
            'amount': amount,
            'currency': currency['id'],
            'fromAccount': fromId,
            'toAccount': toId,
        };
        const response = await this.privatePostTransferBalance (this.extend (request, params));
        //
        //    {
        //        success: '1',
        //        message: 'Transferred 1.00000000 USDT from exchange to lending account.'
        //    }
        //
        return this.parseTransfer (response, currency);
    }

    parseTransferStatus (status) {
        const statuses = {
            '1': 'ok',
        };
        return this.safeString (statuses, status, status);
    }

    parseTransfer (transfer, currency = undefined) {
        //
        //    {
        //        success: '1',
        //        message: 'Transferred 1.00000000 USDT from exchange to lending account.'
        //    }
        //
        const message = this.safeString (transfer, 'message');
        const words = message.split (' ');
        const amount = this.safeNumber (words, 1);
        const currencyId = this.safeString (words, 2);
        const fromAccountId = this.safeString (words, 4);
        const toAccountId = this.safeString (words, 6);
        const accountsById = this.safeValue (this.options, 'accountsById', {});
        return {
            'info': transfer,
            'id': undefined,
            'timestamp': undefined,
            'datetime': undefined,
            'currency': this.safeCurrencyCode (currencyId, currency),
            'amount': amount,
            'fromAccount': this.safeString (accountsById, fromAccountId),
            'toAccount': this.safeString (accountsById, toAccountId),
            'status': this.parseOrderStatus (this.safeString (transfer, 'success', 'failed')),
        };
    }

    async withdraw (code, amount, address, tag = undefined, params = {}) {
        /**
         * @method
         * @name poloniex#withdraw
         * @description make a withdrawal
         * @param {string} code unified currency code
         * @param {float} amount the amount to withdraw
         * @param {string} address the address to withdraw to
         * @param {string|undefined} tag
         * @param {object} params extra parameters specific to the poloniex api endpoint
         * @returns {object} a [transaction structure]{@link https://docs.ccxt.com/en/latest/manual.html#transaction-structure}
         */
        [ tag, params ] = this.handleWithdrawTagAndParams (tag, params);
        this.checkAddress (address);
        await this.loadMarkets ();
        const currency = this.currency (code);
        const request = {
            'currency': currency['id'],
            'amount': amount,
            'address': address,
        };
        if (tag !== undefined) {
            request['paymentId'] = tag;
        }
        const networks = this.safeValue (this.options, 'networks', {});
        let network = this.safeStringUpper (params, 'network'); // this line allows the user to specify either ERC20 or ETH
        network = this.safeString (networks, network, network); // handle ERC20>ETH alias
        if (network !== undefined) {
            request['currency'] += network; // when network the currency need to be changed to currency+network https://docs.poloniex.com/#withdraw on MultiChain Currencies section
            params = this.omit (params, 'network');
        }
        const response = await this.privatePostWalletsWithdraw (this.extend (request, params));
        //
        //     {
        //         response: 'Withdrew 1.00000000 USDT.',
        //         email2FA: false,
        //         withdrawalNumber: 13449869
        //     }
        //
        return this.parseTransaction (response, currency);
    }

    async fetchTransactionsHelper (code = undefined, since = undefined, limit = undefined, params = {}) {
        await this.loadMarkets ();
        const year = 31104000; // 60 * 60 * 24 * 30 * 12 = one year of history, why not
        const now = this.seconds ();
        const start = (since !== undefined) ? parseInt (since / 1000) : now - 10 * year;
        const request = {
            'start': start, // UNIX timestamp, required
            'end': now, // UNIX timestamp, required
        };
        if (limit !== undefined) {
            request['limit'] = limit;
        }
        const response = await this.privateGetWalletsActivity (this.extend (request, params));
        //
        //     {
        //         "adjustments":[],
        //         "deposits":[
        //             {
        //                 currency: "BTC",
        //                 address: "1MEtiqJWru53FhhHrfJPPvd2tC3TPDVcmW",
        //                 amount: "0.01063000",
        //                 confirmations:  1,
        //                 txid: "952b0e1888d6d491591facc0d37b5ebec540ac1efb241fdbc22bcc20d1822fb6",
        //                 timestamp:  1507916888,
        //                 status: "COMPLETE"
        //             },
        //             {
        //                 currency: "ETH",
        //                 address: "0x20108ba20b65c04d82909e91df06618107460197",
        //                 amount: "4.00000000",
        //                 confirmations: 38,
        //                 txid: "0x4be260073491fe63935e9e0da42bd71138fdeb803732f41501015a2d46eb479d",
        //                 timestamp: 1525060430,
        //                 status: "COMPLETE"
        //             }
        //         ],
        //         "withdrawals":[
        //             {
        //                 "withdrawalNumber":13449869,
        //                 "currency":"USDTTRON", // not documented in API docs, see commonCurrencies in describe()
        //                 "address":"TXGaqPW23JdRWhsVwS2mRsGsegbdnAd3Rw",
        //                 "amount":"1.00000000",
        //                 "fee":"0.00000000",
        //                 "timestamp":1591573420,
        //                 "status":"COMPLETE: dadf427224b3d44b38a2c13caa4395e4666152556ca0b2f67dbd86a95655150f",
        //                 "ipAddress":"x.x.x.x",
        //                 "canCancel":0,
        //                 "canResendEmail":0,
        //                 "paymentID":null,
        //                 "scope":"crypto"
        //             },
        //             {
        //                 withdrawalNumber: 8224394,
        //                 currency: "EMC2",
        //                 address: "EYEKyCrqTNmVCpdDV8w49XvSKRP9N3EUyF",
        //                 amount: "63.10796020",
        //                 fee: "0.01000000",
        //                 timestamp: 1510819838,
        //                 status: "COMPLETE: d37354f9d02cb24d98c8c4fc17aa42f475530b5727effdf668ee5a43ce667fd6",
        //                 ipAddress: "x.x.x.x"
        //             },
        //             {
        //                 withdrawalNumber: 9290444,
        //                 currency: "ETH",
        //                 address: "0x191015ff2e75261d50433fbd05bd57e942336149",
        //                 amount: "0.15500000",
        //                 fee: "0.00500000",
        //                 timestamp: 1514099289,
        //                 status: "COMPLETE: 0x12d444493b4bca668992021fd9e54b5292b8e71d9927af1f076f554e4bea5b2d",
        //                 ipAddress: "x.x.x.x"
        //             },
        //             {
        //                 withdrawalNumber: 11518260,
        //                 currency: "BTC",
        //                 address: "8JoDXAmE1GY2LRK8jD1gmAmgRPq54kXJ4t",
        //                 amount: "0.20000000",
        //                 fee: "0.00050000",
        //                 timestamp: 1527918155,
        //                 status: "COMPLETE: 1864f4ebb277d90b0b1ff53259b36b97fa1990edc7ad2be47c5e0ab41916b5ff",
        //                 ipAddress: "x.x.x.x"
        //             }
        //         ]
        //     }
        //
        return response;
    }

    async fetchTransactions (code = undefined, since = undefined, limit = undefined, params = {}) {
        /**
         * @method
         * @name poloniex#fetchTransactions
         * @description fetch history of deposits and withdrawals
         * @param {string|undefined} code unified currency code for the currency of the transactions, default is undefined
         * @param {int|undefined} since timestamp in ms of the earliest transaction, default is undefined
         * @param {int|undefined} limit max number of transactions to return, default is undefined
         * @param {object} params extra parameters specific to the poloniex api endpoint
         * @returns {object} a list of [transaction structure]{@link https://docs.ccxt.com/en/latest/manual.html#transaction-structure}
         */
        await this.loadMarkets ();
        const response = await this.fetchTransactionsHelper (code, since, limit, params);
        let currency = undefined;
        if (code !== undefined) {
            currency = this.currency (code);
        }
        const withdrawals = this.safeValue (response, 'withdrawals', []);
        const deposits = this.safeValue (response, 'deposits', []);
        const withdrawalTransactions = this.parseTransactions (withdrawals, currency, since, limit);
        const depositTransactions = this.parseTransactions (deposits, currency, since, limit);
        const transactions = this.arrayConcat (depositTransactions, withdrawalTransactions);
        return this.filterByCurrencySinceLimit (this.sortBy (transactions, 'timestamp'), code, since, limit);
    }

    async fetchWithdrawals (code = undefined, since = undefined, limit = undefined, params = {}) {
        /**
         * @method
         * @name poloniex#fetchWithdrawals
         * @description fetch all withdrawals made from an account
         * @param {string|undefined} code unified currency code
         * @param {int|undefined} since the earliest time in ms to fetch withdrawals for
         * @param {int|undefined} limit the maximum number of withdrawals structures to retrieve
         * @param {object} params extra parameters specific to the poloniex api endpoint
         * @returns {[object]} a list of [transaction structures]{@link https://docs.ccxt.com/en/latest/manual.html#transaction-structure}
         */
        const response = await this.fetchTransactionsHelper (code, since, limit, params);
        let currency = undefined;
        if (code !== undefined) {
            currency = this.currency (code);
        }
        const withdrawals = this.safeValue (response, 'withdrawals', []);
        const transactions = this.parseTransactions (withdrawals, currency, since, limit);
        return this.filterByCurrencySinceLimit (transactions, code, since, limit);
    }

    async fetchDeposits (code = undefined, since = undefined, limit = undefined, params = {}) {
        /**
         * @method
         * @name poloniex#fetchDeposits
         * @description fetch all deposits made to an account
         * @param {string|undefined} code unified currency code
         * @param {int|undefined} since the earliest time in ms to fetch deposits for
         * @param {int|undefined} limit the maximum number of deposits structures to retrieve
         * @param {object} params extra parameters specific to the poloniex api endpoint
         * @returns {[object]} a list of [transaction structures]{@link https://docs.ccxt.com/en/latest/manual.html#transaction-structure}
         */
        const response = await this.fetchTransactionsHelper (code, since, limit, params);
        let currency = undefined;
        if (code !== undefined) {
            currency = this.currency (code);
        }
        const deposits = this.safeValue (response, 'deposits', []);
        const transactions = this.parseTransactions (deposits, currency, since, limit);
        return this.filterByCurrencySinceLimit (transactions, code, since, limit);
    }

    parseTransactionStatus (status) {
        const statuses = {
            'COMPLETE': 'ok',
            'AWAITING APPROVAL': 'pending',
            'PENDING': 'pending',
            'PROCESSING': 'pending',
            'COMPLETE ERROR': 'failed',
        };
        return this.safeString (statuses, status, status);
    }

    parseTransaction (transaction, currency = undefined) {
        //
        // deposits
        //
        //     {
        //         "txid": "f49d489616911db44b740612d19464521179c76ebe9021af85b6de1e2f8d68cd",
        //         "type": "deposit",
        //         "amount": "49798.01987021",
        //         "status": "COMPLETE",
        //         "address": "DJVJZ58tJC8UeUv9Tqcdtn6uhWobouxFLT",
        //         "currency": "DOGE",
        //         "timestamp": 1524321838,
        //         "confirmations": 3371,
        //         "depositNumber": 134587098
        //     }
        //
        // withdrawals
        //
        //     {
        //         "fee": "0.00050000",
        //         "type": "withdrawal",
        //         "amount": "0.40234387",
        //         "status": "COMPLETE: fbabb2bf7d81c076f396f3441166d5f60f6cea5fdfe69e02adcc3b27af8c2746",
        //         "address": "1EdAqY4cqHoJGAgNfUFER7yZpg1Jc9DUa3",
        //         "currency": "BTC",
        //         "canCancel": 0,
        //         "ipAddress": "x.x.x.x",
        //         "paymentID": null,
        //         "timestamp": 1523834337,
        //         "canResendEmail": 0,
        //         "withdrawalNumber": 11162900
        //     }
        //
        // withdraw
        //
        //     {
        //         response: 'Withdrew 1.00000000 USDT.',
        //         email2FA: false,
        //         withdrawalNumber: 13449869
        //     }
        //
        const timestamp = this.safeTimestamp (transaction, 'timestamp');
        const currencyId = this.safeString (transaction, 'currency');
        const code = this.safeCurrencyCode (currencyId);
        let status = this.safeString (transaction, 'status', 'pending');
        let txid = this.safeString (transaction, 'txid');
        if (status !== undefined) {
            const parts = status.split (': ');
            const numParts = parts.length;
            status = parts[0];
            if ((numParts > 1) && (txid === undefined)) {
                txid = parts[1];
            }
            status = this.parseTransactionStatus (status);
        }
        const defaultType = ('withdrawalNumber' in transaction) ? 'withdrawal' : 'deposit';
        const type = this.safeString (transaction, 'type', defaultType);
        const id = this.safeString2 (transaction, 'withdrawalNumber', 'depositNumber');
        let amount = this.safeNumber (transaction, 'amount');
        const address = this.safeString (transaction, 'address');
        const tag = this.safeString (transaction, 'paymentID');
        // according to https://poloniex.com/fees/
        const feeCost = this.safeNumber (transaction, 'fee', 0);
        if (type === 'withdrawal') {
            // poloniex withdrawal amount includes the fee
            amount = amount - feeCost;
        }
        return {
            'info': transaction,
            'id': id,
            'currency': code,
            'amount': amount,
            'network': undefined,
            'address': address,
            'addressTo': undefined,
            'addressFrom': undefined,
            'tag': tag,
            'tagTo': undefined,
            'tagFrom': undefined,
            'status': status,
            'type': type,
            'updated': undefined,
            'txid': txid,
            'timestamp': timestamp,
            'datetime': this.iso8601 (timestamp),
            'fee': {
                'currency': code,
                'cost': feeCost,
            },
        };
    }

    async fetchPosition (symbol, params = {}) {
        /**
         * @method
         * @name poloniex#fetchPosition
         * @description fetch data on a single open contract trade position
         * @param {string} symbol unified market symbol of the market the position is held in, default is undefined
         * @param {object} params extra parameters specific to the poloniex api endpoint
         * @returns {object} a [position structure]{@link https://docs.ccxt.com/en/latest/manual.html#position-structure}
         */
        await this.loadMarkets ();
        const market = this.market (symbol);
        const request = {
            'currencyPair': market['id'],
        };
        const response = await this.privatePostGetMarginPosition (this.extend (request, params));
        //
        //     {
        //         type: "none",
        //         amount: "0.00000000",
        //         total: "0.00000000",
        //         basePrice: "0.00000000",
        //         liquidationPrice: -1,
        //         pl: "0.00000000",
        //         lendingFees: "0.00000000"
        //     }
        //
        // todo unify parsePosition/parsePositions
        return response;
    }

    nonce () {
        return this.milliseconds ();
    }

    sign (path, api = 'public', method = 'GET', params = {}, headers = undefined, body = undefined) {
        let url = this.urls['api'];
        const query = this.omit (params, this.extractParams (path));
        const implodedPath = this.implodeParams (path, params);
        if (api === 'public') {
            url += '/' + implodedPath;
            if (Object.keys (query).length > 0) {
                url += '?' + this.urlencode (query);
            }
        } else {
            this.checkRequiredCredentials ();
            const timestamp = this.nonce ();
            let auth = method + '\n';
            url += '/' + implodedPath;
            auth += '/' + implodedPath;
            if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
                auth += '\n';
                if (Object.keys (query).length > 0) {
                    body = this.json (query);
                    auth += 'requestBody=' + body + '&';
                }
                auth += 'signTimestamp=' + timestamp;
            } else {
                let sortedQuery = this.extend ({ 'signTimestamp': timestamp }, query);
                sortedQuery = this.keysort (sortedQuery);
                if (Object.keys (sortedQuery).length > 0) {
                    url += '?' + this.urlencode (query);
                    auth += '\n' + this.urlencode (sortedQuery);
                }
            }
            const signature = this.hmac (this.encode (auth), this.encode (this.secret), 'sha256', 'base64');
            headers = {
                'Content-Type': 'application/json',
                'key': this.apiKey,
                'signTimestamp': timestamp,
                'signature': signature,
            };
        }
        return { 'url': url, 'method': method, 'body': body, 'headers': headers };
    }

    handleErrors (code, reason, url, method, headers, body, response, requestHeaders, requestBody) {
        if (response === undefined) {
            return;
        }
        // {"error":"Permission denied."}
        if ('error' in response) {
            const message = response['error'];
            const feedback = this.id + ' ' + body;
            this.throwExactlyMatchedException (this.exceptions['exact'], message, feedback);
            this.throwBroadlyMatchedException (this.exceptions['broad'], message, feedback);
            throw new ExchangeError (feedback); // unknown message
        }
    }
};
