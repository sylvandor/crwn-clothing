import {useContext} from "react";
import {CartContext} from "../../contexts/cart/cart.context";
import {CategoriesContext} from "../../contexts/products/categoriesContext";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import './checkout.styles.scss'

const Checkout = () => {
  const {products} = useContext(CartContext);
  const {getProduct} = useContext(CategoriesContext);

  const totalCost = Object.entries(products)
    .reduce((total, [id, {count, category}]) =>
      total + getProduct(category, id).price * count, 0);

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
        Object.entries(products)
          .map(([id, {category, count}]) =>
            <CheckoutItem key={id} product={getProduct(category, id)} id={id} category={category} count={count}/>
          )
      }
      <div className={'total'}>{`TOTAL: $${totalCost}`}</div>
    </div>
  )
}
export default Checkout;
