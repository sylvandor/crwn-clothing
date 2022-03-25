import {createUserDocumentFromAuth, signInWithGooglePopup} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const logGoogleUserPopup = async () => {
  const {user} = await signInWithGooglePopup();
  const userDocRef = createUserDocumentFromAuth(user);
}

const SignIn = () =>
  <div>
    <h1>Sign In</h1>
    <button onClick={logGoogleUserPopup}>
      Sign in with Google Popup
    </button>
    <SignUpForm/>
  </div>

export default SignIn;
