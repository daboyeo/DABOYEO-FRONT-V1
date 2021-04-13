import OverViewImgAction, { SET_OVER_IMG_VIEW } from "../../Action/overViewImg";

interface OverViewImgReducer {
  imgSrc: string;
}

const initialState: OverViewImgReducer = {
  imgSrc: "",
};

const overViewImgReducer = (
  state: OverViewImgReducer = initialState,
  action: OverViewImgAction
): OverViewImgReducer => {
  switch (action.type) {
    case SET_OVER_IMG_VIEW: {
      return {
        imgSrc: action.payload.imgSrc,
      };
    }
    default: {
      return state;
    }
  }
};

export default overViewImgReducer;
