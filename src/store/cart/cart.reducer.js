import {CART_ACTIONS} from "./cart.types";

const INITIAL_STATE = {
  open: false,
  products: {},
  productCount: 0
}

const productCount = products => Object.values(products).reduce((total, item) => total + item.count, 0)

const addProduct = (cart, {category, id, price}) => {
  const count = cart.products[id] ? cart.products[id].count + 1 : 1;
  const products = {...cart.products, [id]: {count, category, price}}
  return {...cart, products, productCount: productCount(products)}
}

const clearProduct = (cart, idToRemove) => {
  const products = Object.fromEntries(Object.entries(cart.products).filter(([id]) => id !== idToRemove));
  return {...cart, products, productCount: productCount(products)}
}

const removeProduct = (cart, id) => {
  const count = cart.products[id] ? cart.products[id].count - 1 : 0;

  if (count > 0) {
    const products = {...cart.products, [id]: {...cart.products[id], count}};
    return {...cart, products, productCount: productCount(products)};
  } else {
    return clearProduct(cart, id);
  }
}

const cartReducer = (cart = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case CART_ACTIONS.toggleOpen:
      return {...cart, open: !cart.open};
    case CART_ACTIONS.closeCart:
      return {...cart, open: false};
    case CART_ACTIONS.addProduct:
      return addProduct(cart, payload);
    case CART_ACTIONS.clearProduct:
      return clearProduct(cart, payload)
    case CART_ACTIONS.removeProduct:
      return removeProduct(cart, payload)
    case CART_ACTIONS.clearCart:
      return INITIAL_STATE;
    default:
      return cart;
  }
}

export default cartReducer;