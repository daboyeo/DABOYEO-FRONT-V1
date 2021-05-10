import React, { FC } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { DetailFeed } from "../../../Component";
import { ReportListItem } from "../../../lib/payloads/report";
import { getAfterTime, getImgSrc } from "../../../lib/utils";
import { Store } from "../../../Module/Reducer";
import * as S from "./style";

const DetailFeedPage: FC = () => {
  const { id, feeds, profile } = useSelector(
    (store: Store) => ({
      id: store.detailFeed.id,
      feeds: store.report.reports,
      profile: store.profile.profileUri,
    }),
    shallowEqual
  );

  const feedData = feeds.find((data: ReportListItem) => data.report_id === id);

  return feedData ? (
    <S.Container>
      <DetailFeed
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
