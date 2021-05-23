import React, {
  FC,
  useCallback,
  MouseEvent,
  useRef,
  useEffect,
  memo,
} from "react";
import { Link } from "react-router-dom";
import { CheckIcon, RejectIcon } from "../../Asset";
import KakaoMap from "../../lib/kakaoMap";
import * as S from "./style";

export type ClickHandler = (id: number) => void;

interface Props {
  date: string;
  id: number;
  reporterId: string;
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
  reporterId,
  clickHandler,
  imgClickHandler,
  onSuccessHandler,
  onFailHandler,
}) => {
  const kakaoMapRef = useRef<any>();

  useEffect(() => {
    kakaoMapRef.current = new KakaoMap(
      document.getElementById(`kakao-map-${id}`)
    );
    const [lat, lot] = location.split(" ");
    kakaoMapRef.current.center(Number(lat), Number(lot));
    kakaoMapRef.current.draw({ x: lot, y: lat });
  }, []);

  const onSuccess = useCallback(() => {
    onSuccessHandler(id);
  }, []);
  const onFail = useCallback(() => {
    onFailHandler(id);
  }, []);

  return (
    <S.Container onClick={clickHandler && (() => clickHandler(id))}>
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
          <S.WriterName>
            <Link to={`/profile/${reporterId}`}>{userName}</Link>
          </S.WriterName>
          <S.Date>{date}</S.Date>
        </S.FeedHeader>
        <S.FeedContent>{content}</S.FeedContent>
        <S.TagWrap>
          {tags.map((tag: string, i: number) => (
            <S.TagLink to={`/search/${tag}`}>
              <S.Tag key={i}>#{tag}</S.Tag>
            </S.TagLink>
          ))}
        </S.TagWrap>
      </S.FeedContentWrap>
      <S.KakaoMap id={`kakao-map-${id}`} />
    </S.Container>
  );
};

export default memo(FeedItem);
