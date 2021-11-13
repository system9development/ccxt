import psycopg2
from typing import Dict

class TimescaleOps:
    def __init__(self):
        self.conn = None

    def connect(self):
        try:
            self.conn = psycopg2.connect(host= "localhost", database = "order_history", user = "test", password = "test")
        except Exception as e:
            print(f"Failure to connect to DB: {e}")

    def disconnect(self):
        if self.conn is not None:
            self.conn.close()

    def insert_order(self, table_name: str,  order: Dict):
        sql = f"INSERT INTO {table_name} VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
        cursor = self.conn.cursor()
        cursor.execute(sql, (order['time'], order['exchange_order_id'], order['exchange'], order['order_type'], order['limit_type'], order['quantity'], order['quantity_remaining'], order['commission'], order['price'], order['price_per_unit'], order['immediate_or_cancel'], order['closed']))
        self.conn.commit()
        cursor.close()
        self.disconnect()
