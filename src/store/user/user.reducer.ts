import {AnyAction} from "redux";

import {signInFailed, signInSuccess, signOutFailed, signOutSuccess, signUpFailed} from "./user.actions";
import {UserData} from "./user.types";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
}

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null
};

const userReducer = (user = INITIAL_STATE, action = {} as AnyAction): UserState => {
  if (signInSuccess.match(action)) {
    return {...user, currentUser: action.payload, isLoading: false};
  } else if (signOutFailed.match(action) || signUpFailed.match(action) || signInFailed.match(action)) {
    return {...user, error: action.payload, isLoading: false};
  } else if (signOutSuccess.match(action)) {
    return {...user, currentUser: null, isLoading: false}
  } else {
    return user;
  }
}

export default userReducer;
