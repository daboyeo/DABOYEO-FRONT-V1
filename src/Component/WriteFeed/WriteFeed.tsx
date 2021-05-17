import React, { FC, useCallback } from "react";
import useEnter from "../../lib/hooks/useEnter";
import useInput from "../../lib/hooks/useInput";
import * as S from "./style";

type WriteFeedType = "button" | "input";

interface Props {
  btnText: string;
  imgSrc: string;
  onClick?: () => void;
  onSubmit?: (content: string) => void;
  mode?: WriteFeedType;
}

const WriteFeed: FC<Props> = ({
  onClick,
  btnText,
  imgSrc,
  mode = "button",
  onSubmit,
}) => {
  const [comment, setComment, changeComment] = useInput<HTMLInputElement>("");
  const commentSubmit = useCallback(() => {
    setComment("");
    onSubmit(comment);
  }, [comment, onSubmit]);

  const commentEnter = useEnter(commentSubmit);
  return (
    <S.Container>
      <S.UserImg src={imgSrc} />
      {mode === "button" ? (
        <S.WriteInputButton onClick={onClick}>{btnText}</S.WriteInputButton>
      ) : (
        <S.WriteInput
          onKeyDown={commentEnter}
          value={comment}
          onChange={changeComment}
          placeholder={btnText}
        />
      )}
    </S.Container>
  );
};

export default WriteFeed;
