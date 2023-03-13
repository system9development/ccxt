// ----------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code
// EDIT THE CORRESPONDENT .ts FILE INSTEAD

// ----------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code
// EDIT THE CORRESPONDENT .ts FILE INSTEAD

/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
export const __esModule: boolean;
/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
declare function _exports(url: any, opts: any): Promise<any>;
declare namespace _exports {
    /**
     * Redirect code matching
     *
     * @param   Number   code  Status code
     * @return  Boolean
     */
    export function isRedirect(code: any): boolean;
    export { fetch as default };
    const Promise_1: PromiseConstructor;
    export { Promise_1 as Promise };
    export { http };
    export { https };
    export { Headers };
    export { Request };
    export { Response };
    export { FetchError };
    export { __esModule };
}
export = _exports;
/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
declare function fetch(url: any, opts: any): Promise<any>;
declare namespace fetch { }
import http = require("http");
import https = require("https");
declare class Headers {
    /**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
    constructor(...args: any[]);
    /**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
    get(name: any): any;
    /**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
    forEach(callback: any, ...args: any[]): void;
    /**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
    set(name: any, value: any): void;
    /**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
    append(name: any, value: any): void;
    /**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
    has(name: any): boolean;
    /**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
    delete(name: any): void;
    /**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
    raw(): any;
    /**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
    keys(): any;
    /**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
    values(): any;
    entries: () => any;
    /**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
    [Symbol.iterator](): any;
    [MAP]: any;
}
/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
declare class Request {
    constructor(input: any, ...args: any[]);
    follow: any;
    compress: any;
    counter: any;
    agent: any;
    get method(): any;
    get url(): string;
    get headers(): Headers;
    get redirect(): any;
    /**
  * Clone this request
  *
  * @return  Request
  */
    clone(): Request;
    [INTERNALS$2]: {
        method: any;
        redirect: any;
        headers: Headers;
        parsedURL: _require$2.UrlWithStringQuery;
    };
}
/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
declare class Response {
    constructor(...args: any[]);
    get url(): any;
    get status(): any;
    /**
  * Convenience property representing if the request ended normally
  */
    get ok(): boolean;
    get statusText(): any;
    get headers(): Headers;
    /**
  * Clone this response
  *
  * @return  Response
  */
    clone(): Response;
    [INTERNALS$1]: {
        url: any;
        status: any;
        statusText: any;
        headers: Headers;
    };
}
/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */
/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
declare function FetchError(message: any, type: any, systemError: any): void;
declare class FetchError {
    /**
     * fetch-error.js
     *
     * FetchError interface for operational errors
     */
    /**
     * Create FetchError instance
     *
     * @param   String      message      Error message for human
     * @param   String      type         Error type for machine
     * @param   String      systemError  For Node.js system error
     * @return  FetchError
     */
    constructor(message: any, type: any, systemError: any);
    message: any;
    type: any;
    code: any;
    errno: any;
    constructor: typeof FetchError;
    name: string;
}
declare const MAP: unique symbol;
declare const INTERNALS$2: unique symbol;
import _require$2 = require("url");
declare const INTERNALS$1: unique symbol;
