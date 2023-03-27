// ----------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code
// EDIT THE CORRESPONDENT .ts FILE INSTEAD

// -------------------------------------------------------------------------------
import { Exchange as _Exchange } from '../base/Exchange.js';
export default class Exchange extends _Exchange {
    publicGetMarket(params) { return this['publicGetMarket'](params); }
    publicGetCurrency(params) { return this['publicGetCurrency'](params); }
    publicGetCurrencyWithPlatform(params) { return this['publicGetCurrencyWithPlatform'](params); }
    publicGetTime(params) { return this['publicGetTime'](params); }
    publicGetTicker(params) { return this['publicGetTicker'](params); }
    publicGetOrderBook(params) { return this['publicGetOrderBook'](params); }
    publicGetTrade(params) { return this['publicGetTrade'](params); }
    publicGetCandle(params) { return this['publicGetCandle'](params); }
    privatePostNewOrder(params) { return this['privatePostNewOrder'](params); }
    privatePostCancelOrder(params) { return this['privatePostCancelOrder'](params); }
    privatePostWithdrawal(params) { return this['privatePostWithdrawal'](params); }
    privateGetBalance(params) { return this['privateGetBalance'](params); }
    privateGetOrder(params) { return this['privateGetOrder'](params); }
    privateGetOpenOrder(params) { return this['privateGetOpenOrder'](params); }
    privateGetOrderHistory(params) { return this['privateGetOrderHistory'](params); }
    privateGetTradeHistory(params) { return this['privateGetTradeHistory'](params); }
    privateGetDepositAddress(params) { return this['privateGetDepositAddress'](params); }
    accountsPostToken(params) { return this['accountsPostToken'](params); }
}
