import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { WriteFeed } from "../../../Component";
import { setWriteModalOpen } from "../../../Module/Action/writeModal";

const WritePageHeader: FC = () => {
  const disaptch = useDispatch();
  const clickHandler = useCallback(() => {
    disaptch(setWriteModalOpen(true));
  }, []);
  return (
    <WriteFeed
      onClick={clickHandler}
      imgSrc="https://image.flaticon.com/icons/png/512/634/634741.png"
      btnText="공영길님, 어떤 사건 사고를 목격하셨나요?"
    />
  );
};

export default WritePageHeader;
