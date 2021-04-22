import React, { FC, useCallback, MouseEvent } from "react";
import * as S from "./styles";

interface Props {
  onBackgroundClick: () => void;
  onSubmit: () => void;
  name: string;
  title: string;
  placeHolder: string;
  imgSrc: string;
}

const WriteModal: FC<Props> = ({
  imgSrc,
  name,
  onBackgroundClick,
  onSubmit,
  placeHolder,
  title,
}) => {
  const backgroundClickHandler = useCallback(
    (e: MouseEvent<HTMLInputElement>) => {
      if (e.currentTarget === e.target) onBackgroundClick();
    },
    [onBackgroundClick]
  );

  return (
    <S.Container onClick={backgroundClickHandler}>
      <S.Modal>
        <S.ModalHeader>
          <S.Title>{title}</S.Title>
        </S.ModalHeader>
        <S.ModalContent>
          <S.MyProfile>
            <S.ProfileImg src={imgSrc} />
            <S.Name>{name}</S.Name>
          </S.MyProfile>
          <S.Textarea placeholder={placeHolder}></S.Textarea>
        </S.ModalContent>
        <S.ModalFooter>
          <S.SubmitButton>게시</S.SubmitButton>
        </S.ModalFooter>
      </S.Modal>
    </S.Container>
  );
};

export default WriteModal;
