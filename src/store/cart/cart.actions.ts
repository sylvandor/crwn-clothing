import {CART_ACTIONS} from "./cart.types";
import {CategoryItem} from "../categories/categories.types";
import {Action, ActionWithPayload, createAction, withMatcher} from "../../utils/reducer/reducer.utils";

type ToggleOpen = Action<CART_ACTIONS.toggleOpen>;
export const toggleOpen = withMatcher((): ToggleOpen =>
  createAction(CART_ACTIONS.toggleOpen));

type CloseCart = Action<CART_ACTIONS.closeCart>;
export const closeCart = withMatcher((): CloseCart =>
  createAction(CART_ACTIONS.closeCart));

type AddItem = ActionWithPayload<CART_ACTIONS.addItem, CategoryItem>;
export const addItem = withMatcher((categoryItem: CategoryItem): AddItem =>
  createAction(CART_ACTIONS.addItem, categoryItem));

type ClearItem = ActionWithPayload<CART_ACTIONS.clearItem, number>;
export const clearItem = withMatcher((id: number): ClearItem =>
  createAction(CART_ACTIONS.clearItem, id));

type RemoveItem = ActionWithPayload<CART_ACTIONS.removeItem, number>;
export const removeItem = withMatcher((id: number): RemoveItem =>
  createAction(CART_ACTIONS.removeItem, id));

type ClearCart = Action<CART_ACTIONS.clearCart>;
export const clearCart = withMatcher((): ClearCart =>
  createAction(CART_ACTIONS.clearCart));
