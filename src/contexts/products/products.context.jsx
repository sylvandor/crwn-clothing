import {createContext, useEffect, useState} from "react";
import SHOP_PRODUCTS from '../../shop-data.json'

export const ProductsContext = createContext({
  products: [],
  setProducts: () => []
});

export const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState(null);
  const value = {products, setProducts};

  const productsObj =
    Object.fromEntries(SHOP_PRODUCTS.map(product =>
      [product.id, product]))

  useEffect(() => setProducts(productsObj), [])

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}