import ccxt
import dotenv
import os
import asyncio
from timescale_ops import TimescaleOps

dotenv.load_dotenv()

async def main():
    exchange = ccxt.bitrue({
        'apiKey': os.environ['BITRUE_KEY'],
        'secret': os.environ['BITRUE_SECRET'],
        'rateLimitEnabled': False
    })

    orders = await exchange.fetchClosedOrders()   

    db = TimescaleOps()
    db.connect()
    # TODO: Test this
    for order in orders:
        db.insert_order('bitrue_btcusdt_testuser', 'time')

if __name__ == "__main__":
    asyncio.get_event_loop().run_until_complete(main())