import React, { FC } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { CommentItem, WriteFeed } from "../../../Component";
import { ReportListItem } from "../../../lib/payloads/report";
import { Store } from "../../../Module/Reducer";
import * as S from "./style";

const DetailFeedPage: FC = () => {
  const { id, feeds } = useSelector(
    (store: Store) => ({
      id: store.detailFeed.id,
      feeds: store.report.reports,
    }),
    shallowEqual
  );

  const feedData = feeds.find((data: ReportListItem) => data.report_id === id);

  return feedData ? (
    <S.Container>
      <S.ContentWrap>
        <S.DetailFeedHeader>
          <S.FeedWriterImg src={feedData.reporter_profile_uri} />
          <S.DetailFeedInfoWrap>
            <S.DetailFeedInfo>
              <div>{feedData.reporter_name}</div>
              <div>{feedData.location}</div>
            </S.DetailFeedInfo>
            <S.DetailFeedTime>{feedData.created_at}</S.DetailFeedTime>
          </S.DetailFeedInfoWrap>
        </S.DetailFeedHeader>
        <S.DetailFeedContent>{feedData.content}</S.DetailFeedContent>
        <S.DetailFeedImg>
          {feedData.image_uris.map((src: string, i: number) => (
            <S.DetailFeedImgItem key={i}>
              <img src={src} />
            </S.DetailFeedImgItem>
          ))}
        </S.DetailFeedImg>
      </S.ContentWrap>
      <S.CommentWrap>
        <S.Comments>
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
        </S.Comments>
        <S.WriteComment>
          <WriteFeed
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFZ0FGTrytcVajqgDEGFJX8J8kO-1WVG_wQ&usqp=CAU"
            btnText="댓글을 입력하세요..."
          />
        </S.WriteComment>
      </S.CommentWrap>
    </S.Container>
  ) : (
    <></>
  );
};

export default DetailFeedPage;
