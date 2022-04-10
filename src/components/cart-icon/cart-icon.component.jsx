import {useDispatch, useSelector} from "react-redux";

import {toggleOpen} from "../../store/cart/cart.actions";
import {selectProductCount} from "../../store/cart/cart.selectors";

import {CartIconContainer, ItemCount, ShoppingIcon} from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const productCount = useSelector(selectProductCount);

  return (
    <CartIconContainer onClick={() => dispatch(toggleOpen)}>
      <ShoppingIcon className={'shopping-icon'}/>
      <ItemCount className={'item-count'}>{productCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;