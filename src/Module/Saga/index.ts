import { all } from "@redux-saga/core/effects";
import reportSaga from "./report";

function* rootSaga() {
  yield all([reportSaga()]);
}

export default rootSaga;
