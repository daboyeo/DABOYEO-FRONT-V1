import styled, { keyframes } from "styled-components";

export const slideUp = keyframes`
    0% {
        opacity:0;
        transform:translateY(100px);
    }
    100% {
        opacity:1;
        transform:translateY(0);

    }
`;

export const Container = styled.div`
  width: 420px;
  animation: ${slideUp} 0.4s;
  transition: 100ms all;

  @media (max-width: 1600px) {
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: flex-end; */
    /* width: calc(100vw - 15px); */
    /* height: 100vh; */
  }
`;

export const WriteComment = styled.div`
  & > div {
    background-color: transparent;
    box-shadow: none;
    padding: 0;
  }
`;

export const Comments = styled.div`
  height: 170px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CommentWrap = styled.div`
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  margin-top: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 16%);
  border-radius: 10px;

  @media (max-width: 1600px) {
    /* margin-top: 0; */
  }
`;
export const ContentWrap = styled.div`
  padding: 15px;
  box-sizing: border-box;
  flex: 1;
  width: 100%;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 16%);
  border-radius: 10px;
  background-color: white;
`;

export const DetailFeedHeader = styled.div`
  display: flex;
  align-items: center;
`;
export const DetailFeedInfoWrap = styled.div`
  flex: 1;
  margin-left: 15px;
  display: flex;
`;
export const DetailFeedInfo = styled.div`
  flex: 1;
`;
export const DetailFeedTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DetailFeedContent = styled.div`
  height: 100px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const DetailFeedImg = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
`;
export const DetailFeedImgItem = styled.div`
  flex: 1 1 40%;
  max-height: 180px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const FeedWriterImg = styled.img`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  object-fit: cover;
`;
