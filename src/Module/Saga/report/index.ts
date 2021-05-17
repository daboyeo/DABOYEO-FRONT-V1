import * as reportApi from "../../../lib/apis/report";
import { call, put, takeEvery } from "redux-saga/effects";
import { ReportListItem } from "../../../lib/payloads/report";
import { finishLoading, startLoading } from "../../Action/loading";
import {
  getAllReports,
  getAllReportsSuccess,
  GET_ALL_REPORTS,
} from "../../Action/report";
import { AxiosResponse } from "axios";

function* getAllReportsSaga(action: ReturnType<typeof getAllReports>) {
  yield put(startLoading(action.type));
  try {
    const res: AxiosResponse<{ reports: ReportListItem[] }> = yield call(
      reportApi.reqGetRepots,
      action.payload.option
    );
    yield put(getAllReportsSuccess(res.data.reports));
  } catch (err) {}
  yield put(finishLoading(action.type));
}

function* reportSaga() {
  yield takeEvery(GET_ALL_REPORTS, getAllReportsSaga);
}

export default reportSaga;
