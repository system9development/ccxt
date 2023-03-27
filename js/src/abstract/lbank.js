// ----------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code
// EDIT THE CORRESPONDENT .ts FILE INSTEAD

// -------------------------------------------------------------------------------
import { Exchange as _Exchange } from '../base/Exchange.js';
export default class Exchange extends _Exchange {
    publicGetCurrencyPairs(params) { return this['publicGetCurrencyPairs'](params); }
    publicGetTicker(params) { return this['publicGetTicker'](params); }
    publicGetDepth(params) { return this['publicGetDepth'](params); }
    publicGetTrades(params) { return this['publicGetTrades'](params); }
    publicGetKline(params) { return this['publicGetKline'](params); }
    publicGetAccuracy(params) { return this['publicGetAccuracy'](params); }
    privatePostUserInfo(params) { return this['privatePostUserInfo'](params); }
    privatePostCreateOrder(params) { return this['privatePostCreateOrder'](params); }
    privatePostCancelOrder(params) { return this['privatePostCancelOrder'](params); }
    privatePostOrdersInfo(params) { return this['privatePostOrdersInfo'](params); }
    privatePostOrdersInfoHistory(params) { return this['privatePostOrdersInfoHistory'](params); }
    privatePostWithdraw(params) { return this['privatePostWithdraw'](params); }
    privatePostWithdrawCancel(params) { return this['privatePostWithdrawCancel'](params); }
    privatePostWithdraws(params) { return this['privatePostWithdraws'](params); }
    privatePostWithdrawConfigs(params) { return this['privatePostWithdrawConfigs'](params); }
}
