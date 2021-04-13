import styled from "styled-components";

export const Container = styled.div<{ background: string }>`
  background-color: ${(props) => props.background};
  width: 100vw;
  height: 100vh;
`;
