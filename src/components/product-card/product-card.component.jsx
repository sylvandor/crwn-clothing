import {useContext} from "react";
import Button from "../button/button.component";
import {CartContext} from "../../contexts/cart/cart.context";

import './product-card.styles.scss'

const ProductCard = ({product: {id, name, imageUrl, price}}) => {
  const {addProduct} = useContext(CartContext);

  const addItem = () => addProduct(id);

  return (
    <div className={'product-card-container'}>
      <img src={imageUrl} alt={name}/>
      <div className={'footer'}>
        <span className={'name'}>{name}</span>
        <span className={'price'}>{price}</span>
      </div>
      <Button buttonType={'inverted'} buttonProps={{onClick: addItem}}>Add to Cart</Button>
    </div>
  )
}

export default ProductCard;