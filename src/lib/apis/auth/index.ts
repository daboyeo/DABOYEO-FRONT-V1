import apiDefault, { ResServer } from "../../client";

export const reqAuth = (token: string): ResServer<{ access_token: string }> => {
  return apiDefault().post<{ access_token: string }>("/user/auth", {
    token,
    auth_type: "google",
  });
};
