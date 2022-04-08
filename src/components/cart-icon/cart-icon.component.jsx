import {useContext} from "react";
import {CartContext} from "../../contexts/cart/cart.context";

import {CartIconContainer, ItemCount, ShoppingIcon} from "./cart-icon.styles";

const CartIcon = () => {
  const {toggleOpen, productCount} = useContext(CartContext);

  return (
    <CartIconContainer onClick={toggleOpen}>
      <ShoppingIcon className={'shopping-icon'}/>
      <ItemCount className={'item-count'}>{productCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;