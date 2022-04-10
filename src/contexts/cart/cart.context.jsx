import {createContext, useReducer} from "react";

export const CartContext = createContext({});

const INITIAL_STATE = {
  open: false,
  products: {},
  productCount: 0
};

const ACTIONS = {
  toggleOpen: 'TOGGLE_OPEN',
  closeCart: 'CLOSE_CART',
  addProduct: 'ADD_PRODUCT',
  clearProduct: 'CLEAR_PRODUCT',
  removeProduct: 'REMOVE_PRODUCTS'
}
const productCount = products => Object.values(products).reduce((total, item) => total + item.count, 0)

const addProduct = (state, category, id) => {
  const count = state.products[id] ? state.products[id].count++ : 1;
  const products = {...state.products, [id]: {count, category}}
  return {...state, products, productCount: productCount(products) }
}

const clearProduct = (state, idToRemove) => {
  const products = Object.fromEntries(Object.entries(state.products).filter(([id]) => id !== idToRemove));
  return {...state, products, productCount: productCount(products) }
}

const removeProduct = (state, id) => {
  const count = state.products[id] ? state.products[id].count-- : 0;

  if (count > 0) {
    const products = {...state.products, [id]: {...state.products[id], count}};
    return {...state, products, productCount: productCount(products)};
  } else {
    return clearProduct(state, id);
  }
}

const cartReducer = (state, {type, payload}) => {
  switch (type) {
    case ACTIONS.toggleOpen:
      return {...state, open: !state.open};
    case ACTIONS.closeCart:
      return {...state, open: false};
    case ACTIONS.addProduct:
      return addProduct(state, payload.category, payload.id);
    case ACTIONS.clearProduct:
      return clearProduct(state, payload)
    case ACTIONS.removeProduct:
      return removeProduct(state, payload)
    default:
      throw new Error(`Unhandled type ${type} in the cartReducer`);
  }
}

export const CartProvider = ({children}) => {
  const[{open, products, productCount}, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const toggleOpen = () => dispatch({type: ACTIONS.toggleOpen});
  const closeCart = () => dispatch({type: ACTIONS.closeCart});
  const addProduct = (id, category) => dispatch({type: ACTIONS.addProduct, payload: {id, category}});
  const clearProduct = id => dispatch({type: ACTIONS.clearProduct, payload: id});
  const removeProduct = id => dispatch({type: ACTIONS.removeProduct, payload: id});

  const value = {open, toggleOpen, closeCart, products, addProduct, productCount, removeProduct, clearProduct};

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}