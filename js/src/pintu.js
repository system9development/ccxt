//  ---------------------------------------------------------------------------
import Exchange from './abstract/pintu.js';
import { BadSymbol, ExchangeError, InsufficientFunds, BadRequest, InvalidNonce, OrderNotFound, InvalidOrder, ArgumentsRequired, DuplicateOrderId, PermissionDenied } from './base/errors.js';
import { Precise } from './base/Precise.js';
import { sha256 } from './static_dependencies/noble-hashes/sha256.js';
import { TICK_SIZE } from './base/functions/number.js';
//  ---------------------------------------------------------------------------
export default class pintu extends Exchange {
    describe() {
        return this.deepExtend(super.describe(), {
            'id': 'pintu',
            'name': 'Pintu',
            'countries': ['ID'],
            'rateLimit': 1000,
            'version': 'v1',
            'certified': false,
            'pro': false,
            'has': {
                'CORS': false,
                'spot': true,
                'margin': false,
                'swap': false,
                'future': false,
                'option': false,
                'cancelAllOrders': false,
                'cancelOrder': true,
                'cancelOrders': false,
                'createOrder': true,
                'fetchBalance': true,
                'fetchClosedOrders': 'emulated',
                'fetchCurrencies': false,
                'fetchDeposits': false,
                'fetchDepositWithdrawFee': false,
                'fetchDepositWithdrawFees': false,
                'fetchFundingRate': false,
                'fetchFundingRateHistory': false,
                'fetchLeverage': false,
                'fetchMarkets': true,
                'fetchMyTrades': true,
                'fetchOHLCV': false,
                'fetchOpenInterest': false,
                'fetchOpenOrders': true,
                'fetchOrder': false,
                'fetchOrderBook': true,
                'fetchOrders': true,
                'fetchPositions': false,
                'fetchTicker': false,
                'fetchTickers': false,
                'fetchTime': false,
                'fetchTrades': false,
                'fetchTransfers': false,
                'fetchWithdrawals': false,
                'setLeverage': false,
                'setMargin': false,
                'setMarginMode': false,
                'transfer': false,
            },
            'hostname': 'uat.pintupro.com',
            'urls': {
                'logo': 'https://docs.pintupro.com/images/logo-76f33bf1.png',
                'api': {
                    'spot': 'https://api.{hostname}/v1',
                },
                'www': 'https://pintu.co.id/en',
                'doc': 'https://docs.pintupro.com/',
                'referral': undefined,
                'fees': 'https://pintu.co.id/en/fees',
            },
            'requiredCredentials': {
                'apiKey': true,
                'secret': true,
            },
            'api': {
                'public': {
                    'get': {
                        'public/get-symbols-reference': 1,
                        'public/get-book': 1,
                    },
                },
                'private': {
                    'post': {
                        'private/place-order': 1,
                        'private/cancel-order': 1,
                        'private/get-account-information': 1,
                        'private/get-open-orders': 1,
                        'private/get-order-history': 1,
                        'private/get-order-details': 1,
                        'private/get-trade-history': 1,
                    },
                },
            },
            'timeframes': {
                '1m': '1m',
                '3m': '3m',
                '5m': '5m',
                '15m': '15m',
                '30m': '30m',
                '1h': '1h',
                '2h': '2h',
                '4h': '4h',
                '6h': '6h',
                '12h': '12h',
                '1d': '1d',
                '3d': '3d',
                '1w': '1w',
                '1M': '1M',
            },
            'fees': {
                'trading': {},
            },
            'precisionMode': TICK_SIZE,
            'exceptions': {
                'exact': {
                    '1': BadSymbol,
                    '2': BadRequest,
                    '3': InvalidOrder,
                    '4': ExchangeError,
                    '7': OrderNotFound,
                    '8': ExchangeError,
                    '11': InsufficientFunds,
                    '12': InvalidNonce,
                },
                'broad': {
                    // code 2, http 400:
                    'page size': BadRequest,
                    'order id': InvalidOrder,
                    'should be greater': BadRequest,
                    'within 24': BadRequest,
                    'is required': ArgumentsRequired,
                    'must be greater than 0': BadRequest,
                    'must be greater than zero': BadRequest,
                    'must be greater than minimum': BadRequest,
                    'duplicate request id': DuplicateOrderId,
                    'invalid asset': BadSymbol,
                    // code 3, http 200:
                    'exceeded maximum order size': InvalidOrder,
                    'insufficient': InvalidOrder,
                    'should be specified': ArgumentsRequired,
                    'invalid price': InvalidOrder,
                    'too many decimals': InvalidOrder,
                    'far away limit price': InvalidOrder,
                    'exceeded trading daily limit': PermissionDenied,
                    'max number of open orders.': PermissionDenied, // Max number of open orders.
                },
            },
            'commonCurrencies': {},
        });
    }
    async fetchMarkets(params = {}) {
        /**
        *
        * @method
        * @name pintu#fetchMarkets
        * @description retrieves data on spot markets for pintu
        * @see https://docs.pintupro.com/#get-symbol-reference
        * @param {object} [params] extra parameters specific to the exchange api endpoint
        * @returns {[object]} an array of objects representing market data
        */
        const response = await this.publicGetPublicGetSymbolsReference();
        let data = this.safeValue(response, 'data');
        data = this.safeValue(data, 'symbols', []);
        const result = [];
        // {
        //   "code": 0,
        //   "message": "SUCCESS",
        //   "reason": "",
        //   "data": {
        //     "symbols": [
        //       {
        //         "symbol": "BTC-USDT",
        //         "quote_asset": "USDT",
        //         "base_asset": "BTC",
        //         "price_decimals": 7,
        //         "size_decimals": 0,
        //         "max_size": "1000000000",
        //         "min_size": "10",
        //         "max_value": "85000000",
        //         "min_value": "10000",
        //         "max_price": "1000",
        //         "min_price": "0.0000001",
        //         "quantity_tick_size": "10",
        //         "price_tick_size": "0.0000001",
        //         "last_updated_at": 1666261193053
        //       },
        //       ...
        for (let i = 0; i < data.length; i++) {
            const market = data[i];
            const id = this.safeString(market, 'symbol');
            const baseId = this.safeString(market, 'base_asset');
            const quoteId = this.safeString(market, 'quote_asset');
            const base = this.safeCurrencyCode(baseId);
            const quote = this.safeCurrencyCode(quoteId);
            const symbol = base + '/' + quote;
            const lowercaseId = id.toLowerCase();
            const active = true;
            // review this:
            const pricePrecisionDecimals = this.safeString(market, 'price_decimals');
            const amountPrecisionDecimals = this.safeString(market, 'size_decimals');
            let pricePrecision = this.safeNumber(market, 'price_tick_size');
            let amountPrecision = this.safeNumber(market, 'quantity_tick_size');
            if (this.parseNumber(this.parsePrecision(pricePrecisionDecimals)) > pricePrecision) {
                pricePrecision = this.parseNumber(this.parsePrecision(pricePrecisionDecimals));
            }
            if (this.parseNumber(this.parsePrecision(amountPrecisionDecimals)) > amountPrecision) {
                amountPrecision = this.parseNumber(this.parsePrecision(pricePrecisionDecimals));
            }
            const minSize = this.safeNumber(market, 'min_size');
            const minPrice = this.safeNumber(market, 'min_price');
            const maxSize = this.safeNumber(market, 'max_size');
            const maxPrice = this.safeNumber(market, 'max_price');
            const minCost = this.safeNumber(market, 'min_value');
            const maxCost = this.safeNumber(market, 'max_value');
            const entry = {
                'id': id,
                'lowercaseId': lowercaseId,
                'symbol': symbol,
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
                'delivery': false,
                'option': false,
                'active': active,
                'contract': false,
                'linear': undefined,
                'inverse': undefined,
                'contractSize': undefined,
                'expiry': undefined,
                'expiryDatetime': undefined,
                'strike': undefined,
                'optionType': undefined,
                'precision': {
                    'amount': amountPrecision,
                    'price': pricePrecision,
                    'base': undefined,
                    'quote': undefined,
                },
                'limits': {
                    'leverage': {
                        'min': undefined,
                        'max': undefined,
                    },
                    'amount': {
                        'min': minSize,
                        'max': maxSize,
                    },
                    'price': {
                        'min': minPrice,
                        'max': maxPrice,
                    },
                    'cost': {
                        'min': minCost,
                        'max': maxCost,
                    },
                },
                'info': market,
            };
            result.push(entry);
        }
        return result;
    }
    async fetchOrderBook(symbol, limit = undefined, params = {}) {
        /**
        * @method
        * @name pintu#fetchOrderBook
        * @description fetches information on open orders with bid (buy) and ask (sell) prices, volumes and other data
        * @see https://docs.pintupro.com/#get-book
        * @param {string} symbol unified symbol of the market to fetch the order book for
        * @param {number} [limit] the maximum amount of order book entries to return
        * @param {object} [params] extra parameters specific to the pintu api endpoint
        * @returns {object} A dictionary of [order book structures]{@link https://docs.ccxt.com/#/?id=order-book-structure} indexed by market symbols
        */
        this.checkRequiredSymbol('fetchOrderBook', symbol);
        await this.loadMarkets();
        const market = this.market(symbol);
        const request = {
            'symbol': market['id'],
        };
        if (limit !== undefined) {
            request['depth'] = limit;
        }
        const response = await this.publicGetPublicGetBook(this.extend(request, params));
        const timestamp = this.safeTimestamp(response, 'timestamp');
        const orderbook = this.safeValue(response, 'data', {});
        return this.parseOrderBook(orderbook, symbol, timestamp, 'bids', 'asks', 0, 1);
    }
    async fetchBalance(params = {}) {
        /**
        * @method
        * @name pintu#fetchBalance
        * @description query for balance and get the amount of funds available for trading or funds locked in orders
        * @see https://pintu-openapi.github.io/en/#assets-balance
        * @param {object} [params] extra parameters specific to the pintu api endpoint
        * @returns {object} a [balance structure]{@link https://docs.ccxt.com/en/latest/manual.html?#balance-structure}
        */
        await this.loadMarkets();
        const response = await this.privatePostPrivateGetAccountInformation();
        return this.parseBalance(response);
    }
    parseBalance(response) {
        // {
        //   "code": 0,
        //   "message": "SUCCESS",
        //   "data": {
        //     "assets": {
        //       "btc": {
        //         "balance": "10",
        //         "available": "8",
        //         "order": "2"
        //       },
        //       "eth": {
        //         "balance": "32",
        //         "available": "30",
        //         "order": "2",
        //       }
        //
        // }
        const data = this.safeValue(this.safeValue(response, 'data', {}), 'assets', {});
        const currencyIds = Object.keys(data);
        const timestamp = this.safeTimestamp(response, 'timestamp');
        const result = {
            'info': response,
            'timestamp': timestamp,
            'datetime': this.iso8601(timestamp),
        };
        for (let i = 0; i < currencyIds.length; i++) {
            const currencyId = currencyIds[i];
            const symbol = this.safeCurrencyCode(currencyId);
            const balance = this.safeValue(data, currencyId, {});
            const account = this.account();
            account['free'] = this.safeString(balance, 'available');
            account['used'] = this.safeString(balance, 'order');
            account['total'] = this.safeString(balance, 'balance');
            result[symbol] = account;
        }
        return this.safeBalance(result);
    }
    async createOrder(symbol, type, side, amount, price = undefined, params = {}) {
        /**
        * @method
        * @name pintu#createOrder
        * @description create a new order
        * @see https://docs.pintupro.com/#place-order
        * @param {string} symbol unified symbol of the market to create an order in
        * @param {string} type 'market' or 'limit'
        * @param {string} side 'buy' or 'sell'
        * @param {number} amount how much of currency you want to trade in units of base currency, ignored in market buy orders
        * @param {number} [price] the price at which the order is to be fullfilled, in units of the quote currency, ignored in market orders
        * @param {object} [params] extra parameters specific to the pintu api endpoint
        * @param {string} [params.client_order_id] a custom order ID
        * @param {number} [params.notional] for market buy orders only, notional must be specified instead of amount
        * @returns {object} an [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
        */
        this.checkRequiredSymbol('createOrder', symbol);
        await this.loadMarkets();
        const market = this.market(symbol);
        const request = {
            'symbol': market['id'],
            'type': type.toUpperCase(),
            'side': side.toUpperCase(),
        };
        if (type === 'limit') {
            request['price'] = this.priceToPrecision(symbol, price);
        }
        if (type === 'market' && side === 'buy') {
            const notional = this.safeNumber(params, 'notional');
            if (amount !== undefined) {
                throw new BadRequest(this.id + ' createOrder () does not support the amount parameter for market buy orders, for the amount of quote currency to spend use the notional parameter');
            }
            if (!notional || Number.isNaN(notional)) {
                throw new BadRequest(this.id + ' createOrder () requires a notional parameter for market buy orders, for the amount of quote currency to spend');
            }
            request['notional'] = this.priceToPrecision(symbol, notional);
        }
        else {
            request['size'] = this.amountToPrecision(symbol, amount);
        }
        const response = await this.privatePostPrivatePlaceOrder(this.extend(request, params));
        const timestamp = this.safeTimestamp(response, 'timestamp');
        const responseData = this.safeValue(response, 'data', {});
        return this.safeOrder({
            'info': responseData,
            'id': this.safeString(responseData, 'order_id'),
            'clientOrderId': this.safeString(responseData, 'client_order_id'),
            'symbol': symbol,
            'side': side,
            'type': type,
            'price': request['price'],
            'amount': request['size'],
            'notional': request['notional'],
            'timestamp': timestamp,
        }, market);
    }
    async cancelOrder(id, symbol, params = {}) {
        /**
        * @method
        * @name pintu#cancelOrder
        * @description cancels an open order
        * @see https://docs.pintupro.com/#cancel-order
        * @param {string} id order id
        * @param {string} symbol unified symbol of the market the order was made in
        * @param {object} [params] extra parameters specific to the pintu api endpoint
        * @returns {object} An [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
        */
        this.checkRequiredSymbol('cancelOrder', symbol);
        this.checkRequiredArgument('cancelOrder', id, 'id');
        await this.loadMarkets();
        const market = this.market(symbol);
        const request = {
            'symbol': market['id'],
            'order_id': id,
        };
        await this.privatePostPrivateCancelOrder(this.extend(request, params));
        // {
        //     "request_id": "a88b9054-bde2-4fd7-8a4e-c6ff6de212e2",
        //     "timestamp": 16775774798300,
        //     "method": "private/cancel-order",
        //     "code": 0,
        //     "message": "SUCCESS"
        // }
        return this.safeOrder({
            'id': id,
            'symbol': symbol,
            'status': 'canceled',
        }, market);
    }
    async fetchOrders(symbol, since = undefined, limit = undefined, params = {}) {
        /**
        * @method
        * @name pintu#fetchOrders
        * @see https://docs.pintupro.com/#get-order-history
        * @description fetch all open orders orders
        * @param {string|undefined} symbol unified market symbol
        * @param {number|undefined} [since] the earliest time in ms to fetch open orders for
        * @param {number} [limit] the maximum number of open order structures to retrieve
        * @param {object} [params] extra parameters specific to the pintu api endpoint
        * @param {number} [params.page] which page of orders to list
        * @param {number} [params.t_end] timestamp to fetch orders until, defaults to now. Required if specified with 'since', must be max 24 hours from since
        * @returns {[object]} a list of [order structures]{@link https://docs.ccxt.com/#/?id=order-structure}
        */
        this.checkRequiredSymbol('fetchOrders', symbol);
        await this.loadMarkets();
        const market = this.market(symbol);
        const request = {
            'symbol': market['id'],
        };
        if (since !== undefined) {
            const until = this.safeNumber(params, 't_end');
            const difference = until - since;
            const maxDifference = this.parseTimeframe('1d') * 1000;
            if (!until || Number.isNaN(difference) || difference <= 0 || difference > maxDifference) {
                throw new BadRequest(this.id + ' fetchOrders() requires a t_end parameter to be specified with since, and must be max 24 hours from since');
            }
            request['t_start'] = since;
            request['t_end'] = until;
        }
        if (limit !== undefined) {
            // pagination can be controlled with params.page, e.g. { page: 2 }
            request['page_size'] = limit;
        }
        const response = await this.privatePostPrivateGetOrderHistory(this.extend(request, params));
        // {
        //     "request_id": "a88b9054-bde2-4fd7-8a4e-c6ff6de212e2",
        //     "timestamp": 16775774798300,
        //     "method": "private/get-order-history",
        //     "code": 0,
        //     "message": "SUCCESS",
        //     "data": {
        //       "orders": [
        //         {
        //           "status": "PARTIALLY_FILLED",
        //           "symbol": "BTC-IDRT",
        //           "type": "LIMIT",
        //           "time_in_force": "GTC",
        //           "exec_inst": "POST_ONLY",
        //           "side": "BUY",
        //           "price": "15000",
        //           "size": "2",
        //           "cum_price": "15000",
        //           "cum_size": "0.35",
        //           "cum_value": "5250",
        //           "order_id": "12345678-abcd-efgh-ijkl-1234567890ab",
        //           "client_order_id": "my-order-id-1",
        //           "created_at": 16775774795300,
        //           "updated_at": 16775774797678
        //         },
        //         ...
        //       ]
        //     }
        //   }
        const orders = this.safeValue(this.safeValue(response, 'data', {}), 'orders', []);
        return this.parseOrders(orders, market);
    }
    parseOrder(order, market) {
        // history + open order response format:
        // {
        //   "status": "PARTIALLY_FILLED",
        //   "symbol": "BTC-IDRT",
        //   "type": "LIMIT",
        //   "time_in_force": "GTC",
        //   "exec_inst": "POST_ONLY",
        //   "side": "BUY",
        //   "price": "15000",
        //   "size": "2",
        //   "cum_price": "15000",
        //   "cum_size": "0.35",
        //   "cum_value": "5250",
        //   "order_id": "12345678-abcd-efgh-ijkl-1234567890ab",
        //   "client_order_id": "my-order-id-1",
        //   "created_at": 16775774795300,
        //   "updated_at": 16775774797678
        // }
        const updateTimestamp = this.safeNumber(order, 'updated_at', 0);
        const createdTimestamp = this.safeNumber(order, 'created_at', 0);
        const clientOrderId = this.safeString(order, 'client_order_id');
        const side = this.safeStringLower(order, 'side');
        const type = this.safeStringLower(order, 'type');
        const symbol = market['symbol'];
        const amount = this.safeNumber(order, 'size');
        const price = this.safeNumber(order, 'price');
        const filledAmount = this.safeString(order, 'cum_size', '0');
        const status = this.parseOrderStatus(this.safeString(order, 'status'));
        const cost = this.safeString(order, 'cum_value');
        const average = this.safeString(order, 'cum_price');
        const orderResponse = {
            'info': order,
            'id': this.safeString(order, 'order_id'),
            'clientOrderId': clientOrderId,
            'symbol': symbol,
            'timestamp': createdTimestamp,
            'datetime': this.iso8601(createdTimestamp),
            'type': type,
            'side': side,
            'price': price,
            'amount': amount,
            'timeInForce': this.safeString(order, 'time_in_force'),
            'postOnly': this.safeString(order, 'exec_inst') === 'POST_ONLY',
            'filled': this.parseNumber(filledAmount),
            'remaining': this.parseNumber(Precise.stringSub(amount.toString(), filledAmount)),
            'cost': cost,
            'status': status,
        };
        if (average && average !== '0') {
            orderResponse['average'] = this.parseNumber(average);
            if (status === 'open' || status === 'closed') {
                orderResponse['lastTradeTimestamp'] = updateTimestamp;
            }
        }
        return this.safeOrder(orderResponse, market);
    }
    parseOrderStatus(status) {
        const statuses = {
            'REJECTED': 'rejected',
            'PLACED': 'open',
            'PARTIALLY_FILLED': 'open',
            'FILLED': 'closed',
            'CANCELED': 'canceled',
        };
        return this.safeString(statuses, status, status);
    }
    async fetchOpenOrders(symbol, since = undefined, limit = undefined, params = {}) {
        /**
        * @method
        * @name pintu#fetchOpenOrders
        * @see https://docs.pintupro.com/#get-open-orders
        * @description fetch all unfilled currently open orders
        * @param {string} symbol unified market symbol
        * @param {number} [since] the earliest time in ms to fetch open orders for
        * @param {number} [limit] the maximum number of open order structures to retrieve
        * @param {object} [params] extra parameters specific to the pintu api endpoint
        * @returns {[object]} a list of [order structures]{@link https://docs.ccxt.com/#/?id=order-structure}
        */
        this.checkRequiredSymbol('fetchOpenOrders', symbol);
        await this.loadMarkets();
        const request = {};
        let market = undefined;
        if (symbol !== undefined) {
            market = this.market(symbol);
            request['symbol'] = market['id'];
        }
        const response = await this.privatePostPrivateGetOpenOrders(this.extend(request, params));
        // "data": {
        //     "count": 345,
        //     "orders": [
        //       {
        //         "status": "PARTIALLY_FILLED",
        //         "symbol": "BTC-IDRT",
        //         "type": "LIMIT",
        //         "time_in_force": "GTC",
        //         "exec_inst": "POST_ONLY",
        //         "side": "BUY",
        //         "price": "15000",
        //         "size": "2",
        //         "cum_price": "15000",
        //         "cum_size": "0.35",
        //         "cum_value": "5250",
        //         "order_id": "12345678-abcd-efgh-ijkl-1234567890ab",
        //         "client_order_id": "my-order-id-1",
        //         "created_at": 16775774795300,
        //         "updated_at": 16775774797678
        //       },
        //       ...
        //     ]
        // }
        let orders = this.safeValue(this.safeValue(response, 'data', {}), 'orders', []);
        if (since !== undefined || limit !== undefined) {
            orders = this.filterBySinceLimit(orders, since, limit, 'created_at');
        }
        return this.parseOrders(orders, market);
    }
    async fetchClosedOrders(symbol = undefined, since = undefined, limit = undefined, params = {}) {
        /**
        * @method
        * @name pintu#fetchClosedOrders
        * @description fetches information on multiple closed orders made by the user
        * @param {string} [symbol] unified market symbol of the market orders were made in
        * @param {number} [since] the earliest time in ms to fetch orders for
        * @param {number} [limit] the maximum number of order structures to retrieve
        * @returns {[object]} a list of [order structures]{@link https://docs.ccxt.com/#/?id=order-structure}
        */
        const parsedOrders = await this.fetchOrders(symbol, undefined, undefined, params);
        const filteredOrders = this.filterByArray(parsedOrders, 'status', ['canceled', 'rejected', 'expired', 'closed'], false);
        if (since !== undefined || limit !== undefined) {
            return this.filterBySinceLimit(filteredOrders, since, limit);
        }
        return filteredOrders;
    }
    async fetchMyTrades(symbol, since = undefined, limit = undefined, params = {}) {
        /**
        * @method
        * @name pintu#fetchMyTrades
        * @description get the list of most recent trades for a particular symbol
        * @see https://docs.pintupro.com/#get-trade-history
        * @param {string} symbol unified symbol of the market to fetch trades for
        * @param {number} [since] timestamp used to filter out older trades
        * @param {number} [limit] the maximum amount of trades to fetch
        * @param {object} [params={}] extra parameters specific to the pintu api endpoint
        * @param {number} [params.page] which page of trades to list
        * @param {number} [params.t_end] timestamp to fetch trades until, defaults to now. Required if specified with 'since', must be max 24 hours from since
        * @returns {[object]} a list of [trade structures]{@link https://docs.ccxt.com/en/latest/manual.html?#public-trades}
        */
        this.checkRequiredSymbol('fetchMyTrades', symbol);
        await this.loadMarkets();
        const market = this.market(symbol);
        const request = {
            'symbol': market['id'],
        };
        if (since !== undefined) {
            const until = this.safeNumber(params, 't_end');
            const difference = until - since;
            const maxDifference = this.parseTimeframe('1d') * 1000;
            if (!until || Number.isNaN(difference) || difference <= 0 || difference > maxDifference) {
                throw new BadRequest(this.id + ' fetchMyTrades() requires a t_end parameter to be specified with since, and must be max 24 hours from since');
            }
            request['t_start'] = since;
            request['t_end'] = until;
        }
        if (limit !== undefined) {
            // pagination can be controlled with params.page, e.g. { page: 2 }
            request['page_size'] = limit;
        }
        const response = await this.privatePostPrivateGetTradeHistory(this.extend(request, params));
        const trades = this.safeValue(this.safeValue(response, 'data', {}), 'trades', []);
        return this.parseTrades(trades, market, since);
    }
    parseTrade(trade, market) {
        // {
        //     "request_id": "a88b9054-bde2-4fd7-8a4e-c6ff6de212e2",
        //     "timestamp": 16775774797463,
        //     "method": "private/get-trade-history",
        //     "code": "0",
        //     "message": "SUCCESS",
        //     "data": {
        //         "trades": [
        //             {
        //                 "trade_id": "my-trade-id",
        //                 "order_id": "my-order-id",
        //                 "symbol": "BTC-IDR",
        //                 "side": "buy",
        //                 "price": "350000000",
        //                 "fee": "0.001",
        //                 "fee_asset": "BTC",
        //                 "fee_type": "maker",
        //                 "client_order_id": "my-client-order-id",
        //                 "traded_size": "0.905",
        //                 "traded_at": 1676869976772
        //             },
        //             ...
        //         ]
        //     }
        // }
        const timestamp = this.safeNumber(trade, 'traded_at', 0);
        const role = this.safeStringLower(trade, 'fee_type');
        let takerOrMaker = 'maker';
        if (role === 'taker') {
            takerOrMaker = 'taker';
        }
        const symbol = market['symbol'];
        const feeCurrency = this.currency(this.safeString(trade, 'fee_asset')).code;
        const fee = this.safeNumber(trade, 'fee');
        const amount = this.safeNumber(trade, 'traded_size');
        const price = this.safeNumber(trade, 'price');
        const cost = this.parseNumber(Precise.stringMul(amount.toString(), price.toString()));
        let rate = Precise.stringDiv(fee.toString(), amount.toString());
        if (feeCurrency === market['quote']) {
            rate = Precise.stringDiv(fee.toString(), cost.toString());
        }
        const order = this.safeString(trade, 'order_id');
        const clientOrderId = this.safeString(trade, 'client_order_id');
        const tradeId = this.safeString(trade, 'trade_id');
        const side = this.safeStringLower(trade, 'side');
        return this.safeTrade({
            'info': trade,
            'id': tradeId,
            'timestamp': timestamp,
            'datetime': this.iso8601(timestamp),
            'symbol': symbol,
            'order': order,
            'type': undefined,
            'side': side,
            'takerOrMaker': takerOrMaker,
            'price': price,
            'amount': amount,
            'cost': cost,
            'clientOrderId': clientOrderId,
            'fee': {
                'cost': fee,
                'currency': feeCurrency,
                'rate': rate,
            },
        }, market);
    }
    async fetchOrder(id, symbol, params = {}) {
        /**
        * @method
        * @name pintu#fetchOrder
        * @description fetches information on an order made by the user
        * @param {string} symbol unified symbol of the market the order was made in
        * @param {object} params extra parameters specific to the pintu api endpoint
        * @param {string} [params.client_order_id] The client order id of the order (if provided without an id)
        * @returns {object} An [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
        */
        this.checkRequiredSymbol('fetchOrder', symbol);
        const market = this.market(symbol);
        const symbolId = market['id'];
        const clientOrderId = this.safeString(params, 'client_order_id');
        if (!id && !clientOrderId) {
            throw new BadRequest(this.id + ' fetchOrder() requires either an order id or params.client_order_id');
        }
        await this.loadMarkets();
        const request = {
            'symbol': symbolId,
        };
        if (clientOrderId) {
            request['client_order_id'] = clientOrderId;
        }
        else {
            request['order_id'] = id;
        }
        const response = await this.privatePostPrivateGetOrderDetails(this.extend(request, params));
        const data = this.safeValue(response, 'data', {});
        const orderInfo = this.safeValue(data, 'order_info', {});
        const parsedOrder = this.parseOrder(orderInfo, market);
        const tradesInfo = this.safeValue(data, 'trades_info', []);
        for (let i = 0; i < tradesInfo.length; i++) {
            const trade = tradesInfo[i];
            trade['order_id'] = parsedOrder['id'];
            if (parsedOrder['clientOrderId']) {
                trade['client_order_id'] = parsedOrder['clientOrderId'];
            }
        }
        const parsedTrades = this.parseTrades(tradesInfo, market);
        parsedOrder['trades'] = parsedTrades;
        parsedOrder['info'] = response;
        return parsedOrder;
    }
    sign(path, api = 'public', method = 'GET', params = {}, headers = {}, body = {}) {
        /**
        * @method
        * @name pintu#sign
        * @description signs and initiates the request
        * @see https://docs.pintupro.com/#api-messages-format-specification
        * @see https://docs.pintupro.com/#api-signature-computation
        * @param {string} path the path to be appended to the URL
        * @param {'GET' | 'POST'} method extra parameters specific to the pintu api endpoint
        * @param {object} [params] parameters to use for the path (for v1 symbols) or the query string
        * @param {object} [headers] headers to use for the request
        * @param {object} [body] body to use for the request
        * @returns {object} an associative dictionary of currencies
        */
        // Can't use safeValue below, it breaks python transpilation
        const urls = this.urls;
        const apiUrls = this.safeValue(urls, 'api');
        let url = this.safeString(apiUrls, 'spot', '');
        url = this.implodeHostname(url);
        url += '/' + path;
        params = this.keysort(params);
        headers = {};
        headers['Accept'] = 'application/json';
        headers['Host'] = 'api.' + this.hostname;
        if (api === 'public') {
            let paramString = this.urlencode(params);
            if (paramString.length) {
                paramString = '?' + paramString;
            }
            return { 'url': url + paramString, 'method': method, 'headers': headers, 'body': {} };
        }
        headers['Content-Type'] = 'application/json';
        this.checkRequiredCredentials();
        let paramString = '';
        const keys = Object.keys(params);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const value = this.safeString(params, key, '');
            paramString += key + value;
        }
        const requestId = this.uuid();
        const timestamp = this.milliseconds();
        const signString = requestId + timestamp.toString() + path + this.apiKey + paramString;
        const signature = this.hmac(this.encode(signString), this.encode(this.secret), sha256, 'hex');
        body = {
            'api_key': this.apiKey,
            'method': path,
            'params': params,
            'request_id': requestId,
            'signature': signature,
            'timestamp': timestamp,
        };
        // private API always uses POST
        return { 'url': url, 'method': method, 'body': JSON.stringify(body), 'headers': headers };
    }
    handleErrors(code, reason, url, method, headers, body, response, requestHeaders, requestBody) {
        if (response === undefined) {
            return undefined; // fallback to default error handler
        }
        const responseCode = this.safeString(response, 'code');
        if (responseCode !== '0') {
            const message = this.safeString(response, 'message', '') + ': ' + this.safeString(response, 'reason', '');
            const messageLower = this.safeStringLower(response, 'message', '') + ': ' + this.safeStringLower(response, 'reason', '');
            this.throwBroadlyMatchedException(this.exceptions['broad'], messageLower, message);
            this.throwExactlyMatchedException(this.exceptions['exact'], responseCode, message);
            throw new BadRequest(this.id + ' failed with code ' + responseCode + ' and message ' + message + '. Check your arguments and parameters');
        }
    }
}
