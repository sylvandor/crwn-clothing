import {createContext, useEffect, useState} from "react";
import SHOP_PRODUCTS from '../../shop-data.json'

export const ProductsContext = createContext({
  products: [],
  setProducts: () => []
});

export const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState(null);
  const value = {products, setProducts};

  useEffect(() => setProducts(SHOP_PRODUCTS), [])

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}