import React, { FC } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { DetailFeed } from "../../../Component";
import { getAfterTime, getImgSrc } from "../../../lib/utils";
import { Store } from "../../../Module/Reducer";
import * as S from "./style";

const DetailFeedPage: FC = () => {
  const { profile, feedData, loading } = useSelector(
    (store: Store) => ({
      profile: store.profile.profileUri,
      feedData: store.detailFeed,
      loading: store.loading["detailFeed/GET_DETAIL_FEED"],
    }),
    shallowEqual
  );

  return feedData && !loading ? (
    <S.Container>
      <DetailFeed
        id={feedData.report_id}
        comments={feedData.comments}
        tags={feedData.tags}
        content={feedData.content}
        imgs={feedData.image_uris.map((uri: string) => getImgSrc(uri))}
        location={feedData.location}
        profileImgSrc={getImgSrc(feedData.reporter_profile_uri)}
        reporterName={feedData.reporter_name}
        time={getAfterTime(feedData.created_at)}
      />
    </S.Container>
  ) : (
    <></>
  );
};

export default DetailFeedPage;
