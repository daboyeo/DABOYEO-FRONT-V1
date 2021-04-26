import axios, { AxiosInstance, AxiosResponse } from "axios";

export type ResServer<T> = Promise<AxiosResponse<T>>;

const BASE_URL: string = "";
const ACCESS_TOKEN: string = "ACCESS_TOKEN";

export const authConstant = {
  BASE_URL,
  ACCESS_TOKEN,
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
