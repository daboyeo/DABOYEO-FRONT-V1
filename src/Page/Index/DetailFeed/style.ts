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

export const ContainerWrap = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
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
