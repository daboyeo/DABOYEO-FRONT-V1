import { combineReducers } from "redux";
import loadingReducer from "./loading";
import overViewImgReducer from "./overViewImg";
import reportReducer from "./report";
import writeModalReducer from "./writeModal";
import detailFeedReducer from "./detailFeed";
import profileReducer from "./profile";

const rootReducer = combineReducers({
  overViewImg: overViewImgReducer,
  writeModal: writeModalReducer,
  report: reportReducer,
  loading: loadingReducer,
  detailFeed: detailFeedReducer,
  profile: profileReducer,
});

export default rootReducer;
export type Store = ReturnType<typeof rootReducer>;
