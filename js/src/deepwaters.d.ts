import Exchange from './abstract/deepwaters.js';
export default class deepwaters extends Exchange {
    describe(): any;
    fetchBidsAsks(symbols?: any, params?: {}): Promise<any>;
    fetchTicker(symbol: any, params?: {}): Promise<any>;
    fetchTickers(symbols?: any, params?: {}): Promise<any>;
    fetchMarkets(params?: {}): Promise<any[]>;
    getNonce(): number;
    fetchNonce(): Promise<void>;
    fetchCurrencies(params?: {}): Promise<{}>;
    parseBalance(response: any): import("./base/types.js").Balances;
    parseOrderStatus(status: any): string;
    parseOrder(order: any, market?: any): any;
    fetchBalance(params?: {}): Promise<import("./base/types.js").Balances>;
    fetchOrderBook(symbol: any, limit?: any, params?: {}): Promise<import("./base/types.js").OrderBook>;
    fetchOrders(symbol?: any, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Order[]>;
    fetchMyTrades(symbol?: any, since?: any, limit?: any, params?: {}): Promise<any[]>;
    fetchOpenOrders(symbol?: any, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Order[]>;
    fetchClosedOrders(symbol?: any, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Order[]>;
    fetchCanceledOrders(symbol?: any, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Order[]>;
    createOrder(symbol: any, type: any, side: any, amount: any, price?: any, params?: {}): Promise<any>;
    fetchOrder(id: any, symbol?: any, params?: {}): Promise<any>;
    cancelOrder(id: any, symbol?: any, params?: {}): Promise<any>;
    cancelAllOrders(symbol?: any, params?: {}): Promise<any>;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: any;
        method: string;
        body: any;
        headers: any;
    };
    handleError(response?: {}): void;
    fetchTime(params?: {}): Promise<number>;
    signHash(hash: any, privateKey: any): {
        r: string;
        s: string;
        v: number;
    };
}
