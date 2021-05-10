import { ReportDetail } from "../../../lib/payloads/report";

export const GET_DETAIL_FEED = "detailFeed/GET_DETAIL_FEED" as const;
export const GET_DETAIL_FEED_SUCCESS = "detailFeed/GET_DETAIL_FEED_SUCCESS" as const;

export const getDetailFeed = (id: number) => ({
  type: GET_DETAIL_FEED,
  payload: { id },
});

export const getDetailFeedSuccess = (payload: ReportDetail) => ({
  type: GET_DETAIL_FEED_SUCCESS,
  payload,
});

type DetailFeedAction = ReturnType<typeof getDetailFeedSuccess>;

export default DetailFeedAction;
