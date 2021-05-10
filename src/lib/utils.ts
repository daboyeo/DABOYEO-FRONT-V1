import { authConstant, FILE_SERVER_BASE_URL } from "./client";
import { UserProfileRes } from "./payloads/profile";

export const delay = async (ms: number): Promise<void> => {
  setTimeout(() => {
    return;
  }, ms);
};

export const logOut = (): void => {
  localStorage.clear();
  window.location.reload();
};

export const removeProfle = (): void => {
  localStorage.removeItem(authConstant.USER_NAME);
  localStorage.removeItem(authConstant.PROFILE);
};

export const saveProfle = (profile: UserProfileRes): void => {
  localStorage.setItem(authConstant.USER_NAME, profile.name);
  localStorage.setItem(authConstant.PROFILE, profile.profile_uri);
};

export const getImgSrc = (uuid: string): string => {
  if (uuid.includes("http")) {
    return uuid;
  }
  return `${FILE_SERVER_BASE_URL}/file?uuid=${uuid}`;
};

export const getAfterTime = (createdAt: string): string => {
  const nowDate: number = new Date().getTime();
  const thatDate: number = new Date(createdAt).getTime();

  const minute: number = Math.round((nowDate - thatDate) / 60000);

  if (minute < 60) {
    return `${minute}분 전`;
  }
  const hour: number = Math.round(minute / 60);

  if (hour < 24) {
    return `${hour}시간 전`;
  }
  return `${Math.floor(hour / 24)}일 전`;
};
