import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WriteFeed } from "../../../Component";
import { setWriteModalOpen } from "../../../Module/Action/writeModal";
import { Store } from "../../../Module/Reducer";

const WritePageHeader: FC = () => {
  const disaptch = useDispatch();
  const { name, profileUri } = useSelector((store: Store) => store.profile);

  const clickHandler = useCallback(() => {
    disaptch(setWriteModalOpen(true));
  }, []);
  return (
    <WriteFeed
      onClick={clickHandler}
      imgSrc={profileUri}
      btnText={`${name}님, 어떤 사건 사고를 목격하셨나요?`}
    />
  );
};

export default WritePageHeader;
