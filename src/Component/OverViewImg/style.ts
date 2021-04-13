import styled, { keyframes } from "styled-components";

export const slideUp = keyframes`
    0% {
        opacity:0;
    }
    100% {
        opacity:1;
    }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  background-color: rgba(0, 0, 0, 16%);
`;

export const OverImg = styled.img`
  animation: ${slideUp} 0.3s;
`;
