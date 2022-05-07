import {createSelector} from "reselect";

import {CartState} from "./cart.reducer";
import {RootState} from "../store";

const selectCart = ({cart}: RootState): CartState => cart

export const selectOpen = createSelector(
  [selectCart],
  cart => cart.open
);

export const selectItemCount = createSelector(
  [selectCart],
  cart => cart.itemCount
);

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.items
);

export const selectTotal = createSelector(
  [selectCartItems],
  items => Object.entries(items)
    .reduce((total, [_, {count, price}]) => total + price * count, 0)
)
