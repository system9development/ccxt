import Exchange from './abstract/pintu.js';
export default class pintu extends Exchange {
    describe(): any;
    fetchMarkets(params?: {}): Promise<any[]>;
    fetchOrderBook(symbol: any, limit?: any, params?: {}): Promise<import("./base/types.js").OrderBook>;
    fetchBalance(params?: {}): Promise<import("./base/types.js").Balances>;
    parseBalance(response: any): import("./base/types.js").Balances;
    createOrder(symbol: any, type: any, side: any, amount: any, price?: any, params?: {}): Promise<any>;
    cancelOrder(id: any, symbol: any, params?: {}): Promise<any>;
    fetchOrders(symbol: any, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Order[]>;
    parseOrder(order: any, market: any): any;
    parseOrderStatus(status: any): string;
    fetchOpenOrders(symbol: any, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Order[]>;
    fetchClosedOrders(symbol?: any, since?: any, limit?: any, params?: {}): Promise<any>;
    fetchMyTrades(symbol: any, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Trade[]>;
    parseTrade(trade: any, market: any): import("./base/types.js").Trade;
    fetchOrder(id: any, symbol: any, params?: {}): Promise<any>;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: {}, body?: {}): {
        url: string;
        method: string;
        headers: {};
        body: {};
    } | {
        url: string;
        method: string;
        body: string;
        headers: {};
    };
    handleErrors(code: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
