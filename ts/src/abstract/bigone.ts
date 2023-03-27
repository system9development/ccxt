// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

export default class Exchange extends _Exchange {
    publicGetPing (params?: {}): Promise<implicitReturnType> { return this['publicGetPing'] (params); }
    publicGetAssetPairs (params?: {}): Promise<implicitReturnType> { return this['publicGetAssetPairs'] (params); }
    publicGetAssetPairsAssetPairNameDepth (params?: {}): Promise<implicitReturnType> { return this['publicGetAssetPairsAssetPairNameDepth'] (params); }
    publicGetAssetPairsAssetPairNameTrades (params?: {}): Promise<implicitReturnType> { return this['publicGetAssetPairsAssetPairNameTrades'] (params); }
    publicGetAssetPairsAssetPairNameTicker (params?: {}): Promise<implicitReturnType> { return this['publicGetAssetPairsAssetPairNameTicker'] (params); }
    publicGetAssetPairsAssetPairNameCandles (params?: {}): Promise<implicitReturnType> { return this['publicGetAssetPairsAssetPairNameCandles'] (params); }
    publicGetAssetPairsTickers (params?: {}): Promise<implicitReturnType> { return this['publicGetAssetPairsTickers'] (params); }
    privateGetAccounts (params?: {}): Promise<implicitReturnType> { return this['privateGetAccounts'] (params); }
    privateGetFundAccounts (params?: {}): Promise<implicitReturnType> { return this['privateGetFundAccounts'] (params); }
    privateGetAssetsAssetSymbolAddress (params?: {}): Promise<implicitReturnType> { return this['privateGetAssetsAssetSymbolAddress'] (params); }
    privateGetOrders (params?: {}): Promise<implicitReturnType> { return this['privateGetOrders'] (params); }
    privateGetOrdersId (params?: {}): Promise<implicitReturnType> { return this['privateGetOrdersId'] (params); }
    privateGetOrdersMulti (params?: {}): Promise<implicitReturnType> { return this['privateGetOrdersMulti'] (params); }
    privateGetTrades (params?: {}): Promise<implicitReturnType> { return this['privateGetTrades'] (params); }
    privateGetWithdrawals (params?: {}): Promise<implicitReturnType> { return this['privateGetWithdrawals'] (params); }
    privateGetDeposits (params?: {}): Promise<implicitReturnType> { return this['privateGetDeposits'] (params); }
    privatePostOrders (params?: {}): Promise<implicitReturnType> { return this['privatePostOrders'] (params); }
    privatePostOrdersIdCancel (params?: {}): Promise<implicitReturnType> { return this['privatePostOrdersIdCancel'] (params); }
    privatePostOrdersCancel (params?: {}): Promise<implicitReturnType> { return this['privatePostOrdersCancel'] (params); }
    privatePostWithdrawals (params?: {}): Promise<implicitReturnType> { return this['privatePostWithdrawals'] (params); }
    privatePostTransfer (params?: {}): Promise<implicitReturnType> { return this['privatePostTransfer'] (params); }
}