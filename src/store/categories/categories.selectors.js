export const selectCategories = state => state.categories.map

export const selectGetProduct = state => (category, id) =>
  state.categories.map[category].find(product => product.id === parseInt(id))