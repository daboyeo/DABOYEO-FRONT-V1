import React, { FC, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WriteModal } from "../../Component";
import * as reportApi from "../../lib/apis/report";
import { ReportManagement, ReportReq } from "../../lib/payloads/report";
import { setWriteModalOpen } from "../../Module/Action/writeModal";
import { Store } from "../../Module/Reducer";

const WriteModalPage: FC = () => {
  const dispatch = useDispatch();
  const open: boolean = useSelector((store: Store) => store.writeModal.open);
  const { name, profileUri } = useSelector((store: Store) => store.profile);

  const closeModal = useCallback(() => {
    dispatch(setWriteModalOpen(false));
  }, []);

  const submit = useCallback(async (data: ReportManagement) => {
    try {
      const uuids: string[] = await Promise.all(
        data.files.map(async (file: File) => {
          const uuid: string = (await reportApi.reqUploadImage(file)).data
            .file_uuid;

          return uuid;
        })
      );

      await reportApi.reqPostReport({
        content: data.content,
        image_uris: uuids,
        location: data.location,
        tags: data.tags,
      });
      alert("글 작성 성공!");
    } catch (err) {}
  }, []);

  return (
    open && (
      <WriteModal
        imgSrc={profileUri}
        name={name}
        onBackgroundClick={closeModal}
        onSubmit={submit}
        placeHolder="어떤 사건 사고를 목격하셨나요?"
        title="글 쓰기"
      />
    )
  );
};

export default WriteModalPage;
