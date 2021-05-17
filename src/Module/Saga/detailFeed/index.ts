import { call, put, takeEvery, select } from "@redux-saga/core/effects";
import {
  getDetailFeed,
  getDetailFeedSuccess,
  GET_DETAIL_FEED,
} from "../../Action/detailFeed";
import { finishLoading, startLoading } from "../../Action/loading";
import * as reportApi from "../../../lib/apis/report";
import { AxiosResponse } from "axios";
import { ReportDetail } from "../../../lib/payloads/report";

function* getDetailFeedSaga(action: ReturnType<typeof getDetailFeed>) {
  yield put(startLoading(GET_DETAIL_FEED));
  try {
    const res: AxiosResponse<ReportDetail> = yield call(
      reportApi.reqGetDetailFeed,
      action.payload.id
    );

    yield put(getDetailFeedSuccess(res.data));
  } catch (err) {}
  yield put(finishLoading(GET_DETAIL_FEED));
}

function* detailFeedSaga() {
  yield takeEvery(GET_DETAIL_FEED, getDetailFeedSaga);
}

export default detailFeedSaga;
