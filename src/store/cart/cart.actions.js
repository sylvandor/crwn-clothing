import {CART_ACTIONS} from "./cart.types";

export const toggleOpen = {type: CART_ACTIONS.toggleOpen};
export const closeCart = {type: CART_ACTIONS.closeCart};
export const addItem = product => ({type: CART_ACTIONS.addItem, payload: product});
export const clearItem = id => ({type: CART_ACTIONS.clearItem, payload: id});
export const removeItem = id =>   ({type: CART_ACTIONS.removeItem, payload: id});
export const clearCart = ({type: CART_ACTIONS.clearCart})