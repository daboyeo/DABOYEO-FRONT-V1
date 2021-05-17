import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteChildrenProps } from "react-router";
import { FeedItem } from "../../../Component";
import { getAfterTime, getImgSrc } from "../../../lib/utils";
import { getAllReports } from "../../../Module/Action/report";
import { Store } from "../../../Module/Reducer";

interface Props {
  keyword: string;
}

const FeedList: FC<Props> = ({ keyword }) => {
  const dispatch = useDispatch();
  const { reports, detailFeedId } = useSelector((store: Store) => ({
    reports: store.report.reports,
    detailFeedId: store.detailFeed.report_id,
  }));

  useEffect(() => {
    if (!keyword) return;
    dispatch(
      getAllReports({
        tag: `${keyword}#`,
      })
    );
  }, [keyword]);
  return (
    <div>
      {reports.map(
        ({
          content,
          created_at,
          image_uris,
          is_sympathy,
          location,
          num_of_sympathy,
          report_id,
          reporter_name,
          reporter_profile_uri,
          tags,
          updated_at,
        }) => (
          <FeedItem
            content={content}
            date={getAfterTime(created_at)}
            id={report_id}
            imgSrc={image_uris.map((img: string) => getImgSrc(img))}
            location={location}
            profileImgSrc={getImgSrc(reporter_profile_uri)}
            tags={tags}
            userName={reporter_name}
            key={report_id}
            isAdminMode={false}
          />
        )
      )}
    </div>
  );
};

export default FeedList;
