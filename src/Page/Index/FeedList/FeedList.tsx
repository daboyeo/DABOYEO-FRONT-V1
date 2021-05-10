import React, { FC, MouseEvent, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FeedItem } from "../../../Component";
import { ReportListItem } from "../../../lib/payloads/report";
import { setDetailFeedId } from "../../../Module/Action/detailFeed";
import { setOverImgView } from "../../../Module/Action/overViewImg";
import { getAllReports } from "../../../Module/Action/report";
import { Store } from "../../../Module/Reducer";
import { delay, getImgSrc } from "../../../lib/utils";
const FeedList: FC = () => {
  const dispatch = useDispatch();
  const reports: ReportListItem[] = useSelector(
    (store: Store) => store.report.reports
  );

  useEffect(() => {
    dispatch(getAllReports());
  }, []);

  const clickHandler = useCallback((e: MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    const imgSrc: string = e.currentTarget.src;
    dispatch(setOverImgView(imgSrc));
  }, []);

  const containerHandler = useCallback(async (id: number) => {
    dispatch(setDetailFeedId(0));
    await delay(100);
    dispatch(setDetailFeedId(id));
  }, []);

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
            date={created_at}
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
