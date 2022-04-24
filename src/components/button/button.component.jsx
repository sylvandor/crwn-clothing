import {BaseButton, ButtonSpinner, GoogleSignInButton, InvertedButton} from "./button.styles";

const BUTTON_TYPES = {
  base: BaseButton,
  google: GoogleSignInButton,
  inverted: InvertedButton
}

const getButton = (buttonType = 'base') => BUTTON_TYPES[buttonType]

const Button = ({children, buttonType, isLoading, buttonProps}) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton disabled={isLoading} {...buttonProps}>
    {isLoading ? <ButtonSpinner/> : children}
  </CustomButton>
}

export default Button