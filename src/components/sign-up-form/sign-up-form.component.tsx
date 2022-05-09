import {ChangeEvent, FormEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {AuthError, AuthErrorCodes} from 'firebase/auth';

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {signUpStart} from "../../store/user/user.actions";

import {SignUpContainer} from "./sign-up-form.styles";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields;

  const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) =>
    setFormFields({...formFields, [name]: value});

  const resetForm = () => setFormFields(defaultFormFields);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetForm();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('Email already in use')
        console.error('Email already in use');
      } else {
        console.error('Failed to create user', error)
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
          type={'text'}
          required={true}
          onChange={handleChange}
          name={'displayName'}
          value={displayName}/>
        <FormInput
          label={'Email'}
          type={'email'}
          required={true}
          onChange={handleChange}
          name={'email'}
          value={email}/>
        <FormInput
          label={'Password'}
          type={'password'}
          required={true}
          onChange={handleChange}
          name={'password'}
          value={password}/>
        <FormInput
          label={'Confirm Password'}
          type={'password'}
          required={true}
          onChange={handleChange}
          name={'confirmPassword'}
          value={confirmPassword}
        />
        <Button type={'submit'}>Sign Up</Button>
      </form>
    </SignUpContainer>)
}

export default SignUpForm;