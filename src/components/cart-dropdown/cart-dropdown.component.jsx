import Button from "../button/button.component";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart/cart.context";
import {ProductsContext} from "../../contexts/products/products.context";
import CartItem from "../cart-item/cart-item.component";

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
  const {products: cartProducts} = useContext(CartContext)
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
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;