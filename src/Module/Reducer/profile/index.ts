import ProfileAction, { SET_PROFILE } from "../../Action/profile/profile";

export interface ProfileReducerState {
  profileUri: string;
  name: string;
  id: string;
}

const initialState: ProfileReducerState = {
  name: "",
  profileUri: "",
  id: "",
};

const profileReducer = (
  state: ProfileReducerState = initialState,
  action: ProfileAction
): ProfileReducerState => {
  switch (action.type) {
    case SET_PROFILE: {
      return {
        name: action.payload.name,
        profileUri: action.payload.profile_uri,
        id: action.payload.id,
      };
    }
    default: {
      return state;
    }
  }
};

export default profileReducer;
