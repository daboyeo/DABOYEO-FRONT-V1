import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 16%);
  height: 60px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserImg = styled.img`
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 50%;
`;

export const WriteInput = styled.input`
  flex: 1;
  padding: 5px 0;
  padding-left: 10px;
  font-size: 17px;
  margin-left: 20px;
  border: none;
  border-radius: 30px;
  background-color: #f0f2f5;
  height: 30px;
  transition: 150ms all;

  &:hover {
    background-color: #d7d9db;
  }
`;
