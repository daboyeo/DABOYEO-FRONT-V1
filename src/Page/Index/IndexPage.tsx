import React, { FC } from "react";
import WriteModalPage from "../WriteModal/WriteModalPage";
import WritePageHeader from "./WritePageHeader/WritePageHeader";
import DetailFeedPage from "./DetailFeed/DetailFeed";
import FeedList from "./FeedList/FeedList";
import OverView from "./OverView/OverView";
import * as S from "./style";

const IndexPage: FC = ({}) => {
  return (
    <S.Container>
      <OverView />
      <WriteModalPage />
      <WritePageHeader />
      <S.FeedWrap>
        <FeedList />
      </S.FeedWrap>
    </S.Container>
  );
};

export default IndexPage;
