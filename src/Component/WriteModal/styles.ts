import styled, { keyframes } from "styled-components";
import { SlideUp } from "../../GlobalStyle";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(243, 243, 244, 70%);
  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 530px;
  margin-bottom: 100px;
  height: 800px;
  border-radius: 6px;
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 14%);
  background-color: white;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  animation: ${SlideUp(100)} 200ms;
`;

export const KakaoMap = styled.div`
  width: 100%;
  height: 400px;
`;

export const ModalHeader = styled.div`
  border-bottom: 1px solid rgb(229, 229, 229);
`;
export const ModalContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;
export const ModalFooter = styled.div``;
export const Title = styled.div`
  font-weight: bold;
  padding: 5px 0;
  text-align: center;
  font-size: 23px;
`;
export const MyProfile = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
`;
export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgb(187, 191, 197);
  object-fit: cover;
`;
export const Name = styled.div`
  margin-left: 10px;
  font-size: 15px;
  font-weight: bold;
  flex: 1;
`;

export const UploadBtn = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;

export const SubmitButton = styled.button`
  background-color: #1877f2;
  color: white;
  font-weight: bold;
  font-size: 16px;
  width: 100%;
  padding: 8px 0;
  border-radius: 7px;
`;

export const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  border: none;
  background: transparent;
  font-family: Noto Sans KR;
  color: #707070;
  flex: 1;
  outline: none;
  font-size: 23px;
  margin-bottom: 10px;
  box-sizing: border-box;

  &::placeholder {
    font-family: Noto Sans KR;
    font-size: 23px;
  }
`;

export const LocationInput = styled.input`
  width: 100%;
`;

export const TagWrite = styled.div``;
export const TagList = styled.div`
  height: 30px;
`;
export const Tag = styled.span`
  color: #6979b5;
`;
export const TagInput = styled.input`
  &::placeholder {
    color: #6979b5;
    flex: 1;
  }
`;
