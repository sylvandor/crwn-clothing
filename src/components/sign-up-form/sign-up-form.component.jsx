import {useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {SignUpContainer} from "./sign-up-form.styles";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {displayName, email, password, confirmPassword} = formFields;

  const handleChange = ({target: {name, value}}) =>
    setFormFields({...formFields, [name]: value})

  const resetForm = () => setFormFields(defaultFormFields);

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return;
    }

    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth({...user, displayName});
      resetForm();
    } catch ({message, code}) {
      if (code === 'auth/email-already-in-use') {
        alert('Email already in use')
        console.error('Email already in use', message);
      } else {
        console.error('Failed to create user', message)
      }
    }
  }

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={'Display Name'}
          inputProps={{type: 'text', required: true, onChange: handleChange, name: 'displayName', value: displayName}}/>
        <FormInput
          label={'Email'}
          inputProps={{type: 'email', required: true, onChange: handleChange, name: 'email', value: email}}/>
        <FormInput
          label={'Password'}
          inputProps={{type: 'password', required: true, onChange: handleChange, name: 'password', value: password}}/>
        <FormInput
          label={'Confirm Password'}
          inputProps={{
            type: 'password',
            required: true,
            onChange: handleChange,
            name: 'confirmPassword',
            value: confirmPassword
          }}/>
        <Button buttonProps={{type: 'submit'}}>Sign Up</Button>
      </form>
    </SignUpContainer>)
}

export default SignUpForm;