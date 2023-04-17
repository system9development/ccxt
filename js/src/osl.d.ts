import Exchange from './base/Exchange.js';
export default class osl extends Exchange {
    describe(): any;
    costToPrecision(symbol: any, cost: any): any;
    currencyToPrecision(code: any, fee: any, networkCode?: any): any;
    fetchMarkets(params?: {}): Promise<any[]>;
    parseBalance(response: any): import("./base/types.js").Balances;
    fetchBalance(params?: {}): Promise<import("./base/types.js").Balances>;
    fetchOrderBook(symbol: any, limit?: any, params?: {}): Promise<import("./base/types.js").OrderBook>;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
}
