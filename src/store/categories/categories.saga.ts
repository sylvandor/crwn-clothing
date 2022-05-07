import {takeLatest, all, call, put} from 'typed-redux-saga'
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";

import {CATEGORIES_ACTIONS} from "./categories.types";
import {fetchCategoriesFailed, fetchCategoriesSuccess} from "./categories.actions";

export function* fetchCategoriesAsync() {
  try {
    const categories = yield* call(getCategoriesAndDocuments, 'categories');
    yield* put(fetchCategoriesSuccess(categories))
  } catch (error) {
    yield* put(fetchCategoriesFailed(error as Error));
  }
}

export function* onFetchCategories() {
  yield* takeLatest(CATEGORIES_ACTIONS.fetchCategoriesStart, fetchCategoriesAsync)
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategories)])
}