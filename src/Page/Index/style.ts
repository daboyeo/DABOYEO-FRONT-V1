import styled from "styled-components";
import { GlobalLayoutDiv } from "../../GlobalStyle";

export const Container = styled(GlobalLayoutDiv)`
  position: relative;
`;
export const DetailFeed = styled.div`
  position: fixed;
  z-index: 10;
  bottom: 20px;
  right: 20px;

  @media (max-width: 1600px) {
  }
`;
export const FeedWrap = styled.div`
  margin-top: 20px;
`;
