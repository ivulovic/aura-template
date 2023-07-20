import { put, takeEvery, call, SagaResult, delay } from "@my-site/core/redux";
import { makePostReq, request } from "@my-site/core/request";

import { actions } from "./slice";

export function* hiHandler(): SagaResult {
  try {
    const url = `/api/echo`;
    const response = yield call(
      request,
      url,
      makePostReq({
        id: "1",
        data: [1, 2, 3],
      }),
    );
    yield delay(2000);
    yield put(actions.loadDataDone(response.data));
  } catch (e) {
    yield put(actions.loadDataFailed());
  }
}

export default function* repository(): Generator<unknown> {
  yield takeEvery(actions.loadData.type, hiHandler);
}
