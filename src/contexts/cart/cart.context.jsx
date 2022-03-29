import {createContext, useEffect, useState} from "react";

export const CartContext = createContext({
  open: false,
  products: {},
  productCount: 0
});

export const CartProvider = ({children}) => {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState({});
  const [productCount, setProductCount] = useState(0);

  const toggleOpen = () => {
    setOpen(!open);
  }

  const addProduct = id => {
    const count = products[id] ? ++products[id] : 1;

    setProducts({...products, [id]: count});
  }

  useEffect(() => {
    setProductCount(Object.values(products).reduce((total, itemCount) => total + itemCount, 0))
  }, [products]);

  const value = {open, toggleOpen, products, addProduct, productCount};

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}