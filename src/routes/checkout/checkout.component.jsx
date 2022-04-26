import {useSelector} from "react-redux";
import PaymentForm from "../../components/payment-form/payment.form.component";
import {selectCartItems, selectTotal} from "../../store/cart/cart.selectors";

import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from "./checkout.styles";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
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
        Object.entries(cartItems)
          .map(([id, cartItem]) =>
            <CheckoutItem key={id} cartItem={cartItem}/>
          )
      }
      <Total>{`TOTAL: $${total}`}</Total>

      <PaymentForm/>
    </CheckoutContainer>
  )
}
export default Checkout;
