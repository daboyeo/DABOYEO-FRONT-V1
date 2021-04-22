import WriteModalAction, {
  SET_WRITE_MODAL_OPEN,
} from "../../Action/writeModal";

interface WriteModalReducerStore {
  open: boolean;
}

const initialState: WriteModalReducerStore = {
  open: false,
};

const writeModalReducer = (
  state: WriteModalReducerStore = initialState,
  action: WriteModalAction
): WriteModalReducerStore => {
  switch (action.type) {
    case SET_WRITE_MODAL_OPEN: {
      return {
        ...state,
        open: action.payload.open,
      };
    }
    default: {
      return state;
    }
  }
};

export default writeModalReducer;
