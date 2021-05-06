import axios from "axios";
import apiDefault, { ResServer } from "../../client";
import { ReportListItem, ReportReq } from "../../payloads/report";

export const reqGetRepots = (): ResServer<{ reports: ReportListItem[] }> => {
  return apiDefault().get<{ reports: ReportListItem[] }>(`/report`);
};

export const reqPostReport = (data: ReportReq): ResServer<{}> => {
  return apiDefault().post<{}>("/report", data);
};

export const reqUploadImage = (
  file: File
): ResServer<{ file_uuid: string }> => {
  const formData: FormData = new FormData();
  formData.append("file", file);

  return axios.post<{ file_uuid: string }>("http://54.180.105.66:8000", file);
};
