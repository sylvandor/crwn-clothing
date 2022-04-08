import {BaseButton, GoogleSignInButton, InvertedButton} from "./button.styles";

const BUTTON_TYPES = {
  base: BaseButton,
  google: GoogleSignInButton,
  inverted: InvertedButton
}

const getButton = (buttonType = 'base') => BUTTON_TYPES[buttonType]

const Button = ({children, buttonType, buttonProps}) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...buttonProps}>{children}</CustomButton>
}

export default Button