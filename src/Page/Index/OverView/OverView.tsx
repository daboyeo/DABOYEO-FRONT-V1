import React, { FC, MouseEvent, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OverViewImg } from "../../../Component";
import { setOverImgView } from "../../../Module/Action/overViewImg";
import { Store } from "../../../Module/Reducer";

const OverView: FC = () => {
  const imgSrc = useSelector((store: Store) => store.overViewImg.imgSrc);
  const dispatch = useDispatch();

  const clickHandler = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      dispatch(setOverImgView(""));
    }
    return;
  }, []);

  return (
    imgSrc && <OverViewImg imgSrc={imgSrc} onBackgroundClick={clickHandler} />
  );
};

export default OverView;
