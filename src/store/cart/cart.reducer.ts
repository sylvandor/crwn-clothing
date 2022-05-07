import {AnyAction} from "redux";

import {addItem, clearCart, clearItem, closeCart, removeItem, toggleOpen} from "./cart.actions";
import {CartItemMap} from "./cart.types";
import {CategoryItem} from "../categories/categories.types";

export type CartState = {
  readonly open: boolean;
  readonly items: CartItemMap;
  readonly itemCount: number;
}

const INITIAL_STATE: CartState = {
  open: false,
  items: {},
  itemCount: 0
}

const itemCount = (items: CartItemMap): number =>
  Object.values(items).reduce((total, item) => total + item.count, 0)

const addItemReducer = (cart: CartState, item: CategoryItem): CartState => {
  const id = item.id;
  const count = cart.items[id] ? cart.items[id].count + 1 : 1;
  const items = {...cart.items, [id]: {...item, count}}
  return {...cart, items, itemCount: itemCount(items)}
}

const clearItemReducer = (cart: CartState, idToRemove: string): CartState => {
  const items = Object.fromEntries(Object.entries(cart.items).filter(([id]) => Number(id) !== Number(idToRemove)));
  return {...cart, items, itemCount: itemCount(items)}
}

const removeItemReducer = (cart: CartState, id: string): CartState => {
  const count = cart.items[id] ? cart.items[id].count - 1 : 0;

  if (count > 0) {
    const items = {...cart.items, [id]: {...cart.items[id], count}};
    return {...cart, items, itemCount: itemCount(items)};
  } else {
    return clearItemReducer(cart, id);
  }
}

const cartReducer = (cart = INITIAL_STATE, action = {} as AnyAction): CartState => {
  if (toggleOpen.match(action)) {
    return {...cart, open: !cart.open};
  } else if (closeCart.match(action)) {
    return {...cart, open: false};
  } else if (addItem.match(action)) {
    return addItemReducer(cart, action.payload);
  } else if (clearItem.match(action)) {
    return clearItemReducer(cart, action.payload)
  } else if (removeItem.match(action)) {
    return removeItemReducer(cart, action.payload)
  } else if (clearCart.match(action)) {
    return INITIAL_STATE;
  } else {
    return cart;
  }
}

export default cartReducer;
