import { combineReducers } from "redux";
import overViewImgReducer from "./overViewImg";

const rootReducer = combineReducers({
  overViewImg: overViewImgReducer,
});

export default rootReducer;
export type Store = ReturnType<typeof rootReducer>;
