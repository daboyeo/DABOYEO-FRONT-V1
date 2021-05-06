import { GET_ALL_REPORTS } from "../report";

export const START_LOADING = "loading/START_LOADING" as const;
export const FINISH_LOADING = "loading/FINISH_LOADING" as const;

export type LoadingType = typeof GET_ALL_REPORTS;

export const startLoading = (loading: LoadingType) => ({
  type: START_LOADING,
  payload: { loading },
});
export const finishLoading = (loading: LoadingType) => ({
  type: FINISH_LOADING,
  payload: { loading },
});

type LoadingAction = ReturnType<typeof startLoading | typeof finishLoading>;
export default LoadingAction;
