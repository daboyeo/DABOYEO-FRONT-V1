import React, { FC } from "react";
import * as S from "./style";

const CommentItem: FC = () => {
  return (
    <S.Container>
      <S.CommenterImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFZ0FGTrytcVajqgDEGFJX8J8kO-1WVG_wQ&usqp=CAU" />
      <S.CommentWrap>
        <S.CommenterName>공영길N</S.CommenterName>
        <S.CommentContent>댓글</S.CommentContent>
      </S.CommentWrap>
    </S.Container>
  );
};

export default CommentItem;
