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

  const closeCart = () => {
    setOpen(false);
  }

  const addProduct = (id, category) => {
    const count = products[id] ? ++products[id].count : 1;
    setProducts({...products, [id]: {count, category}});
  }

  const clearProduct = (idToRemove) => {
    const updatedProducts = Object.fromEntries(Object.entries(products).filter(([id]) => id !== idToRemove));

    setProducts(updatedProducts);
  };

  const removeProduct = id => {
    const count = products[id] ? --products[id].count : 0;

    if(count > 0) {
      setProducts({...products, [id]: {...products[id], count}});
    } else {
      clearProduct(id)
    }
  }

  useEffect(() => {

    setProductCount(Object.values(products).reduce((total, item) => total + item.count, 0))
  }, [products]);

  const value = {open, toggleOpen, closeCart, products, addProduct, productCount, removeProduct, clearProduct};

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}