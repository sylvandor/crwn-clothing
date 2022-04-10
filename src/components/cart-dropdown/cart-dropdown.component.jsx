import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import {selectGetProduct} from "../../store/categories/categories.selectors";
import {selectProducts} from "../../store/cart/cart.selectors";
import {closeCart} from "../../store/cart/cart.actions";

import {CartDropdownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const getProduct = useSelector(selectGetProduct);

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          Object.keys(products).length === 0 ?
            <EmptyMessage>Add items to your cart</EmptyMessage> :
            Object.entries(products)
              .map(([id, {category, count}]) =>
                <CartItem key={id} product={getProduct(category, id)} category={category} count={count}/>
              )
        }
      </CartItems>
      <Link to={'/checkout'}><Button buttonProps={{onClick: () => dispatch(closeCart)}}>CHECKOUT</Button></Link>
    </CartDropdownContainer>
  );
}

export default CartDropdown;