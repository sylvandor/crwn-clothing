import {useSelector} from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {selectGetProduct} from "../../store/categories/categories.selectors";
import {selectProducts} from "../../store/cart/cart.selectors";

import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from "./checkout.styles";

const Checkout = () => {
  const products = useSelector(selectProducts);
  const getProduct = useSelector(selectGetProduct);

  const totalCost = Object.entries(products)
    .reduce((total, [id, {count, category}]) =>
      total + getProduct(category, id).price * count, 0);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock><span>Product</span></HeaderBlock>
        <HeaderBlock><span>Description</span></HeaderBlock>
        <HeaderBlock><span>Quantity</span></HeaderBlock>
        <HeaderBlock><span>Price</span></HeaderBlock>
        <HeaderBlock><span>Remove</span></HeaderBlock>
      </CheckoutHeader>
      {
        Object.entries(products)
          .map(([id, {category, count}]) =>
            <CheckoutItem key={id} product={getProduct(category, id)} id={id} category={category} count={count}/>
          )
      }
      <Total>{`TOTAL: $${totalCost}`}</Total>
    </CheckoutContainer>
  )
}
export default Checkout;
