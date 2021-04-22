import React, { FC } from "react";
import * as S from "./style";

interface Props {
  btnText: string;
  imgSrc: string;
  onClick: () => void;
}

const WriteFeed: FC<Props> = ({ onClick, btnText, imgSrc }) => {
  return (
    <S.Container>
      <S.UserImg src={imgSrc} />
      <S.WriteInput onClick={onClick}>{btnText}</S.WriteInput>
    </S.Container>
  );
};

export default WriteFeed;
