import React, { FC, MouseEvent } from "react";
import * as S from "./style";

interface Props {
  imgSrc: string;
  onBackgroundClick: (e: MouseEvent<HTMLDivElement>) => void;
}

const OverViewImg: FC<Props> = ({ imgSrc, onBackgroundClick }) => {
  return (
    <S.Container onClick={onBackgroundClick}>
      <S.OverImg src={imgSrc} />
    </S.Container>
  );
};

export default OverViewImg;
