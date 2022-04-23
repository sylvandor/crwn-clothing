import {all, call, put, takeLatest} from "redux-saga/effects";

import {USER_ACTIONS} from "./user.types";
import {signInFailed, signInSuccess, signOutFailed, signOutSuccess, signUpFailed, signUpSuccess} from "./user.actions";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  getCurrentUser,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  signOutUser
} from "../../utils/firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails)
    yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithEmail({payload: {email, password}}) {
  try {
    const {user} = yield call(signInAuthUserWithEmailAndPassword, email, password)
    yield call(getSnapshotFromUserAuth, user)
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithGoogle() {
  try {
    const {user} = yield call(signInWithGooglePopup)
    yield call(getSnapshotFromUserAuth, user)
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (userAuth) {
      yield call(getSnapshotFromUserAuth, userAuth);
    }
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signUp({payload: {email, password, displayName}}) {
  try {
    const {user} = yield call(createAuthUserWithEmailAndPassword(email, password));
    yield put(signUpSuccess(user, {displayName}));
  } catch (error) {
    yield put (signUpFailed(error))
  }
}

export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

export function* signInAfterSignup({payload: {user, additionalDetails}}) {
  yield call(getSnapshotFromUserAuth, user, additionalDetails)
}

export function* onUserSignOutStart() {
  yield takeLatest(USER_ACTIONS.SIGN_OUT_START, signOut)
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTIONS.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTIONS.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTIONS.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTIONS.SIGN_UP_SUCCESS, signInAfterSignup)
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTIONS.SIGN_UP_START, signUp)
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onUserSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ])
}

