import React, { FC } from "react";
import * as S from "./style";

interface Props {
  profile: string;
  name: string;
  content: string;
}

const CommentItem: FC<Props> = ({ content, name, profile }) => {
  return (
    <S.Container>
      <S.CommenterImg src={profile} />
      <S.CommentWrap>
        <S.CommenterName>{name}</S.CommenterName>
        <S.CommentContent>{content}</S.CommentContent>
      </S.CommentWrap>
    </S.Container>
  );
};

export default CommentItem;
