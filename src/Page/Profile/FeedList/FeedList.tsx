import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FeedItem } from "../../../Component";
import { useDetailFeedDispatch } from "../../../lib/hooks/useDetailFeed";
import { ReportListItem } from "../../../lib/payloads/report";
import { getAfterTime, getImgSrc } from "../../../lib/utils";
import { getAllReports } from "../../../Module/Action/report";
import { Store } from "../../../Module/Reducer";

interface Props {
  userId: string;
}

const FeedList: FC<Props> = ({ userId }) => {
  const dispatch = useDispatch();
  const { setDetailFeedId } = useDetailFeedDispatch();
  const reports: ReportListItem[] = useSelector(
    (store: Store) => store.report.reports
  );

  useEffect(() => {
    dispatch(
      getAllReports({
        user: userId,
      })
    );
  }, [userId]);

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
          reporter_id,
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
            reporterId={reporter_id}
            clickHandler={setDetailFeedId}
            imgSrc={image_uris.map((uri: string) => getImgSrc(uri))}
          />
        )
      )}
    </>
  );
};

export default FeedList;
