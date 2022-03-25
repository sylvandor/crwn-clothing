import {useState} from "react";
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup
} from "../../utils/firebase/firebase.utils";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";

import './sign-in-form.styles.scss'

const defaultFormFields = {
  email: '',
  password: ''
}

const logGoogleUserPopup = async () => {
  const {user} = await signInWithGooglePopup();
  const userDocRef = createUserDocumentFromAuth(user);
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;

  const handleChange = ({target: {name, value}}) =>
    setFormFields({...formFields, [name]: value})

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch ({code, message}) {
      switch (code) {
        case 'auth/user-not-found':
          alert('No user for email');
          break;
        case 'auth/wrong-password':
          alert('Incorrect password');
          break;
        default:
          console.error(message);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Already have an account?</h2>
      <FormInput label={'Email'}
                 inputProps={{type: 'email', required: true, onChange: handleChange, name: 'email', value: email}}/>
      <FormInput label={'Password'} inputProps={{
        type: 'password',
        required: true,
        onChange: handleChange,
        name: 'password',
        value: password
      }}/>
      <div className={'button-group'}>
        <Button buttonProps={{type: 'submit'}}>Sign In</Button>
        <Button
          buttonType={'google'}
          buttonProps={{
            type: 'button',
            onClick: logGoogleUserPopup,

          }}>Sign In With Google</Button>

      </div>
    </form>
  )
}

export default SignInForm;


