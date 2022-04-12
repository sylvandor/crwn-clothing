import {CATEGORIES_ACTIONS} from "./categories.types";

const INITIAL_STATE = {
  map: {},
  isLoading: false,
  error: null
}

const categoriesReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case CATEGORIES_ACTIONS.FETCH_CATEGORIES_START:
      return {...state, isLoading: true}
    case CATEGORIES_ACTIONS.FETCH_CATEGORIES_FAILED:
      return {...state, error: payload, isLoading: false}
    case CATEGORIES_ACTIONS.FETCH_CATEGORIES_SUCCESS:
      return {...state, map: payload, isLoading: false};
    default:
      return state;
  }
}

export default categoriesReducer;