import {USER_ACTIONS, UserData} from "./user.types";
import {Action, ActionWithPayload, createAction, withMatcher} from "../../utils/reducer/reducer.utils";

type SetCurrentUser = ActionWithPayload<USER_ACTIONS.setCurrentUser, UserData>;
export const setCurrentUser = withMatcher((user: UserData): SetCurrentUser =>
  createAction(USER_ACTIONS.setCurrentUser, user));

type CheckUserSession = Action<USER_ACTIONS.checkUserSession>;
export const checkUserSession = withMatcher((): CheckUserSession =>
  createAction(USER_ACTIONS.checkUserSession));

type GoogleSignInStart = Action<USER_ACTIONS.googleSignInStart>;
export const googleSignInStart = withMatcher((): GoogleSignInStart =>
  createAction(USER_ACTIONS.googleSignInStart));

type EmailSignInStart = ActionWithPayload<USER_ACTIONS.emailSignInStart, { email: string, password: string }>;
export const emailSignInStart = withMatcher((email: string, password: string): EmailSignInStart =>
  createAction(USER_ACTIONS.emailSignInStart, {email, password}));

type SignInSuccess = ActionWithPayload<USER_ACTIONS.signInSuccess, UserData>;
export const signInSuccess = withMatcher((user: UserData): SignInSuccess =>
  createAction(USER_ACTIONS.signInSuccess, user));

type SignInFailed = ActionWithPayload<USER_ACTIONS.signInFailed, Error>;
export const signInFailed = withMatcher((error: Error): SignInFailed =>
  createAction(USER_ACTIONS.signInFailed, error));

type SignOutFailed = ActionWithPayload<USER_ACTIONS.signOutFailed, Error>;
export const signOutFailed = withMatcher((error: Error): SignOutFailed =>
  createAction(USER_ACTIONS.signOutFailed, error));

type SignOutStart = Action<USER_ACTIONS.signOutStart>;
export const signOutStart = withMatcher((): SignOutStart =>
  createAction(USER_ACTIONS.signOutStart));

type SignOutSuccess = Action<USER_ACTIONS.signOutSuccess>;
export const signOutSuccess = withMatcher((): SignOutSuccess =>
  createAction(USER_ACTIONS.signOutSuccess));

type SignUpStart = ActionWithPayload<USER_ACTIONS.signUpStart, { email: string, password: string, displayName: string }>;
export const signUpStart = withMatcher((email: string, password: string, displayName: string): SignUpStart =>
  createAction(USER_ACTIONS.signUpStart, {email, password, displayName}));

type SignUpSuccess = ActionWithPayload<USER_ACTIONS.signUpSuccess, { user: UserData, additionalDetails: object }>;
export const signUpSuccess = withMatcher((user: UserData, additionalDetails: object): SignUpSuccess =>
  createAction(USER_ACTIONS.signUpSuccess, {user, additionalDetails}));

type SignUpFailed = ActionWithPayload<USER_ACTIONS.signUpFailed, Error>;
export const signUpFailed = withMatcher((error: Error): SignUpFailed =>
  createAction(USER_ACTIONS.signUpFailed, error));
