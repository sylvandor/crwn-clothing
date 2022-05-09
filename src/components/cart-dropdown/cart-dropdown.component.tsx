import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {selectCartItems} from "../../store/cart/cart.selectors";
import {closeCart} from "../../store/cart/cart.actions";

import {CartDropdownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          Object.keys(cartItems).length === 0 ?
            <EmptyMessage>Add items to your cart</EmptyMessage> :
            Object.entries(cartItems)
              .map(([id, cartItem]) => <CartItem key={id} cartItem={cartItem}/>)
        }
      </CartItems>
      <Link to={'/checkout'}><Button onClick={() => dispatch(closeCart())}>CHECKOUT</Button></Link>
    </CartDropdownContainer>
  );
}

export default CartDropdown;