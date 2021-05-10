import React, { FC } from "react";
import { WriteFeed } from "..";
import * as S from "./style";

interface Props {
  profileImgSrc: string;
  reporterName: string;
  location: string;
  time: string;
  content: string;
  imgs: string[];
  tags: string[];
}

const DetailFeed: FC<Props> = ({
  location,
  profileImgSrc,
  reporterName,
  content,
  time,
  imgs,
  tags,
}) => {
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
          {tags.map((tag: string) => (
            <S.Tag>#{tag}</S.Tag>
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
        <S.Comments></S.Comments>
        <S.WriteComment>
          <WriteFeed
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
