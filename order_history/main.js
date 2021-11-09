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

    const orders = await exchange.fetchClosedOrders("BTC/USDT");

    console.log(orders);
}

test();