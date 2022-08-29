# -*- coding: utf-8 -*-

# PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
# https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

from ccxt.base.exchange import Exchange
import hashlib
from ccxt.base.decimal_to_precision import TRUNCATE
from ccxt.base.decimal_to_precision import DECIMAL_PLACES


class osl(Exchange):

    def describe(self):
        return self.deep_extend(super(osl, self).describe(), {
            'id': 'osl',
            'name': 'OSL',
            'countries': ['SG', 'AM', 'HK'],  # Singapore, Americas, Hong Kong
            'rateLimit': 5,  # OSL v4 allows 200 requests per second
            'certified': False,
            'version': '',  # mix of '3' and 'v4' will be used; public endpoints are on '3'
            'has': {
                'CORS': None,
                'spot': True,
                'margin': False,
                'swap': False,
                'future': False,
                'option': False,
                'cancelAllOrders': None,                   # has, but not yet implemented
                'cancelOrder': None,                       # has, but not yet implemented
                'createOrder': None,                       # has, but not yet implemented
                'createStopLimitOrder': False,
                'createStopMarketOrder': False,
                'createStopOrder': False,
                'fetchBalance': True,
                'fetchBidsAsks': None,                     # not sure what self is
                'fetchBorrowRate': False,
                'fetchBorrowRateHistories': False,
                'fetchBorrowRateHistory': False,
                'fetchBorrowRates': False,
                'fetchBorrowRatesPerSymbol': False,
                'fetchClosedOrders': None,                 # has, but not yet implemented, see /order with open=false, filter out open
                'fetchCurrencies': False,
                'fetchDepositAddress': None,               # has, but not yet implemented, see v3 api /receive
                'fetchDeposits': None,                     # api v3 might have self
                'fetchMarginMode': False,
                'fetchMarkets': True,                           # api v4/instruments, requires auth
                'fetchMyTrades': None,                     # has, but not yet implemented, see /executions
                'fetchOHLCV': False,
                'fetchOpenOrders': None,                   # has, but not yet implemented, see /order
                'fetchOrder': None,                        # has, but not yet implemented
                'fetchOrderBook': True,                         # v4/orderBook/L2, requires symbol, supports depth with default 25
                'fetchOrders': False,                           # has, but not yet implemented, see /order with open=false
                'fetchPositionMode': False,
                'fetchStatus': None,                       # not implemented
                'fetchTicker': None,                       # not implemented, available via fetchMarkets endpoint response
                'fetchTickers': None,                      # see above
                'fetchTime': None,                         # not implemented
                'fetchTrades': None,
                'fetchTradingFee': None,
                'fetchTradingFees': None,
                'fetchTransactionFees': None,
                'fetchTransactions': None,
                'fetchTransfers': None,
                'fetchWithdrawals': None,
                'transfer': None,
                'withdraw': None,
            },
            'timeframes': {
                # did not check these for OSL
                '1m': '1m',
                '5m': '5m',
                '15m': '15m',
                '30m': '30m',
                '1h': '1H',
                '2h': '2H',
                '4h': '4H',
                '1d': '1D',
                '1w': '1W',
            },
            'urls': {
                'api': {
                    # other api endpoints are trade-am and trade-hk, not implemented
                    '2': 'https://trade-sg.osl.com/api/2',   # used for ticker data
                    '3': 'https://trade-sg.osl.com/api/3',   # used for currency list and markets
                    'v4': 'https://trade-sg.osl.com/api/v4',  # used for balances
                },
                'www': 'https://osl.com',
                'referral': '',
                'doc': [
                    'https://docs.osl.com/',
                ],
                'fees': 'https://support.osl.com/s/article/Are-there-trading-fees-on-the-Exchange',
            },
            'requiredCredentials': {
                'apiKey': True,
                'secret': True,
            },
            'api': {
                'v2': {
                    # Ticker get would go here
                },
                'v3': {
                    'public': {
                        'get': {
                            'currencyStatic': 1,
                        },
                    },
                },
                'v4': {
                    'private': {
                        'get': {
                            'instrument': 1,
                            'user/wallet': 1,
                            'orderBook/L2': 1,
                        },
                    },
                },
            },
            'options': {
            },
            'precisionMode': DECIMAL_PLACES,
        })

    def cost_to_precision(self, symbol, cost):
        return self.decimal_to_precision(cost, TRUNCATE, self.markets[symbol]['precision']['quote'], self.precisionMode, self.paddingMode)

    def currency_to_precision(self, code, fee, networkCode=None):
        # info is available in currencies only if the user has configured his api keys
        if self.safe_value(self.currencies[code], 'precision') is not None:
            return self.decimal_to_precision(fee, TRUNCATE, self.currencies[code]['precision'], self.precisionMode, self.paddingMode)
        else:
            return self.number_to_string(fee)

    def fetch_markets(self, params={}):
        """
        retrieves data on all markets for osl
        :param dict params: extra parameters specific to the exchange api endpoint
        :returns [dict]: an array of objects representing market data
        """
        markets = self.v4PrivateGetInstrument(params)
        # [
        #     ...
        #     {
        #         symbol: 'SNXUSD',
        #         currency: 'SNX',
        #         settlCurrency: 'USD',
        #         highPrice: '2.99430',
        #         lowPrice: '2.99430',
        #         bidPrice: '3.00730',
        #         askPrice: '3.02590',
        #         lastPrice: '2.99430',
        #         minPrice: '2.14900',
        #         maxPrice: '3.99100',
        #         minOrderQty: '1.00000000',
        #         maxOrderQty: '125282.00000000',
        #         minValue: '10.00000',
        #         maxValue: '500000.00000',
        #         prevClosePrice: null,
        #         volume: null,
        #         tickSize: '0.00010',
        #         stepSize: '1.00000000',
        #         priceDecimals: '5',
        #         quantityDecimals: '8',
        #         updateTime: null
        #     },
        #     ...
        # ]
        result = []
        for i in range(0, len(markets)):
            market = markets[i]
            id = self.safe_string(market, 'symbol')
            lowercaseId = self.safe_string_lower(market, 'symbol')
            baseId = self.safe_string(market, 'currency')
            quoteId = self.safe_string(market, 'settlCurrency')
            base = self.safe_currency_code(baseId)
            quote = self.safe_currency_code(quoteId)
            pricePrecision = self.safe_string(market, 'priceDecimals')
            amountPrecision = self.safe_string(market, 'quantityDecimals')
            entry = {
                'id': id,
                'lowercaseId': lowercaseId,
                'symbol': base + '/' + quote,
                'base': base,
                'quote': quote,
                'settle': None,
                'baseId': baseId,
                'quoteId': quoteId,
                'settleId': None,
                'type': 'spot',
                'spot': True,
                'margin': False,
                'swap': False,
                'future': False,
                'option': False,
                'active': True,
                'contract': False,
                'linear': None,
                'inverse': None,
                'contractSize': None,
                'expiry': None,
                'expiryDatetime': None,
                'strike': None,
                'optionType': None,
                'precision': {
                    'amount': self.parse_number(self.parse_precision(amountPrecision)),
                    'price': self.parse_number(self.parse_precision(pricePrecision)),
                    'base': 5,  # self.parse_number(self.parse_precision(self.safe_string(market, ''))),
                    'quote': 5,  # self.parse_number(self.parse_precision(self.safe_string(market, 'quotePrecision'))),
                },
                'limits': {
                    'leverage': {
                        'min': None,
                        'max': None,
                    },
                    'amount': {
                        'min': 0,
                        'max': 10,
                    },
                    'price': {
                        'min': None,
                        'max': None,
                    },
                    'cost': {
                        'min': 0,
                        'max': None,
                    },
                },
                'info': market,
            }
            result.append(entry)
        return result

    def parse_balance(self, response):
        timestamp = self.milliseconds()
        result = {
            'info': response,
            'timestamp': timestamp,
            'datetime': self.iso8601(timestamp),
        }
        balances = self.is_array response if (response) else []
        for i in range(0, len(balances)):
            balance = balances[i]
            currencyId = self.safe_string(balance, 'currency')
            code = self.safe_currency_code(currencyId)
            account = self.account()
            account['free'] = self.safe_string(balance, 'exchangeAvailableBalance')
            account['total'] = self.safe_string(balance, 'exchangeTotalBalance')
            result[code] = account
        return self.safe_balance(result)

    def fetch_balance(self, params={}):
        """
        query for balance and get the amount of funds available for trading or funds locked in orders
        :param dict params: extra parameters specific to the osl api endpoint
        :returns dict: a `balance structure <https://docs.ccxt.com/en/latest/manual.html?#balance-structure>`
        """
        self.load_markets()
        response = self.v4PrivateGetUserWallet(params)
        # [
        #     {
        #       exchangeAvailableBalance: '500.00000',
        #       exchangeTotalBalance: '500.00000',
        #       currency: 'USD'
        #     },
        #     ...
        # ]
        return self.parse_balance(response)

    def fetch_order_book(self, symbol, limit=None, params={}):
        """
        fetches information on open orders with bid(buy) and ask(sell) prices, volumes and other data
        :param str symbol: unified symbol of the market to fetch the order book for
        :param int|None limit: the maximum amount of order book entries to return
        :param dict params: extra parameters specific to the osl api endpoint
        :returns dict: A dictionary of `order book structures <https://docs.ccxt.com/en/latest/manual.html#order-book-structure>` indexed by market symbols
        """
        self.load_markets()
        market = self.market(symbol)
        request = {
            'symbol': market['id'],
        }
        if limit is not None:
            request['depth'] = limit  # default 25, see https://docs.osl.com/#get-l2-order-book
        response = self.v4PrivateGetOrderBookL2(self.extend(request, params))
        # {
        #     symbol: 'BTCUSDT',
        #     asks: [
        #         ['20202', '3'],
        #         ['20208', '5'],
        #     ],
        #     bids: [
        #         ['20185', '1'],
        #         ['20184', '2'],
        #     ],
        #     updateTime: '2022-08-29T15:45:18.015Z'
        # }
        orderbook = self.parse_order_book(response, symbol)
        return orderbook

    def sign(self, path, api='public', method='GET', params={}, headers=None, body=None):
        # ['v4', 'private']
        version = api
        type = api[1]
        # v2 and v3 apis don't use 'v' prefix
        if version == 'v2':
            version = '2'
        elif version == 'v3':
            version = '3'
        # path = '/api/v4/'
        url = self.urls['api'][version] + '/' + self.implode_params(path, params)
        # implodeParams and extractParams currently no-op for implemented paths
        # pathForHmac = version + '/' + self.implode_params(path, params)
        # params = self.omit(params, self.extract_params(path))
        tonce = self.seconds() + 10
        # type is always 'private' for(currently implemented) v4 endpoints
        if type == 'private':
            self.check_required_credentials()
            query = self.urlencode(params)
            headers = {
                'api-key': getattr(self, 'apiKey'),
                'api-expires': tonce,
            }
            if (method == 'GET') or (method == 'DELETE'):
                if query:
                    url += '?' + query
                    path += '?' + query
                data = method + self.encode('/api' + '/' + version + '/' + path) + self.encode(tonce)
                signature = self.hmac(self.encode(data), self.base64_to_binary(self.secret), hashlib.sha512, 'base64')
                headers['api-signature'] = signature
            else:
                body = query
                headers['Content-Type'] = 'application/x-www-form-urlencoded'
                data = method + self.encode(path) + self.encode(tonce) + self.encode(json.dumps(body))
                signature = self.hmac(self.encode(data), self.base64_to_binary(getattr(self, 'secret')), hashlib.sha512, 'base64')
                headers['api-signature'] = signature
        else:
            if params:
                url += '?' + self.urlencode(params)
        return {'url': url, 'method': method, 'body': body, 'headers': headers}
