import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect
} from "../../utils/firebase/firebase.utils";
import {useEffect} from "react";
import {getRedirectResult} from 'firebase/auth'

const logGoogleUserPopup = async () => {
  const {user} = await signInWithGooglePopup();
  const userDocRef = createUserDocumentFromAuth(user);
}

const SignIn = () => {
  useEffect(async () => {
    const response = await getRedirectResult(auth);
    if(response) {
      const userDocRef = createUserDocumentFromAuth(response.user);
    }
  }, []);

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUserPopup}>
        Sign in with Google Popup
      </button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
    </div>
  )
}
export default SignIn;
