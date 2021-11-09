import ccxt
import dotenv
import os

dotenv.load_dotenv()

# Why does JS CCXT have bitrue module but python ccxt doesn't. I thought the JS transpiled into python??
exchange = ccxt.bitrue({
    'apiKey': os.environ['BITRUE_KEY'],
    'secret': os.environ['BITRUE_SECRET'],
    'rateLimitEnabled': False
})

