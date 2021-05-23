import axios from "axios";
import apiDefault, { ResServer } from "../../client";
import {
  CommentReq,
  GetReportOption,
  ReportDetail,
  ReportListItem,
  ReportReq,
} from "../../payloads/report";
import { makeQuery } from "../../utils";

export const reqGetRepots = (
  option: GetReportOption
): ResServer<{ reports: ReportListItem[] }> => {
  const query: string = makeQuery(option);
  console.log(option);
  return apiDefault().get<{ reports: ReportListItem[] }>(`/report?${query}`);
};

export const reqPostReport = (data: ReportReq): ResServer<{}> => {
  return apiDefault().post<{}>("/report", data);
};

export const reqUploadImage = (
  file: File
): ResServer<{ file_uuid: string }> => {
  const formData: FormData = new FormData();
  formData.append("file", file);

  return axios.post<{ file_uuid: string }>(
    "http://54.180.105.66:8000/file",
    formData
  );
};

export const reqGetDetailFeed = (id: number): ResServer<ReportDetail> => {
  return apiDefault().get<ReportDetail>(`/report/${id}`);
};

export const reqPostComment = (payload: CommentReq): ResServer<{}> => {
  return apiDefault().post<{}>("/report/comment", {
    report_id: payload.id,
    content: payload.content,
  });
};
