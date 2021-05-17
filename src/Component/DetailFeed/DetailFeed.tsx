import React, { FC, useCallback } from "react";
import { CommentItem, WriteFeed } from "..";
import { reqPostComment } from "../../lib/apis/report";
import { Comment, CommentReq } from "../../lib/payloads/report";
import { getImgSrc } from "../../lib/utils";
import * as S from "./style";

interface Props {
  profileImgSrc: string;
  reporterName: string;
  location: string;
  time: string;
  content: string;
  imgs: string[];
  tags: string[];
  comments: Comment[];
  onCommentSubmit: (data: CommentReq) => void;
  id: number;
}

const DetailFeed: FC<Props> = ({
  id,
  location,
  profileImgSrc,
  reporterName,
  content,
  time,
  imgs,
  tags,
  comments,
  onCommentSubmit,
}) => {
  const commentSubmit = useCallback(
    (content: string) => {
      onCommentSubmit({ id, content });
    },
    [id]
  );

  return (
    <S.Container>
      <S.ContentWrap>
        <S.DetailFeedHeader>
          <S.FeedWriterImg src={profileImgSrc} />
          <S.DetailFeedInfoWrap>
            <S.DetailFeedInfo>
              <div>{reporterName}</div>
            </S.DetailFeedInfo>
            <S.DetailFeedTime>{time}</S.DetailFeedTime>
          </S.DetailFeedInfoWrap>
        </S.DetailFeedHeader>
        <S.DetailFeedContent>{content}</S.DetailFeedContent>
        <S.Tags>
          {tags.map((tag: string, i: number) => (
            <S.Tag key={i}>#{tag}</S.Tag>
          ))}
        </S.Tags>
        <S.DetailFeedImg>
          {imgs.map((src: string, i: number) => (
            <S.DetailFeedImgItem key={i}>
              <img src={src} />
            </S.DetailFeedImgItem>
          ))}
        </S.DetailFeedImg>
      </S.ContentWrap>
      <S.CommentWrap>
        <S.Comments>
          {comments.map(({ comment_id, content, name, profile_uri }) => (
            <CommentItem
              key={comment_id}
              content={content}
              name={name}
              profile={getImgSrc(profile_uri)}
            />
          ))}
        </S.Comments>
        <S.WriteComment>
          <WriteFeed
            onSubmit={commentSubmit}
            imgSrc={profileImgSrc}
            btnText="댓글을 입력하세요..."
            mode="input"
          />
        </S.WriteComment>
      </S.CommentWrap>
    </S.Container>
  );
};

export default DetailFeed;
