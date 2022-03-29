import {useContext} from "react";
import {CartContext} from "../../contexts/cart/cart.context";
import {ProductsContext} from "../../contexts/products/products.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import './checkout.styles.scss'

const Checkout = () => {
  const {products: cartProducts} = useContext(CartContext);
  const {products} = useContext(ProductsContext);

  const totalCost = Object.entries(cartProducts)
    .reduce((total, [id, count]) => total + products[id].price * count, 0);

  return (
    <div className={'checkout-container'}>
      <div className={'checkout-header'}>
        <div className={'header-block'}><span>Product</span></div>
        <div className={'header-block'}><span>Description</span></div>
        <div className={'header-block'}><span>Quantity</span></div>
        <div className={'header-block'}><span>Price</span></div>
        <div className={'header-block'}><span>Remove</span></div>
      </div>
      {
        Object.entries(cartProducts)
          .map(([id, count]) =>
            <CheckoutItem key={id} product={products[id]} id={id} count={count}/>
          )
      }
      <div className={'total'}>{`TOTAL: $${totalCost}`}</div>
    </div>
  )
}
export default Checkout;
