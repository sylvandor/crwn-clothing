import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss'
import {useContext} from "react";
import {CartContext} from "../../contexts/cart/cart.context";

const CartIcon = () => {
  const {toggleOpen, productCount} = useContext(CartContext);

  return (
    <div className={'cart-icon-container'} onClick={toggleOpen}>
      <ShoppingIcon className={'shopping-icon'}/>
      <span className={'item-count'}>{productCount}</span>
    </div>
  )
}

export default CartIcon;