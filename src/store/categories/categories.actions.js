import {CATEGORIES_ACTIONS} from "./categories.types";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";

export const fetchCategoriesStart = () => ({type: CATEGORIES_ACTIONS.FETCH_CATEGORIES_START});
export const fetchCategoriesFailed = error => ({type: CATEGORIES_ACTIONS.FETCH_CATEGORIES_FAILED, payload: error});
export const fetchCategoriesSuccess = categories => ({
  type: CATEGORIES_ACTIONS.FETCH_CATEGORIES_SUCCESS,
  payload: categories
});

export const fetchCategoriesAsync = () => async dispatch => {
  dispatch(fetchCategoriesStart());

  try {
    const categories = await getCategoriesAndDocuments('categories');
    dispatch(fetchCategoriesSuccess(categories));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
}