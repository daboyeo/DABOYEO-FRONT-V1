import styled, { createGlobalStyle } from "styled-components";
import { GlobalLayoutDiv } from "../../GlobalStyle";

export const Container = styled(GlobalLayoutDiv)`
  margin-top: 50px;
`;

export const GlobalStyle = createGlobalStyle`
    body {
        /* background-color:white; */
    }
`;
export const ProfileImgWrap = styled.div`
  text-align: center;
  padding: 40px 0;
  background-color: white;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
`;
export const ProfileImg = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserName = styled.div`
  font-weight: bold;
  font-size: 35px;
  margin-top: 1px;
`;

export const FeedListWrap = styled.div`
  margin-top: 15px;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const NameEditInput = styled.input`
  border-bottom: 2px solid black;
  box-sizing: border-box;
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  width: 300px;
`;

export const NameEditWrap = styled.form`
  height: 70px;
`;
