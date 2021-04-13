import React, { FC } from "react";
import { WriteFeed } from "../../Component";
import WriteModal from "../../Component/WriteModal/WriteModal";
import DetailFeedPage from "./DetailFeed/DetailFeed";
import FeedList from "./FeedList/FeedList";
import OverView from "./OverView/OverView";
import * as S from "./style";
import WritePageHeader from "./WritePageHeader/WritePageHeader";

const IndexPage: FC = ({}) => {
  return (
    <S.Container>
      <OverView />
      <WriteModal />
      <WritePageHeader />
      <S.FeedWrap>
        <FeedList />
      </S.FeedWrap>
      <S.DetailFeed>
        <DetailFeedPage />
      </S.DetailFeed>
    </S.Container>
  );
};

export default IndexPage;
