import DetailFeedAction, {
  GET_DETAIL_FEED_SUCCESS,
} from "../../Action/detailFeed";
import { ReportDetail } from "../../../lib/payloads/report";

export type DetailFeedState = ReportDetail | null;

const initialState: DetailFeedState = null;

const detailFeedReducer = (
  state: DetailFeedState = initialState,
  action: DetailFeedAction
): DetailFeedState => {
  switch (action.type) {
    case GET_DETAIL_FEED_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default detailFeedReducer;
