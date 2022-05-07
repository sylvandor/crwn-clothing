import {CategoryItem} from "../categories/categories.types";

export enum CART_ACTIONS {
  toggleOpen = 'cart/TOGGLE_OPEN',
  closeCart = 'cart/CLOSE_CART',
  addItem = 'cart/ADD_ITEM',
  clearItem = 'cart/CLEAR_ITEM',
  removeItem = 'cart/REMOVE_ITEMS',
  clearCart = 'cart/CLEAR_CART'
}

export type CartItem = CategoryItem & {
  count: number;
}

export type CartItemMap = {
  [key: string]: CartItem
}
