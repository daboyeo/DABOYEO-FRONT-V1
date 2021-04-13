export const SET_OVER_IMG_VIEW = "overImgView/SET_OVER_IMG_VIEW" as const;

export const setOverImgView = (imgSrc: string) => ({
  type: SET_OVER_IMG_VIEW,
  payload: { imgSrc },
});

type OverViewImgAction = ReturnType<typeof setOverImgView>;

export default OverViewImgAction;
