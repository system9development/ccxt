import ccxt
import dotenv
import os

dotenv.load_dotenv()

# Will use this file later to test transpiled new fetchOrders along with new DB operations for order insertion
exchange = ccxt.bitrue({
    'apiKey': os.environ['BITRUE_KEY'],
    'secret': os.environ['BITRUE_SECRET'],
    'rateLimitEnabled': False
})

