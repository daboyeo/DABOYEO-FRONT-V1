import axios, { AxiosInstance, AxiosResponse } from "axios";

export type ResServer<T> = Promise<AxiosResponse<T>>;

export const BASE_URL =
  "https://6l8nidp3k7.execute-api.ap-northeast-2.amazonaws.com/dev" as const;
export const FILE_SERVER_BASE_URL = "http://54.180.105.66:8000" as const;

const ACCESS_TOKEN = "ACCESS_TOKEN" as const;
const PROFILE = "PROFILE" as const;
const USER_NAME = "USER_NAME" as const;
const USER_ID = "USER_ID" as const;

export const authConstant = {
  ACCESS_TOKEN,
  PROFILE,
  USER_NAME,
  USER_ID,
};

const apiDefault = (): AxiosInstance => {
  const token: string = window.localStorage.getItem(ACCESS_TOKEN);

  const instance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return instance;
};

export default apiDefault;
