import {useDispatch} from "react-redux";

import {addItem, clearItem, removeItem} from "../../store/cart/cart.actions";

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
import {CartItem} from "../../store/cart/cart.types";
import {FC} from "react";

type CheckoutItemProps = {
  cartItem: CartItem
}

const CheckoutItem: FC<CheckoutItemProps> = ({cartItem}) => {
  const dispatch = useDispatch();
  const {imageUrl, name, price, id, count} = cartItem;


  const add = () => dispatch(addItem({...cartItem}));
  const remove = () => dispatch(removeItem(id));
  const clear = () => dispatch(clearItem(id));

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
