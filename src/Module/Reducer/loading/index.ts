import { GET_DETAIL_FEED } from "../../Action/detailFeed";
import LoadingAction, {
  FINISH_LOADING,
  LoadingType,
  START_LOADING,
} from "../../Action/loading";
import { GET_ALL_REPORTS } from "../../Action/report";

interface LoadingReducerState {
  [GET_ALL_REPORTS]: boolean;
  [GET_DETAIL_FEED]: boolean;
}

const initialState: LoadingReducerState = {
  [GET_ALL_REPORTS]: false,
  [GET_DETAIL_FEED]: false,
};

const loadingReducer = (
  state: LoadingReducerState = initialState,
  action: LoadingAction
): LoadingReducerState => {
  switch (action.type) {
    case START_LOADING: {
      return {
        ...state,
        [action.payload.loading]: true,
      };
    }
    case FINISH_LOADING: {
      return {
        ...state,
        [action.payload.loading]: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default loadingReducer;
