"use strict";

const ccxt = require('ccxt');
var dotenv = require('dotenv').config();
const util = require('util');

async function test() {
    const exchange = new ccxt.bitrue({
        apiKey: process.env.BITRUE_KEY,
        secret: process.env.BITRUE_SECRET,
        enableRateLimit: true,
    });


    var allTrades = [];
    var i = 0;
    var since = exchange.parse8601('2015-01-01T00:00:00Z');
    while (true) {

        if (i != 0) {
            since = allTrades[allTrades['length'] - 1]['timestamp'];
            console.log(since);
        }

        var orders = await exchange.fetchClosedOrders("BTC/USDT", since, 20);
        // If the last order in the trades we just added == last order in our last request, this is the end of all the orders
        if (allTrades[allTrades['length'] - 1]['info']['orderId'] == orders[orders['length'] - 1]['info']['orderId']) {
            break;
        }
        if (i == 0) {
            for (let i = 0; i < orders['length']; i++) {
                allTrades.push(orders[i])
            }
        } else {
            for (let j = 1; j < orders['length']; j++) {
                allTrades.push(orders[i]);
            }
        }
        i++;
    }
    console.log(allTrades);
    console.log(allTrades.length);
}

test();