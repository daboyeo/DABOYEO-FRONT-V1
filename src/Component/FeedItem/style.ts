import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 16%);
  overflow: hidden;
  position: relative;
  & + & {
    margin-top: 20px;
  }
`;

export const AdminButtonWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;
export const AdminButtonBackground = styled.div<{ color: string }>`
  flex: 1;
  transition: 125ms all;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 500ms all;

  &:hover {
    opacity: 0.95;

    background-color: ${(props) => props.color};
    & > img {
      cursor: pointer;
      transform: scale(1.3);
    }
  }
`;
export const AdminBtnIcon = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  transition: 350ms all;
  padding: 10px;
`;

export const FeedContentWrap = styled.div`
  padding: 10px;
`;
export const FeedContent = styled.div`
  white-space: pre;
`;

export const FeedHeader = styled.div`
  display: flex;
  align-items: center;
`;
export const WriterImg = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
`;
export const WriterName = styled.span`
  margin-left: 10px;
  flex: 1;

  > a {
    color: unset;
    text-decoration: none;
  }
`;

export const Date = styled.div`
  text-align: right;
`;

export const FeedImgs = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const FeedImgWrap = styled.div`
  flex: 1 1 40%;
  text-align: center;
`;
export const FeedImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TagWrap = styled.div``;
export const Tag = styled.span`
  color: #6979b5;
  cursor: pointer;
`;
export const Location = styled(Tag)`
  margin-right: 10px;
`;

export const KakaoMap = styled.div`
  width: 100%;
  height: 300px;
`;

export const TagLink = styled(Link)`
  display: inline;
  text-decoration: none;

  & + & {
    margin-left: 3px;
  }
`;
