import { ReportListItem } from "../../../lib/payloads/report";

export const GET_ALL_REPORTS = "report/GET_ALL_REPORTS" as const;
export const GET_ALL_REPORTS_SUCCESS = "report/GET_ALL_REPORTS_SUCCESS" as const;

export const getAllReports = () => ({
  type: GET_ALL_REPORTS,
  payload: {},
});

export const getAllReportsSuccess = (reports: ReportListItem[]) => ({
  type: GET_ALL_REPORTS_SUCCESS,
  payload: { reports },
});

type ReportAction = ReturnType<typeof getAllReportsSuccess>;

export default ReportAction;
