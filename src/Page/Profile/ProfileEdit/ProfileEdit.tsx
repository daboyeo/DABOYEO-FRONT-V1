import React, {
  ChangeEvent,
  FC,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import * as profileApi from "../../../lib/apis/profile";
import * as reportApi from "../../../lib/apis/report";
import { UserProfileRes } from "../../../lib/payloads/profile";
import { getImgSrc, removeProfle } from "../../../lib/utils";
import { useSelector } from "react-redux";
import useBoolean from "../../../lib/hooks/useBoolean";
import { Store } from "../../../Module/Reducer";
import * as S from "../style";
import { authConstant } from "../../../lib/client";

interface Props {
  userId: string;
}

const ProfileEdit: FC<Props> = ({ userId }) => {
  const [userProfile, setUserProfile] = useState<UserProfileRes>({
    name: "",
    profile_uri: "",
    id: "",
  });
  const { name, profileUri } = useSelector((store: Store) => store.profile);
  const [isNameEditMode, setIsNameEditMode, toggleIsNameEditMode] =
    useBoolean(false);
  const [editName, setEditName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    profileApi
      .reqGetUserInfo(userId)
      .then((res) => {
        setUserProfile(res.data);
      })
      .catch((err) => {});
  }, [userId]);

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

  const myId = localStorage.getItem(authConstant.USER_ID);
  const isMyProfile = myId === userProfile.id;

  return (
    <>
      <S.HiddenInput
        ref={fileInputRef}
        type="file"
        onChange={isMyProfile ? fileChangeHandler : undefined}
      />
      {profileUri && (
        <S.ProfileImg
          onClick={isMyProfile ? imgClickHandler : undefined}
          src={getImgSrc(userProfile.profile_uri)}
        />
      )}
      <S.NameEditWrap onSubmit={submitHandler}>
        {isNameEditMode ? (
          <S.NameEditInput
            value={editName}
            onChange={editNameHandelr}
            type="text"
          />
        ) : (
          <S.UserName onClick={isMyProfile ? toggleIsNameEditMode : undefined}>
            {userProfile.name}
          </S.UserName>
        )}
      </S.NameEditWrap>
    </>
  );
};

export default ProfileEdit;
