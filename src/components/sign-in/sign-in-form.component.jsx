import {useState} from "react";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";

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

  const handleChange = ({target: {name, value}}) =>
    setFormFields({...formFields, [name]: value})

  const logGoogleUserPopup = () => dispatch(googleSignInStart());

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async event => {
    event.preventDefault()

    dispatch(emailSignInStart(email, password));
    resetFormFields();
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
      <ButtonGroup>
        <Button buttonProps={{type: 'submit'}}>Sign In</Button>
        <Button
          buttonType={'google'}
          buttonProps={{
            type: 'button',
            onClick: logGoogleUserPopup,

          }}>Sign In With Google</Button>

      </ButtonGroup>
    </form>
  )
}

export default SignInForm;


