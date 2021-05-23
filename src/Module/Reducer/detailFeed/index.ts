import DetailFeedAction, {
  GET_DETAIL_FEED_SUCCESS,
} from "../../Action/detailFeed";
import { ReportDetail } from "../../../lib/payloads/report";

export type DetailFeedState = ReportDetail;

const initialState: DetailFeedState = {
  comments: [],
  content: "",
  created_at: "",
  image_uris: [],
  is_sympathy: false,
  location: "",
  num_of_sympathy: 0,
  report_id: 0,
  reporter_name: "",
  reporter_profile_uri: "",
  tags: [],
  reporter_id: "",
  updated_at: "",
};

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
