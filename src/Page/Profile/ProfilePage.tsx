import React, { FC } from "react";
import { RouteChildrenProps } from "react-router";
import FeedList from "./FeedList/FeedList";
import ProfileEdit from "./ProfileEdit/ProfileEdit";
import * as S from "./style";

const ProfilePage: FC<RouteChildrenProps<{ id: string }>> = ({ match }) => {
  const id: string = match.params.id;
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.ProfileImgWrap>
        <ProfileEdit userId={id} />
      </S.ProfileImgWrap>
      <S.FeedListWrap>
        <FeedList userId={id} />
      </S.FeedListWrap>
    </S.Container>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
  );
};

export default ProfilePage;
