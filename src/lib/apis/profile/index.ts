import apiDefault, { ResServer } from "../../client";
import { UserProfileRes } from "../../payloads/profile";

export const reqGetMyInfo = (): ResServer<UserProfileRes> => {
  return apiDefault().get<UserProfileRes>("/user");
};

export const editProfile = (data: UserProfileRes): ResServer<{}> => {
  return apiDefault().put<{}>("/user", data);
};
