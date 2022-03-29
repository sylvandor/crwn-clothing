import Button from "../button/button.component";
import React, {useContext} from "react";
import {CartContext} from "../../contexts/cart/cart.context";
import {ProductsContext} from "../../contexts/products/products.context";
import CartItem from "../cart-item/cart-item.component";

import './cart-dropdown.styles.scss'
import {Link} from "react-router-dom";

const CartDropdown = () => {
  const {products: cartProducts, closeCart} = useContext(CartContext)
  const {products} = useContext(ProductsContext);

  return (
    <div className={'cart-dropdown-container'}>
      <div className={'cart-items'}>
        {
          Object.entries(cartProducts)
            .map(([id, count]) =>
              <CartItem key={id} product={products[id]} count={count}/>
            )
        }
      </div>
      <Link to={'/checkout'}><Button buttonProps={{onClick: closeCart}}>CHECKOUT</Button></Link>
    </div>
  );
}

export default CartDropdown;