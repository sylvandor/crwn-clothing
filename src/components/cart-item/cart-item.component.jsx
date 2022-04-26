import {CartItemContainer, ItemDetails, Name} from "./cart-item.styles";

const CartItem = ({cartItem: {name, imageUrl, price, count}}) =>
  <CartItemContainer>
    <img src={imageUrl} alt={name}/>
    <ItemDetails>
      <Name className={'name'}>{name}</Name>
      <span>
        {`${count} x $${price}`}
      </span>
    </ItemDetails>
  </CartItemContainer>

export default CartItem;