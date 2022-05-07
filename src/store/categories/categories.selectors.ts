import {createSelector} from "reselect";

import {CategoriesState} from "./categories.reducer";
import {RootState} from "../store";

const selectCategories = ({categories}: RootState): CategoriesState => categories;

export const selectCategoriesMap = createSelector(
  [selectCategories],
  categoriesSlice => categoriesSlice.map
);

export const selectCategoryTitles = createSelector(
  [selectCategoriesMap],
  map => Object.keys(map)
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategories],
  categoriesSlice => categoriesSlice.isLoading
);

export const selectCategoryItems = (category: string) => createSelector(
  [selectCategoriesMap],
  map => map[category]?.items
);

export const selectGetProduct = (category: string, id: string) => createSelector(
  [selectCategoryItems(category)],
  items => items[id]
);
