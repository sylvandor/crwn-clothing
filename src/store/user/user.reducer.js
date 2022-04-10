import {USER_ACTIONS} from "./user.types";

const INITIAL_STATE = {currentUser: null};

const userReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case USER_ACTIONS.setCurrentUser:
      return {...state, currentUser: payload};
    default:
      return state;
  }
}

export default userReducer;
