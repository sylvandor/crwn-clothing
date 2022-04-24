import {useDispatch} from "react-redux";

import {addProduct, clearProduct, removeProduct} from "../../store/cart/cart.actions";

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
  const dispatch = useDispatch();

  const add = () => dispatch(addProduct(id, category, price));
  const remove = () => dispatch(removeProduct(id));
  const clear = () => dispatch(clearProduct(id));

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
