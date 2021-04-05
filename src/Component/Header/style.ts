import styled, { css, keyframes } from "styled-components";

export const showUpInput = keyframes`
  0% {
    width:0;
    border-radius:100px;
  }
  100% {
    width:100%;
  }
`;

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 16%);
  position: fixed;
  top: 0;
  z-index: 10;
  left: 0;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  margin: 0 auto;
  align-items: stretch;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Icon = styled.img`
  padding: 10px;
  width: 30px;
  height: 30px;
`;
export const SearchInputWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const SearchInput = styled.input`
  border: none;
  background: #f0f2f5;
  outline: none;
  border-radius: 12px;
  width: 100%;
  padding: 10px;
  font-size: 15px;
  animation: ${showUpInput} 220ms ease-in;
`;

export const LoginBtnWrap = styled.div``;

export const IconWrap = styled.div<{ isActive?: boolean }>`
  flex: 1;
  box-sizing: border-box;
  margin: 0 20px;
  text-align: center;
  border-bottom: 2px solid transparent;
  transition: 220ms all;
  &:hover,
  &:focus {
    border-bottom: 2px solid rgb(24, 119, 242);
  }

  @media (max-width: 800px) {
    margin: 0 5px;

    ${(props) =>
      props.isActive &&
      css`
        flex: 2;
      `}
  }
`;
