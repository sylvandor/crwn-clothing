import {useContext} from "react";
import {CartContext} from "../../contexts/cart/cart.context";

import {
  Arrow,
  CheckoutItemContainer,
  Cost,
  Count,
  ImageContainer,
  Name,
  Quantity,
  RemoveButton
} from "./checkout-item.styles";

const CheckoutItem = ({product: {name, imageUrl, price}, id, category, count}) => {
  const {addProduct, removeProduct, clearProduct} = useContext(CartContext)

  const add = () => addProduct(id, category)
  const remove = () => removeProduct(id)
  const clear = () => clearProduct(id);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name}/>
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={remove}>&#10094;</Arrow>
        <Count>{count}</Count>
        <Arrow onClick={add}>&#10095;</Arrow>
      </Quantity>
      <Cost>{price}</Cost>
      <RemoveButton onClick={clear}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem;
