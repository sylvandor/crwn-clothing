import {all, call, put, takeLatest} from "typed-redux-saga/macro";
import {User} from 'firebase/auth';

import {USER_ACTIONS} from "./user.types";
import {
  EmailSignInStart,
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed, SignUpStart, SignUpSuccess,
  signUpSuccess
} from "./user.actions";

import {
  AdditionalInformation,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  getCurrentUser,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  signOutUser
} from "../../utils/firebase/firebase.utils";


export function* getSnapshotFromUserAuth(userAuth: User, additionalDetails?: AdditionalInformation) {
  try {
    const userSnapshot = yield* call(createUserDocumentFromAuth, userAuth, additionalDetails);

    if (userSnapshot) {
      yield* put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signInWithEmail({payload: {email, password}}: EmailSignInStart) {
  try {
    const userCredential = yield* call(signInAuthUserWithEmailAndPassword, email, password);

    if (userCredential) {
      yield* call(getSnapshotFromUserAuth, userCredential.user);
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signInWithGoogle() {
  try {
    const {user} = yield* call(signInWithGooglePopup);
    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (userAuth) {
      yield* call(getSnapshotFromUserAuth, userAuth);
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signUp({payload: {email, password, displayName}}: SignUpStart) {
  try {
    const userCredential = yield* call(createAuthUserWithEmailAndPassword, email, password);

    if(userCredential) {
      const {user} = userCredential
      yield* put(signUpSuccess(user, {displayName}));
    }
  } catch (error) {
    yield* put(signUpFailed(error as Error))
  }
}

export function* signOut() {
  try {
    yield* call(signOutUser);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailed(error as Error));
  }
}

export function* signInAfterSignup({payload: {user, additionalDetails}}: SignUpSuccess) {
  yield* call(getSnapshotFromUserAuth, user, additionalDetails)
}

export function* onUserSignOutStart() {
  yield* takeLatest(USER_ACTIONS.signOutStart, signOut)
}

export function* onEmailSignInStart() {
  yield* takeLatest(USER_ACTIONS.emailSignInStart, signInWithEmail)
}

export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTIONS.googleSignInStart, signInWithGoogle)
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTIONS.checkUserSession, isUserAuthenticated)
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTIONS.signUpSuccess, signInAfterSignup)
}

export function* onSignUpStart() {
  yield* takeLatest(USER_ACTIONS.signUpStart, signUp)
}

export function* userSaga() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onUserSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ])
}

