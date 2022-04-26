import {CART_ACTIONS} from "./cart.types";

const INITIAL_STATE = {
  open: false,
  items: {},
  itemCount: 0
}

const itemCount = items => Object.values(items).reduce((total, item) => total + item.count, 0)

const addItem = (cart, item) => {
  const id = item.id;
  const count = cart.items[id] ? cart.items[id].count + 1 : 1;
  const items = {...cart.items, [id]: {...item, count}}
  return {...cart, items, itemCount: itemCount(items)}
}

const clearItem = (cart, idToRemove) => {
  const items = Object.fromEntries(Object.entries(cart.items).filter(([id]) => Number(id) !== Number(idToRemove)));
  return {...cart, items, itemCount: itemCount(items)}
}

const removeItem = (cart, id) => {
  const count = cart.items[id] ? cart.items[id].count - 1 : 0;

  if (count > 0) {
    const items = {...cart.items, [id]: {...cart.items[id], count}};
    return {...cart, items, itemCount: itemCount(items)};
  } else {
    return clearItem(cart, id);
  }
}

const cartReducer = (cart = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case CART_ACTIONS.toggleOpen:
      return {...cart, open: !cart.open};
    case CART_ACTIONS.closeCart:
      return {...cart, open: false};
    case CART_ACTIONS.addItem:
      return addItem(cart, payload);
    case CART_ACTIONS.clearItem:
      return clearItem(cart, payload)
    case CART_ACTIONS.removeItem:
      return removeItem(cart, payload)
    case CART_ACTIONS.clearCart:
      return INITIAL_STATE;
    default:
      return cart;
  }
}

export default cartReducer;