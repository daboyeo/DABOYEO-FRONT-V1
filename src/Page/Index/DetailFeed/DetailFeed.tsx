import React, { FC, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { DetailFeed } from "../../../Component";
import { reqPostComment } from "../../../lib/apis/report";
import { CommentReq } from "../../../lib/payloads/report";
import { getAfterTime, getImgSrc } from "../../../lib/utils";
import { getDetailFeed } from "../../../Module/Action/detailFeed";
import { Store } from "../../../Module/Reducer";
import * as S from "./style";

const DetailFeedPage: FC = () => {
  const dispatch = useDispatch();
  const { feedData, loading } = useSelector(
    (store: Store) => ({
      feedData: store.detailFeed,
      loading: store.loading["detailFeed/GET_DETAIL_FEED"],
    }),
    shallowEqual
  );

  const commentSubmit = useCallback(async ({ id, content }: CommentReq) => {
    try {
      await reqPostComment({
        id,
        content,
      });
      dispatch(getDetailFeed(id));
      alert("댓글을 작성했습니다");
    } catch (err) {}
  }, []);

  return feedData.report_id && !loading ? (
    <S.ContainerWrap>
      <S.Container>
        <DetailFeed
          onCommentSubmit={commentSubmit}
          id={feedData.report_id}
          comments={feedData.comments}
          tags={feedData.tags}
          content={feedData.content}
          imgs={feedData.image_uris.map((uri: string) => getImgSrc(uri))}
          location={feedData.location}
          profileImgSrc={getImgSrc(feedData.reporter_profile_uri)}
          reporterName={feedData.reporter_name}
          time={getAfterTime(feedData.created_at)}
        />
        </S.Container>
    </S.ContainerWrap>
  ) : (
    <></>
  );
};

export default DetailFeedPage;
