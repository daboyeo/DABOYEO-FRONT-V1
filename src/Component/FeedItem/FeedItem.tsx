import React, { FC, useCallback, MouseEvent } from "react";
import { CheckIcon, RejectIcon } from "../../Asset";
import * as S from "./style";

export type ClickHandler = (id: number) => void;

interface Props {
  date: string;
  id: number;
  imgSrc: string[];
  userName: string;
  isAdminMode?: boolean;
  content: string;
  profileImgSrc: string;
  tags: string[];
  location: string;
  clickHandler?: ClickHandler;
  imgClickHandler?: (e: MouseEvent<HTMLImageElement>) => void;
  onSuccessHandler?: ClickHandler;
  onFailHandler?: ClickHandler;
}

const FeedItem: FC<Props> = ({
  id,
  imgSrc,
  userName,
  isAdminMode,
  profileImgSrc,
  content,
  date,
  tags,
  location,
  clickHandler,
  imgClickHandler,
  onSuccessHandler,
  onFailHandler,
}) => {
  const onSuccess = useCallback(() => {
    onSuccessHandler(id);
  }, []);
  const onFail = useCallback(() => {
    onFailHandler(id);
  }, []);

  return (
    <S.Container onClick={() => clickHandler(id)}>
      {isAdminMode && (
        <S.AdminButtonWrap>
          <S.AdminButtonBackground color="#07bc0c">
            <S.AdminBtnIcon src={CheckIcon} onClick={onSuccess} />
          </S.AdminButtonBackground>
          <S.AdminButtonBackground color="#e74c3c">
            <S.AdminBtnIcon src={RejectIcon} onClick={onFail} />
          </S.AdminButtonBackground>
        </S.AdminButtonWrap>
      )}
      <S.FeedContentWrap>
        <S.FeedHeader>
          <S.WriterImg src={profileImgSrc} />
          <S.WriterName>{userName}</S.WriterName>
          <S.Date>{date}</S.Date>
        </S.FeedHeader>
        <S.FeedContent>{content}</S.FeedContent>
        <S.TagWrap>
          <S.Location>#{location}</S.Location>
          {tags.map((tag: string) => (
            <S.Tag>#{tag}</S.Tag>
          ))}
        </S.TagWrap>
      </S.FeedContentWrap>
      <S.FeedImgs>
        {imgSrc.map((src: string, i: number) => (
          <S.FeedImgWrap key={i}>
            <S.FeedImg key={i} src={src} onContextMenu={imgClickHandler} />
          </S.FeedImgWrap>
        ))}
      </S.FeedImgs>
    </S.Container>
  );
};

export default FeedItem;
