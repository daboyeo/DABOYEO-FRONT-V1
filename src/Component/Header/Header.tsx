import React, { FC, useCallback, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { authConstant } from "../../lib/client";
import { HomeIcon, PersonIcon, SearchIcon } from "../../Asset";
import * as authApi from "../../lib/apis/auth";
import * as S from "./style";
import * as profileApi from "../../lib/apis/profile";
import { useDispatch } from "react-redux";
import { setProfile } from "../../Module/Action/profile/profile";
import { delay } from "../../lib/utils";
import useInput from "../../lib/hooks/useInput";
import useEnter from "../../lib/hooks/useEnter";

const Header: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isSearchMode, setIsSearchMode] = useState<boolean>(false);
  const [keyword, setKeyword, changeKeyword] = useInput<HTMLInputElement>("");
  const [isLoginMode, setIsLoginMode] = useState<boolean>(false);

  useEffect(() => {
    const userName: string = localStorage.getItem(authConstant.USER_NAME);
    const profileUri: string = localStorage.getItem(authConstant.PROFILE);
    const accessToken: string = localStorage.getItem(authConstant.ACCESS_TOKEN);

    setIsLoginMode(false);
    dispatch(
      setProfile({
        name: userName,
        profile_uri: profileUri,
      })
    );

    if ((!userName || !profileUri) && accessToken) {
      profileApi.reqGetMyInfo().then((res) => {
        const { name, profile_uri } = res.data;
        localStorage.setItem(authConstant.USER_NAME, name);
        localStorage.setItem(authConstant.PROFILE, profile_uri);

        setIsLoginMode(true);
        dispatch(setProfile(res.data));
      });
    }

    if (userName && profileUri && accessToken) {
      setIsLoginMode(true);
    }
  }, []);

  const googleAuth = useCallback(() => {
    const client = (window as any).gapi;
    client.load("auth2", async function () {
      const clientPromise = client.auth2.init({
        client_id: process.env.GOOGLE_OAUTH_CLIENT_ID,
      });
      try {
        const res = await clientPromise.signIn();
        const { access_token } = res.qc;

        const res2 = await authApi.reqAuth(access_token);
        const token: string = res2.data.access_token;

        localStorage.clear();
        localStorage.setItem(authConstant.ACCESS_TOKEN, token);
        await delay(500);
        window.location.reload();
      } catch (err) {
        console.log(err);
        return;
      }
    });
  }, []);

  const changeIsSearchMode = useCallback(() => {
    setIsSearchMode((prev) => !prev);
  }, []);

  const goSearch = useCallback(() => {
    history.push(`/search/${keyword}`);
  }, [keyword]);

  const searchKeydown = useEnter(goSearch);

  return (
    <S.Container>
      <S.Header>
        <S.IconWrap>
          <Link to="/">
            <S.Icon src={SearchIcon} />
          </Link>
        </S.IconWrap>
        <S.IconWrap isActive={isSearchMode}>
          {isSearchMode ? (
            <S.SearchInputWrap>
              <S.SearchInput
                value={keyword}
                onChange={changeKeyword}
                type="text"
                onKeyDown={searchKeydown}
              />
            </S.SearchInputWrap>
          ) : (
            <S.Icon onClick={changeIsSearchMode} src={HomeIcon} />
          )}
        </S.IconWrap>
        <S.IconWrap>
          {isLoginMode ? (
            <Link to="/profile">
              <S.Icon src={PersonIcon} />
            </Link>
          ) : (
            <S.Icon
              onClick={googleAuth}
              src="https://image.flaticon.com/icons/png/512/2504/2504739.png"
            />
          )}
        </S.IconWrap>
      </S.Header>
    </S.Container>
  );
};

export default Header;
