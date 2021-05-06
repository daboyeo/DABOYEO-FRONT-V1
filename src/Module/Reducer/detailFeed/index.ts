import DetailFeedAction, { SET_DETAIL_FEED_ID } from "../../Action/detailFeed";

export interface DetailFeedReducerState {
  id: number;
}

const initialState: DetailFeedReducerState = {
  id: 0,
};

const detailFeedReducer = (
  state: DetailFeedReducerState = initialState,
  action: DetailFeedAction
) => {
  switch (action.type) {
    case SET_DETAIL_FEED_ID: {
      return {
        ...state,
        id: action.payload.id,
      };
    }
    default: {
      return state;
    }
  }
};

export default detailFeedReducer;
