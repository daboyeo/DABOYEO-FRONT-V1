import React, { FC, MouseEvent, useCallback, useEffect, useMemo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { FeedItem } from "../../../Component";
import { getAllReports } from "../../../Module/Action/report";
import { Store } from "../../../Module/Reducer";
import { getAfterTime, getImgSrc } from "../../../lib/utils";
import { useDetailFeedDispatch } from "../../../lib/hooks/useDetailFeed";

const FeedList: FC = () => {
  const dispatch = useDispatch();
  const { reports, detailFeedId } = useSelector(
    (store: Store) => ({
      reports: store.report.reports,
      detailFeedId: store.detailFeed.report_id,
    }),
    shallowEqual
  );
  const { setDetailFeedId } = useDetailFeedDispatch(detailFeedId);

  useEffect(() => {
    dispatch(getAllReports());
  }, []);

  const render = useMemo(() => {
    return reports.map(
      ({
        content,
        reporter_name,
        image_uris,
        report_id,
        reporter_profile_uri,
        created_at,
        tags,
        location,
        reporter_id,
      }) => (
        <FeedItem
          location={location}
          tags={tags}
          reporterId={reporter_id}
          key={report_id}
          date={getAfterTime(created_at)}
          id={report_id}
          profileImgSrc={getImgSrc(reporter_profile_uri)}
          isAdminMode={false}
          userName={reporter_name}
          content={content}
          clickHandler={setDetailFeedId}
          imgSrc={image_uris.map((uri: string) => getImgSrc(uri))}
        />
      )
    );
  }, [reports, setDetailFeedId]);

  return <>{render}</>;
};

export default FeedList;
