import {CART_ACTIONS} from "./cart.types";

export const toggleOpen = {type: CART_ACTIONS.toggleOpen};
export const closeCart = {type: CART_ACTIONS.closeCart};
export const addProduct = (id, category) => ({type: CART_ACTIONS.addProduct, payload: {id, category}});
export const clearProduct = id => ({type: CART_ACTIONS.clearProduct, payload: id});
export const removeProduct = id => ({type: CART_ACTIONS.removeProduct, payload: id});