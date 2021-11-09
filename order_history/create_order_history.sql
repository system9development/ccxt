CREATE TABLE order_history(
time TIMESTAMPTZ NOT NULL, exchange_order_id TEXT NOT NULL,
exchange TEXT NOT NULL,
order_type TEXT NOT NULL,
limit_type TEXT NOT NULL,
quantity DOUBLE PRECISION NOT NULL,
quantity_remaining DOUBLE PRECISION NOT NULL,
commission DOUBLE PRECISION NOT NULL,
price DOUBLE PRECISION NOT NULL,
price_per_unit DOUBLE PRECISION NOT NULL,
immediate_or_cancel BOOLEAN NOT NULL,
closed BOOLEAN NOT NULL);