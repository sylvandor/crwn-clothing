export const selectOpen = state => state.cart.open;
export const selectProductCount = state => state.cart.productCount;
export const selectProducts = state => state.cart.products;

export const selectTotal = ({cart}) =>
  Object.entries(cart.products)
    .reduce((total, [_, {count, price}]) =>
      total + price * count, 0);
