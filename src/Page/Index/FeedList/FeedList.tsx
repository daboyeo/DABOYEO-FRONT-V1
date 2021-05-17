import React, { FC, MouseEvent, useCallback, useEffect, useMemo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { FeedItem } from "../../../Component";
import { ReportListItem } from "../../../lib/payloads/report";
import { setOverImgView } from "../../../Module/Action/overViewImg";
import { getAllReports } from "../../../Module/Action/report";
import { Store } from "../../../Module/Reducer";
import { getAfterTime, getImgSrc } from "../../../lib/utils";
import { getDetailFeed } from "../../../Module/Action/detailFeed";

const FeedList: FC = () => {
  const dispatch = useDispatch();
  const { reports, detailFeedId } = useSelector(
    (store: Store) => ({
      reports: store.report.reports,
      detailFeedId: store.detailFeed.report_id,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getAllReports());
  }, []);

  const clickHandler = useCallback((e: MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    const imgSrc: string = e.currentTarget.src;
    dispatch(setOverImgView(imgSrc));
  }, []);

  const containerHandler = useCallback(
    async (id: number) => {
      if (id === detailFeedId) return;
      dispatch(getDetailFeed(id));
    },
    [detailFeedId]
  );

  return (
    <>
      {reports.map(
        ({
          content,
          reporter_name,
          image_uris,
          report_id,
          reporter_profile_uri,
          created_at,
          tags,
          location,
        }) => (
          <FeedItem
            location={location}
            tags={tags}
            key={report_id}
            date={getAfterTime(created_at)}
            id={report_id}
            profileImgSrc={getImgSrc(reporter_profile_uri)}
            isAdminMode={false}
            userName={reporter_name}
            content={content}
            clickHandler={containerHandler}
            imgClickHandler={clickHandler}
            imgSrc={image_uris.map((uri: string) => getImgSrc(uri))}
          />
        )
      )}
    </>
  );
};

export default FeedList;
