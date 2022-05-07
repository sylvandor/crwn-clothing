export enum USER_ACTIONS {
  setCurrentUser = 'user/SET_CURRENT_USER',
  checkUserSession = 'user/CHECK_USER_SESSION',
  googleSignInStart = 'user/GOOGLE_SIGN_IN_START',
  emailSignInStart = 'user/EMAIL_SIGN_IN_START',
  signInSuccess = 'user/SIGN_IN_SUCCESS',
  signInFailed = 'user/SIGN_IN_FAILED',
  signOutFailed = 'user/SIGN_OUT_FAILED',
  signOutStart = 'user/SIGN_OUT_START',
  signOutSuccess = 'user/SIGN_OUT_SUCCESS',
  signUpStart = 'user/SIGN_UP_START',
  signUpSuccess = 'user/SIGN_UP_SUCCESS',
  signUpFailed = 'user/SIGN_UP_FAILED'
}

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
}