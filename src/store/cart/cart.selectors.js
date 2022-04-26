export const selectOpen = ({cart}) => cart.open;
export const selectItemCount = ({cart}) => cart.itemCount;
export const selectCartItems = ({cart}) => cart.items;

export const selectTotal = ({cart}) =>
  Object.entries(cart.items)
    .reduce((total, [_, {count, price}]) =>
      total + price * count, 0);
