import React, { FC } from "react";
import * as S from "./style";

type WriteFeedType = "button" | "input";

interface Props {
  btnText: string;
  imgSrc: string;
  onClick?: () => void;
  mode?: WriteFeedType;
}

const WriteFeed: FC<Props> = ({
  onClick,
  btnText,
  imgSrc,
  mode = "button",
}) => {
  return (
    <S.Container>
      <S.UserImg src={imgSrc} />
      {mode === "button" ? (
        <S.WriteInputButton onClick={onClick}>{btnText}</S.WriteInputButton>
      ) : (
        <S.WriteInput placeholder={btnText} />
      )}
    </S.Container>
  );
};

export default WriteFeed;
