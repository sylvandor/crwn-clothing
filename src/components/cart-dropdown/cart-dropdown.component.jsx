import Button from "../button/button.component";
import React, {useContext} from "react";
import {CartContext} from "../../contexts/cart/cart.context";
import {CategoriesContext} from "../../contexts/products/categoriesContext";
import CartItem from "../cart-item/cart-item.component";

import './cart-dropdown.styles.scss'
import {Link} from "react-router-dom";

const CartDropdown = () => {
  const {products, closeCart} = useContext(CartContext)
  const {getProduct} = useContext(CategoriesContext);

  return (
    <div className={'cart-dropdown-container'}>
      <div className={'cart-items'}>
        {
          Object.entries(products)
            .map(([id, {category, count}]) =>
              <CartItem key={id} product={getProduct(category, id)} category={category} count={count}/>
            )
        }
      </div>
      <Link to={'/checkout'}><Button buttonProps={{onClick: closeCart}}>CHECKOUT</Button></Link>
    </div>
  );
}

export default CartDropdown;