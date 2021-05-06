import { ReportListItem } from "../../../lib/payloads/report";
import ReportAction, { GET_ALL_REPORTS_SUCCESS } from "../../Action/report";

interface ReportReducerState {
  reports: ReportListItem[];
}

const initialState: ReportReducerState = {
  reports: [],
};

const reportReducer = (
  state: ReportReducerState = initialState,
  action: ReportAction
): ReportReducerState => {
  switch (action.type) {
    case GET_ALL_REPORTS_SUCCESS: {
      return {
        ...state,
        reports: action.payload.reports,
      };
    }
    default: {
      return state;
    }
  }
};

export default reportReducer;
