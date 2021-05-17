import React, { FC } from "react";
import { RouteChildrenProps } from "react-router";
import FeedList from "./FeedList/FeedList";
import * as S from "./style";

const SearchPage: FC<RouteChildrenProps<{ keyword: string }>> = ({ match }) => {
  const keyword: string = match.params.keyword;
  return (
    <S.Container>
      <FeedList keyword={keyword} />
    </S.Container>
  );
};

export default SearchPage;
