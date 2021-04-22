export const SET_WRITE_MODAL_OPEN = "writeModal/SET_WRITE_MODAL_OPEN" as const;

export const setWriteModalOpen = (open: boolean) => ({
  type: SET_WRITE_MODAL_OPEN,
  payload: { open },
});

type WriteModalAction = ReturnType<typeof setWriteModalOpen>;

export default WriteModalAction;    
