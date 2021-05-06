import ProfileAction, { SET_PROFILE } from "../../Action/profile/profile";

export interface ProfileReducerState {
  profileUri: string;
  name: string;
}

const initialState: ProfileReducerState = {
  name: "",
  profileUri: "",
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
      };
    }
    default: {
      return state;
    }
  }
};

export default profileReducer;
