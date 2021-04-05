import React, { FC, useCallback, MouseEvent } from "react";
import { CheckIcon, RejectIcon } from "../../Asset";
import * as S from "./style";

export type ClickHandler = (id: number) => void;

interface Props {
  imgSrc: string[];
  userName: string;
  isAdminMode?: boolean;
  clickHandler?: ClickHandler;
  imgClickHandler?: (e: MouseEvent<HTMLImageElement>) => void;
  onSuccessHandler?: ClickHandler;
  onFailHandler?: ClickHandler;
}

const content = `안녕하세요! 
대전에 거주하는 공영길입니다. 
오늘 끔찍한 사건을 목격했어요!
조심하세용
`;

const FeedItem: FC<Props> = ({
  imgSrc,
  userName,
  isAdminMode,
  clickHandler,
  imgClickHandler,
  onSuccessHandler,
  onFailHandler,
}) => {
  const containerClickHandler = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        clickHandler(1);
      }
    },
    [clickHandler]
  );

  const onSuccess = useCallback(() => {
    onSuccessHandler(1);
  }, [onSuccessHandler]);
  const onFail = useCallback(() => {
    onFailHandler(1);
  }, [onFailHandler]);

  return (
    <S.Container onClick={containerClickHandler}>
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
          <S.WriterImg src="https://image.flaticon.com/icons/png/512/634/634741.png" />
          <S.WriterName>{userName}</S.WriterName>
        </S.FeedHeader>
        <S.FeedContent>{content}</S.FeedContent>
      </S.FeedContentWrap>
      <S.FeedImgs>
        {imgSrc.map((src: string, index: number) => (
          <S.FeedImgWrap key={index}>
            <S.FeedImg key={index} src={src} onContextMenu={imgClickHandler} />
          </S.FeedImgWrap>
        ))}
      </S.FeedImgs>
    </S.Container>
  );
};

export default FeedItem;
