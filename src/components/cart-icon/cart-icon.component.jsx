import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss'
import {useContext} from "react";
import {CartContext} from "../../contexts/cart/cart.context";

const CartIcon = () => {
  const {cart, setCart} = useContext(CartContext);

  const toggleCart = () => setCart({...cart, open: !cart.open})

  return (
    <div className={'cart-icon-container'} onClick={toggleCart}>
      <ShoppingIcon className={'shopping-icon'}/>
      <span className={'item-count'}>0</span>
    </div>
  )
}

export default CartIcon;