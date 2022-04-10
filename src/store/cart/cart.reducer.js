import {CART_ACTIONS} from "./cart.types";

const INITIAL_STATE = {
  open: false,
  products: {},
  productCount: 0
}

const productCount = products => Object.values(products).reduce((total, item) => total + item.count, 0)

const addProduct = (state, category, id) => {
  const count = state.products[id] ? state.products[id].count + 1 : 1;
  const products = {...state.products, [id]: {count, category}}
  return {...state, products, productCount: productCount(products)}
}

const clearProduct = (state, idToRemove) => {
  const products = Object.fromEntries(Object.entries(state.products).filter(([id]) => id !== idToRemove));
  return {...state, products, productCount: productCount(products)}
}

const removeProduct = (state, id) => {
  const count = state.products[id] ? state.products[id].count - 1 : 0;

  if (count > 0) {
    const products = {...state.products, [id]: {...state.products[id], count}};
    return {...state, products, productCount: productCount(products)};
  } else {
    return clearProduct(state, id);
  }
}

const cartReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case CART_ACTIONS.toggleOpen:
      return {...state, open: !state.open};
    case CART_ACTIONS.closeCart:
      return {...state, open: false};
    case CART_ACTIONS.addProduct:
      return addProduct(state, payload.category, payload.id);
    case CART_ACTIONS.clearProduct:
      return clearProduct(state, payload)
    case CART_ACTIONS.removeProduct:
      return removeProduct(state, payload)
    default:
      return state;
  }
}

export default cartReducer;