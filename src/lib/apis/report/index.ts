import apiDefault, { ResServer } from "../../client";
import { ReportListItem } from "../../payloads/report";

export const reqGetRepots = (): ResServer<{ reports: ReportListItem[] }> => {
  return apiDefault().get<{ reports: ReportListItem[] }>(`report`);
};
