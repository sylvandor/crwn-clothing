import {createContext, useState} from "react";

const INIT_CART = {
  open: false,
  products: []
}

export const CartContext = createContext({
  cart: INIT_CART
});

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState(INIT_CART);
  const value = {cart, setCart};

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}