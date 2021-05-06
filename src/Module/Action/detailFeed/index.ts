export const SET_DETAIL_FEED_ID = "detailFeed/SET_DETAIL_FEED_ID" as const;

export const setDetailFeedId = (id: number) => ({
  type: SET_DETAIL_FEED_ID,
  payload: { id },
});

type DetailFeedAction = ReturnType<typeof setDetailFeedId>;

export default DetailFeedAction;
