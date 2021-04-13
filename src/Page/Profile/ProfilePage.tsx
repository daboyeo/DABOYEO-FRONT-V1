import React, {
  ChangeEvent,
  FC,
  FormEvent,
  useCallback,
  useState,
  useRef,
} from "react";
import FeedList from "../Index/FeedList/FeedList";
import * as S from "./style";

const ProfilePage: FC = () => {
  const [isNameEditMode, setIsNameEditMode] = useState<boolean>(false);
  const [editName, setEditName] = useState<string>("공영길");
  const fileInputRef = useRef<HTMLInputElement>();
  const [fileUrl, setFileUrl] = useState<string>("");

  const editNameHandelr = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEditName(e.target.value);
  }, []);

  const toggleIsNameEditMode = useCallback(() => {
    setIsNameEditMode((prev) => !prev);
  }, []);

  const imgClickHandler = useCallback(() => {
    fileInputRef.current.click();
  }, []);

  const fileChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const file: File = e.target.files[0];

    const imgUrl: string = URL.createObjectURL(file);
    setFileUrl(imgUrl);
  }, []);

  const submitHandler = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsNameEditMode(false);
    },
    [editName]
  );

  return (
    <S.Container>
      <S.GlobalStyle />
      <S.ProfileImgWrap>
        <S.HiddenInput
          ref={fileInputRef}
          type="file"
          onChange={fileChangeHandler}
        />
        <S.ProfileImg
          onClick={imgClickHandler}
          src={
            fileUrl ||
            "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.30497-1/c59.0.200.200a/p200x200/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=7206a8&_nc_ohc=Cv5TMyIYyLAAX_IDRxl&_nc_ht=scontent-ssn1-1.xx&tp=27&oh=280c3c5164afbc84c114625873dafa8a&oe=6080FE04"
          }
        />
        <S.NameEditWrap onSubmit={submitHandler}>
          {isNameEditMode ? (
            <S.NameEditInput
              value={editName}
              onChange={editNameHandelr}
              type="text"
            />
          ) : (
            <S.UserName onClick={toggleIsNameEditMode}>공영길</S.UserName>
          )}
        </S.NameEditWrap>
      </S.ProfileImgWrap>
      <S.FeedListWrap>
        <FeedList />
      </S.FeedListWrap>
    </S.Container>
  );
};

export default ProfilePage;
