import {useContext} from "react";
import {CartContext} from "../../contexts/cart/cart.context";

import './checkout-item.styles.scss'

const CheckoutItem = ({product: {name, imageUrl, price}, id, category, count}) => {
  const {addProduct, removeProduct, clearProduct} = useContext(CartContext)

  const add = () => addProduct(id, category)
  const remove = () => removeProduct(id)
  const clear = () => clearProduct(id);

  return (
    <div className={'checkout-item-container'}>
      <div className={'image-container'}>
        <img src={imageUrl} alt={name}/>
      </div>
      <span className={'name'}>{name}</span>
      <span className={'quantity'}>
        <span className={'arrow'} onClick={remove}>&#10094;</span>
        <span className={'count'}>{count}</span>
        <span className={'arrow'} onClick={add}>&#10095;</span>
      </span>
      <span className={'cost'}>{price}</span>
      <span className={'remove-button'} onClick={clear}>&#10005;</span>
    </div>
  )
}

export default CheckoutItem;
