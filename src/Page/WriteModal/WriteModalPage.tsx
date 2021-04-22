import React, { FC, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WriteModal } from "../../Component";
import { setWriteModalOpen } from "../../Module/Action/writeModal";
import { Store } from "../../Module/Reducer";

const WriteModalPage: FC = () => {
  const dispatch = useDispatch();
  const open: boolean = useSelector((store: Store) => store.writeModal.open);

  const closeModal = useCallback(() => {
    dispatch(setWriteModalOpen(false));
  }, []);

  return (
    open && (
      <WriteModal
        imgSrc=""
        name="공영길"
        onBackgroundClick={closeModal}
        onSubmit={function () {}}
        placeHolder="어떤 사건 사고를 목격하셨나요?"
        title="글 쓰기"
      />
    )
  );
};

export default WriteModalPage;
