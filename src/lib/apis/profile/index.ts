import apiDefault, { ResServer } from "../../client";
import { UserProfileRes } from "../../payloads/profile";

export const reqGetMyInfo = (): ResServer<UserProfileRes> => {
  return apiDefault().get<UserProfileRes>("/user");
};

export const editProfile = (data: UserProfileRes): ResServer<{}> => {
  return apiDefault().put<{}>("/user", data);
};

export const reqGetUserInfo = (id: string): ResServer<UserProfileRes> => {
  return apiDefault().get<UserProfileRes>(`/user?id=${id}`);
};
