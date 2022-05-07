import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js'

import {clearCart} from "../../store/cart/cart.actions";
import {selectTotal} from "../../store/cart/cart.selectors";
import {selectCurrentUser} from "../../store/user/user.selectors";

import {FormContainer, PaymentButton, PaymentFormContainer} from "./payment.form.styles";

const PaymentForm = () => {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const total = useSelector(selectTotal);
  const currentUser = useSelector(selectCurrentUser)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    try {
      const response = await fetch('/.netlify/functions/create-payment-intent', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({amount: total * 100})
      }).then(res => res.json())
      const {paymentIntent: {client_secret}} = response

      setIsProcessingPayment(false);

      const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: currentUser ? currentUser.displayName : 'Guest'
          }
        }
      });

      if (paymentResult.error) {
        console.error(paymentResult.error)
      } else if (paymentResult.paymentIntent.status === 'succeeded') {
        console.log('Payment Success')
        dispatch(clearCart())
      }
    } catch (error) {
      console.error(error)
      setIsProcessingPayment(false);
    }
  }

  return <PaymentFormContainer>
    <FormContainer onSubmit={paymentHandler}>
      <h2>Credit Card Payment: </h2>
      <CardElement/>
      <PaymentButton isLoading={isProcessingPayment} buttonType={'inverted'}>Pay Now</PaymentButton>
    </FormContainer>
  </PaymentFormContainer>
}

export default PaymentForm;