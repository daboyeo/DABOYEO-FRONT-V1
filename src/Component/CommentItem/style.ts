import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 5px;
  }
`;

export const CommenterImg = styled.img`
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 50%;
`;

export const CommentWrap = styled.div`
  margin-left: 10px;
`;
export const CommenterName = styled.div``;
export const CommentContent = styled.div``;
