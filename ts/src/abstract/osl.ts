// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

interface Exchange {
    v3PublicGetCurrencyStatic (params?: {}): Promise<implicitReturnType>;
    v4PrivateGetInstrument (params?: {}): Promise<implicitReturnType>;
    v4PrivateGetUserWallet (params?: {}): Promise<implicitReturnType>;
    v4PrivateGetOrderBookL2 (params?: {}): Promise<implicitReturnType>;
}
abstract class Exchange extends _Exchange {}

export default Exchange