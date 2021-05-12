import { all } from "@redux-saga/core/effects";
import detailFeedSaga from "./detailFeed";
import reportSaga from "./report";

function* rootSaga() {
  yield all([reportSaga(), detailFeedSaga()]);
}

export default rootSaga;
