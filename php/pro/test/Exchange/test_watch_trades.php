<?php
namespace ccxt;

// ----------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -----------------------------------------------------------------------------
use React\Async;
use React\Promise;
include_once PATH_TO_CCXT . '/test/exchange/base/test_trade.php';
include_once PATH_TO_CCXT . '/test/exchange/base/test_shared_methods.php';

function test_watch_trades($exchange, $skipped_properties, $symbol) {
    return Async\async(function () use ($exchange, $skipped_properties, $symbol) {
        $method = 'watchTrades';
        $now = $exchange->milliseconds();
        $ends = $now + 15000;
        while ($now < $ends) {
            $response = null;
            try {
                $response = Async\await($exchange->watch_trades($symbol));
            } catch(\Throwable $e) {
                if (!is_temporary_failure($e)) {
                    throw $e;
                }
                $now = $exchange->milliseconds();
                continue;
            }
            assert_non_emtpy_array($exchange, $skipped_properties, $method, $response);
            $now = $exchange->milliseconds();
            for ($i = 0; $i < count($response); $i++) {
                test_trade($exchange, $skipped_properties, $method, $response[$i], $symbol, $now);
            }
            if (!(is_array($skipped_properties) && array_key_exists('timestamp', $skipped_properties))) {
                assert_timestamp_order($exchange, $method, $symbol, $response);
            }
        }
    }) ();
}
