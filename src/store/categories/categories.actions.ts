import {CATEGORIES_ACTIONS, CategoryMap} from "./categories.types";
import {Action, ActionWithPayload, createAction, withMatcher} from "../../utils/reducer/reducer.utils";

type FetchCategoriesStart = Action<CATEGORIES_ACTIONS.fetchCategoriesStart>
export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart =>
  createAction(CATEGORIES_ACTIONS.fetchCategoriesStart));

type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTIONS.fetchCategoriesSuccess, CategoryMap>
export const fetchCategoriesSuccess = withMatcher((categories: CategoryMap): FetchCategoriesSuccess =>
  createAction(CATEGORIES_ACTIONS.fetchCategoriesSuccess, categories));

type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTIONS.fetchCategoriesFailed, Error>
export const fetchCategoriesFailed = withMatcher((error: Error): FetchCategoriesFailed =>
  createAction(CATEGORIES_ACTIONS.fetchCategoriesFailed, error));
