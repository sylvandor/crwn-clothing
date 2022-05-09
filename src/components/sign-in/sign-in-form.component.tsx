import {ChangeEvent, FormEvent, useState} from "react";
import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_TYPES} from "../button/button.component";

import {ButtonGroup} from "./sign-in-form.styles";
import {useDispatch} from "react-redux";
import {emailSignInStart, googleSignInStart} from "../../store/user/user.actions";

const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;

  const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) =>
    setFormFields({...formFields, [name]: value})

  const logGoogleUserPopup = () => dispatch(googleSignInStart());

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    dispatch(emailSignInStart(email, password));
    resetFormFields();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Already have an account?</h2>
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
        value={password}
      />
      <ButtonGroup>
        <Button type={'submit'}>Sign In</Button>
        <Button buttonType={BUTTON_TYPES.google} type={'button'} onClick={logGoogleUserPopup}>
          Sign In With Google
        </Button>
      </ButtonGroup>
    </form>
  )
}

export default SignInForm;


