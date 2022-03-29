import {useContext} from "react";
import {ProductsContext} from "../../contexts/products/products.context";
import ProductCard from "../product-card/product-card.component";

import './shop.styles.scss'

const Shop = () => {
  const {products} = useContext(ProductsContext)

  return (
    <div className={'products-container'}>
      {products && Object.entries(products).map(([id, product]) =>
        <ProductCard key={id} product={product}/>)}
    </div>
  );
}

export default Shop;