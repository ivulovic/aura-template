import { RequestMethodTypes } from './types';

/**
 * Create configuration for every request with `fetch`
 */
function makeGenericReq(method: RequestMethodTypes, body = null, customHeader = {}): RequestInit {
  return {
    method,
    body: body ? JSON.stringify(body) : undefined,
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...customHeader,
    },
  };
}

/**
 * Create generic `GET` request
 */
export function makeGetReq(options?): RequestInit {
  return makeGenericReq('GET', null, options);
}

/**
 * Create generic `POST` request
 */
export function makePostReq(body?, options?): RequestInit {
  return makeGenericReq('POST', body, options);
}

/**
 * Create generic `PATCH` request
 */
export function makePatchReq(body, options?): RequestInit {
  return makeGenericReq('PATCH', body, options);
}

/**
 * Create generic `DELETE` request
 */
export function makeDeleteReq(options?): RequestInit {
  return makeGenericReq('DELETE', null, options);
}
