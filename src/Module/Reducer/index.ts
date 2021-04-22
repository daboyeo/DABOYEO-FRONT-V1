import { combineReducers } from "redux";
import overViewImgReducer from "./overViewImg";
import writeModalReducer from "./writeModal";

const rootReducer = combineReducers({
  overViewImg: overViewImgReducer,
  writeModal: writeModalReducer,
});

export default rootReducer;
export type Store = ReturnType<typeof rootReducer>;
