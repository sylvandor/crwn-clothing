import {useSelector} from "react-redux";
import PaymentForm from "../../components/payment-form/payment.form.component";
import {selectProducts, selectTotal} from "../../store/cart/cart.selectors";

import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from "./checkout.styles";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {selectGetProduct} from "../../store/categories/categories.selectors";

const Checkout = () => {
  const products = useSelector(selectProducts);
  const getProduct = useSelector(selectGetProduct);
  const total = useSelector(selectTotal)

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
      <Total>{`TOTAL: $${total}`}</Total>

      <PaymentForm/>
    </CheckoutContainer>
  )
}
export default Checkout;
