import Button from "../button/button.component";
import React, {useContext} from "react";
import {CartContext} from "../../contexts/cart/cart.context";
import {CategoriesContext} from "../../contexts/products/categoriesContext";
import CartItem from "../cart-item/cart-item.component";
import {Link} from "react-router-dom";

import {CartDropdownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const {products, closeCart} = useContext(CartContext)
  const {getProduct} = useContext(CategoriesContext);

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
      <Link to={'/checkout'}><Button buttonProps={{onClick: closeCart}}>CHECKOUT</Button></Link>
    </CartDropdownContainer>
  );
}

export default CartDropdown;