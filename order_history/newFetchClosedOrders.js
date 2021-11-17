"use strict";

const ccxt = require('ccxt');
var dotenv = require('dotenv').config();
const util = require('util');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function test() {
    const exchange = new ccxt.bitrue({
        apiKey: process.env.BITRUE_KEY,
        secret: process.env.BITRUE_SECRET,
        enableRateLimit: true,
    });

    const allTrades = [];
    let i = 0;
    let since = exchange.parse8601('2015-01-01T00:00:00Z');
    let seconds = 5;
    while (true) {

        let orders = await exchange.fetchTrades("BTC/USDT", since);

        if (allTrades['length'] > 0) {
            if (orders[orders['length'] - 1]['timestamp'] == allTrades[allTrades['length'] - 1]['timestamp']) {
                break;
            }
        }

        if (i == 0) {
            let j = 0;
            for (j; j < orders['length'] - 1; j++) {
                allTrades.push(orders[j]);
            }
        } else {
            let j = 1;
            for (j; j < orders['length'] - 1; j++) {
                allTrades.push(orders[j]);
            }
        }

        since = allTrades[allTrades['length'] - 1]['timestamp'];

        await sleep(seconds * 1000);

        console.log(orders);
        console.log(orders.length);
    }

    console.log(allTrades['length']);

}

test();