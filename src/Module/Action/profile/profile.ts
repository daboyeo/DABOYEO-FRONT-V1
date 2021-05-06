import { UserProfileRes } from "../../../lib/payloads/profile";

export const SET_PROFILE = "profile/SET_PROFILE" as const;

export const setProfile = (payload: UserProfileRes) => ({
  type: SET_PROFILE,
  payload,
});

type ProfileAction = ReturnType<typeof setProfile>;

export default ProfileAction;
