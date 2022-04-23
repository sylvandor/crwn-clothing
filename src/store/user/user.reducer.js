import {USER_ACTIONS} from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case USER_ACTIONS.SIGN_IN_SUCCESS:
      return {...state, currentUser: payload};
    case USER_ACTIONS.SIGN_OUT_FAILED:
    case USER_ACTIONS.SIGN_UP_FAILED:
    case USER_ACTIONS.SIGN_IN_FAILED:
      return {...state, error: payload};
    case USER_ACTIONS.SIGN_OUT_SUCCESS:
      return {...state, currentUser: null}
    default:
      return state;
  }
}

export default userReducer;
