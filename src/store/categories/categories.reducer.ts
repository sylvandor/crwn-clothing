import {AnyAction} from "redux";

import {CategoryMap} from "./categories.types";
import {fetchCategoriesFailed, fetchCategoriesStart, fetchCategoriesSuccess} from "./categories.actions";

export type CategoriesState = {
  readonly map: CategoryMap;
  readonly isLoading: boolean;
  readonly error: Error | null;
}

const INITIAL_STATE: CategoriesState = {
  map: {},
  isLoading: false,
  error: null
}

const categoriesReducer = (categories = INITIAL_STATE, action = {} as AnyAction): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return {...categories, isLoading: true}
  } else if (fetchCategoriesFailed.match(action)) {
    return {...categories, error: action.payload, isLoading: false}
  } else if (fetchCategoriesSuccess.match(action)) {
    return {...categories, map: action.payload, isLoading: false};
  } else {
    return categories;
  }
}

export default categoriesReducer;