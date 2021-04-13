import React, { FC } from "react";
import * as S from "./style";

interface Props {
  placeHolder: string;
  imgSrc: string;
  onClick: () => void;
}

const WriteFeed: FC<Props> = ({ placeHolder, imgSrc }) => {
  return (
    <S.Container>
      <S.UserImg src={imgSrc} />
      <S.WriteInput disabled placeholder={placeHolder} />
    </S.Container>
  );
};

export default WriteFeed;
