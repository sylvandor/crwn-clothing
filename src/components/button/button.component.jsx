import './button.styles.scss'

const BUTTON_TYPES = {
  google: 'google-sign-in',
  inverted: 'inverted'
}

const Button = ({children, buttonType, buttonProps}) =>
  <button className={`button-container ${BUTTON_TYPES[buttonType]}`} {...buttonProps}>{children}</button>

export default Button