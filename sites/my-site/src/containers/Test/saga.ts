import { put, takeEvery, call, SagaResult } from "@my-site/core/redux";
import { makePostReq, request } from "@my-site/core/request";

import { actions } from "./slice";

export function* hiHandler(): SagaResult {
  try {
    const url = `/api/test`;
    console.log("hi");
    const response = yield call(request, url, makePostReq());
    yield put(actions.helloPut(response));
  } catch (e) {
    yield put(actions.helloPut([1]));
  }
}

export default function* repository(): Generator<unknown> {
  yield takeEvery(actions.hello.type, hiHandler);
}
