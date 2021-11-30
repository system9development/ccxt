"use strict";
const ccxt = require('ccxt');
const dotenv = require('dotenv').config();
const util = require('util');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Bitrue timestamps in GMT + 8
async function fetchClosedOrders(symbol) {
    if (symbol === undefined) {
        throw new ArgumentsRequired(this.id + ' cancelOrder() requires a symbol argument');
    }

    const exchange = new ccxt.bitrue({
        apiKey: process.env.BITRUE_KEY,
        secret: process.env.BITRUE_SECRET,
        enableRateLimit: true,
    });

    await exchange.loadMarkets();
    const exchangeSymbol = exchange.marketId(symbol);
    const allTrades = [];
    let since = exchange.parse8601('2015-01-01T00:00:00Z');
    let moreOrders = true;
    while (moreOrders) {
        const orders = await exchange.fetchTrades(exchangeSymbol, since);
        if (allTrades['length'] > 0) {
            if (orders[orders['length'] - 1]['id'] === allTrades[allTrades['length'] - 1]['id']) {
                moreOrders = false;
                continue;
            }
        }
        // Param is not inclusive in this method, so on each iteration we store every order from the orders query
        for (let j = 0; j < orders['length'] - 1; j++) {
            const order = exchange.parseOrder(orders[j], exchangeSymbol);
            allTrades.push(order);
        }
        since = allTrades[allTrades['length'] - 1]['timestamp'];
    }
    return allTrades;
}

if (typeof require !== 'undefined' && require.main === module) {
    fetchClosedOrders("BTC/USDT");
}