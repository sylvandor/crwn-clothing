import {FC, memo} from "react";

import {CartItem} from "../../store/cart/cart.types";

import {CartItemContainer, ItemDetails, Name} from "./cart-item.styles";

type CartItemProps = {
  cartItem: CartItem;
};

const CartItemComponent: FC<CartItemProps> = memo(({cartItem: {name, imageUrl, price, count}}) =>
  <CartItemContainer>
    <img src={imageUrl} alt={name}/>
    <ItemDetails>
      <Name className={'name'}>{name}</Name>
      <span>
        {`${count} x $${price}`}
      </span>
    </ItemDetails>
  </CartItemContainer>
);

export default CartItemComponent;