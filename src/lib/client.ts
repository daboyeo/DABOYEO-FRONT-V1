import axios, { AxiosInstance, AxiosResponse } from "axios";

export type ResServer<T> = Promise<AxiosResponse<T>>;

const BASE_URL: string =
  "https://6l8nidp3k7.execute-api.ap-northeast-2.amazonaws.com/dev";
const ACCESS_TOKEN = "ACCESS_TOKEN" as const;
const PROFILE = "PROFILE" as const;
const USER_NAME = "USER_NAME" as const;

export const authConstant = {
  BASE_URL,
  ACCESS_TOKEN,
  PROFILE,
  USER_NAME,
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
