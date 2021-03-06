import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color:#F0F0F0;
        margin:0;
        font-family:Noto Sans KR;
    }
    ::-webkit-scrollbar-track {
    }
    ::-webkit-scrollbar {
      display:none;
    }

    button, input {
      outline:none;
      border:none;
      background-color:none;
      font-family:Noto Sans KR;
    }
`;

export const GlobalCenterDiv = styled.div`
  width: 800px;
  margin: 0 auto;

  @media (max-width: 800px) {
    width: calc(100%);
  }
`;
export const GlobalLayoutDiv = styled(GlobalCenterDiv)`
  margin-top: 80px;
`;

export const SlideUp = (px: number) => keyframes`
  0% {
    opacity:0.1;
    transform:translateY(${px}px);
  }
  100% {
    opacity:1;
    transform:translateY(0px);
  }
`;

export const SlideDown = (px: number) => keyframes`
  0% {
    opacity:0.3;
    transform:translateY(-${px}px);
  }
  100% {
    opacity:1;
    transform:translateY(0px);
  }
`;
