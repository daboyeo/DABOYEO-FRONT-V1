import { applyMiddleware, createStore } from "redux";
import rootReducer from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createReduxSaga from "redux-saga";
import rootSaga from "./Saga";

const sagaInstance = createReduxSaga();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaInstance))
);

sagaInstance.run(rootSaga);

export default store;
