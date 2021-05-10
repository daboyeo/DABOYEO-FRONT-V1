import DetailFeedAction, {
  GET_DETAIL_FEED_SUCCESS,
} from "../../Action/detailFeed";
import { ReportDetail } from "../../../lib/payloads/report";

export interface DetailFeedState extends ReportDetail {}

const initialState: ReportDetail = {
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
    } q
  }
};

export default detailFeedReducer;
