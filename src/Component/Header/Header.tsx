import React, { FC, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { cli } from "webpack";
import { HomeIcon, PersonIcon, SearchIcon } from "../../Asset";
import * as S from "./style";

const Header: FC = () => {
  const [isSearchMode, setIsSearchMode] = useState<boolean>(false);
  const [isLoginMode, setIsLoginMode] = useState<boolean>(false);
  const googleAuth = useCallback(() => {
    const client = (window as any).gapi;
    client.load("auth2", async function () {
      const clientPromise = client.auth2.init({
        client_id: process.env.GOOGLE_OAUTH_CLIENT_ID,
      });
      try {
        const res = await clientPromise.signIn();
      } catch (err) {



        console.log(err);
      }
    });
  }, []);
  const changeIsSearchMode = useCallback(() => {
    setIsSearchMode((prev) => !prev);
  }, []);
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
              <S.SearchInput type="text" />
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