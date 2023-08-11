import Exchange from './abstract/coinstore.js';
export default class coinstore extends Exchange {
    describe(): any;
    fetchMarkets(params?: {}): Promise<any[]>;
    fetchTrades(symbol: any, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Trade[]>;
    parsePublicTrade(trade: any, market?: any): import("./base/types.js").Trade;
    parsePrivateTrade(trade: any, market?: any): import("./base/types.js").Trade;
    parseTrade(trade: any, market?: any): import("./base/types.js").Trade;
    fetchOrderBook(symbol: any, limit?: any, params?: {}): Promise<import("./base/types.js").OrderBook>;
    fetchTicker(symbol: any, params?: {}): Promise<any>;
    fetchTickers(symbols?: any, params?: {}): Promise<any>;
    parseTicker(ticker: any, market?: any): import("./base/types.js").Ticker;
    fetchBalance(params?: {}): Promise<import("./base/types.js").Balances>;
    parseBalance(response: any): import("./base/types.js").Balances;
    createOrder(symbol: any, type: any, side: any, amount: any, price?: any, params?: {}): Promise<any>;
    cancelOrder(id: any, symbol?: any, params?: {}): Promise<any>;
    cancelAllOrders(symbol?: any, params?: {}): Promise<unknown[]>;
    parseCanceledOrder(request: any, response: any): any;
    parseSubmittedOrder(request: any, response: any): any;
    fetchOrders(symbol?: any, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Order[]>;
    parseOrder(order: any, market?: any): any;
    parseOrderStatus(status: any): string;
    fetchOpenOrders(symbol?: any, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Order[]>;
    fetchClosedOrders(symbol?: any, since?: any, limit?: any, params?: {}): Promise<any>;
    fetchMyTrades(symbol?: any, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Trade[]>;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: {}, body?: any): {
        url: any;
        method: string;
        body: string;
        headers: {};
    } | {
        url: any;
        method: string;
        headers: {};
        body?: undefined;
    };
    nonce(): number;
    handleErrors(code: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
