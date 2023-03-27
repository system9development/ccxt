// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

export default class Exchange extends _Exchange {
    publicGetMarketsSymbolTicker (params?: {}): Promise<implicitReturnType> { return this['publicGetMarketsSymbolTicker'] (params); }
    publicGetMarketsSymbolOrderBook (params?: {}): Promise<implicitReturnType> { return this['publicGetMarketsSymbolOrderBook'] (params); }
    publicGetMarketsSymbolTrades (params?: {}): Promise<implicitReturnType> { return this['publicGetMarketsSymbolTrades'] (params); }
    privateGetWallets (params?: {}): Promise<implicitReturnType> { return this['privateGetWallets'] (params); }
    privateGetWalletsWalletId (params?: {}): Promise<implicitReturnType> { return this['privateGetWalletsWalletId'] (params); }
    privateGetWalletsWalletIdBalancesCurrencyCode (params?: {}): Promise<implicitReturnType> { return this['privateGetWalletsWalletIdBalancesCurrencyCode'] (params); }
    privateGetWalletsWalletIdFundingHistory (params?: {}): Promise<implicitReturnType> { return this['privateGetWalletsWalletIdFundingHistory'] (params); }
    privateGetWalletsWalletIdTrades (params?: {}): Promise<implicitReturnType> { return this['privateGetWalletsWalletIdTrades'] (params); }
    privateGetWalletsWalletIdOrders (params?: {}): Promise<implicitReturnType> { return this['privateGetWalletsWalletIdOrders'] (params); }
    privateGetWalletsWalletIdOrdersId (params?: {}): Promise<implicitReturnType> { return this['privateGetWalletsWalletIdOrdersId'] (params); }
    privatePostWalletTransfers (params?: {}): Promise<implicitReturnType> { return this['privatePostWalletTransfers'] (params); }
    privatePostWallets (params?: {}): Promise<implicitReturnType> { return this['privatePostWallets'] (params); }
    privatePostWalletsWalletIdCryptocurrencyDeposits (params?: {}): Promise<implicitReturnType> { return this['privatePostWalletsWalletIdCryptocurrencyDeposits'] (params); }
    privatePostWalletsWalletIdCryptocurrencyWithdrawals (params?: {}): Promise<implicitReturnType> { return this['privatePostWalletsWalletIdCryptocurrencyWithdrawals'] (params); }
    privatePostWalletsWalletIdOrders (params?: {}): Promise<implicitReturnType> { return this['privatePostWalletsWalletIdOrders'] (params); }
    privatePostWireWithdrawal (params?: {}): Promise<implicitReturnType> { return this['privatePostWireWithdrawal'] (params); }
    privateDeleteWalletsWalletIdOrdersId (params?: {}): Promise<implicitReturnType> { return this['privateDeleteWalletsWalletIdOrdersId'] (params); }
}