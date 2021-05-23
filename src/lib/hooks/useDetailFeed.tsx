import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { getDetailFeed } from "../../Module/Action/detailFeed";

export const useDetailFeedDispatch = (memo?: number) => {
  const dispatch = useDispatch();
  const setDetailFeedId = useCallback(
    (id: number) => {
      if (id === memo) return;
      dispatch(getDetailFeed(id));
    },
    [memo]
  );

  return {
    setDetailFeedId,
  };
};
