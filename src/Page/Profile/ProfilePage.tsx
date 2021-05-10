import React, {
  ChangeEvent,
  FC,
  FormEvent,
  useCallback,
  useState,
  useRef,
  useEffect,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import useBoolean from "../../lib/hooks/useBoolean";
import { Store } from "../../Module/Reducer";
import FeedList from "../Index/FeedList/FeedList";
import * as profileApi from "../../lib/apis/profile";
import * as reportApi from "../../lib/apis/report";
import * as S from "./style";
import { UserProfileRes } from "../../lib/payloads/profile";
import { getImgSrc, removeProfle } from "../../lib/utils";

const ProfilePage: FC = () => {
  const { name, profileUri } = useSelector((store: Store) => store.profile);
  const [isNameEditMode, setIsNameEditMode, toggleIsNameEditMode] = useBoolean(
    false
  );
  const [editName, setEditName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    if (!name) return;
    setEditName(name);
  }, [name]);

  const editNameHandelr = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEditName(e.target.value);
  }, []);

  const imgClickHandler = useCallback(() => {
    fileInputRef.current.click();
  }, []);

  const fileChangeHandler = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const file: File = e.target.files[0];

      try {
        const fileUuid = (await reportApi.reqUploadImage(file)).data.file_uuid;
        const newUserInfo: UserProfileRes = {
          name: name,
          profile_uri: fileUuid,
        };
        await profileApi.editProfile(newUserInfo);
        removeProfle();
        window.location.reload();
      } catch (err) {}
    },
    [name]
  );

  const submitHandler = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const newUserInfo: UserProfileRes = {
          name: editName,
          profile_uri: profileUri,
        };
        await profileApi.editProfile(newUserInfo);
        removeProfle();
        window.location.reload();
      } catch (err) {}
    },
    [editName, profileUri]
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
        {profileUri && (
          <S.ProfileImg onClick={imgClickHandler} src={getImgSrc(profileUri)} />
        )}
        <S.NameEditWrap onSubmit={submitHandler}>
          {isNameEditMode ? (
            <S.NameEditInput
              value={editName}
              onChange={editNameHandelr}
              type="text"
            />
          ) : (
            <S.UserName onClick={toggleIsNameEditMode}>{name}</S.UserName>
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
