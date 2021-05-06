import apiDefault, { ResServer } from "../../client";
import { UserProfileRes } from "../../payloads/profile";

export const reqGetMyInfo = (): ResServer<UserProfileRes> => {
  return apiDefault().get<UserProfileRes>("/user");
};
