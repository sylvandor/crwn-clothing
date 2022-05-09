import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in/sign-in-form.component";

import {FormContainer} from "./authentication.styles";

const Authentication = () =>
  <FormContainer>
    <SignInForm/>
    <SignUpForm/>
  </FormContainer>


export default Authentication;


