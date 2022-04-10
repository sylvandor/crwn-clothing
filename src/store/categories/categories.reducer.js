import {CATEGORIES_ACTIONS} from "./categories.types";

const INITIAL_STATE = {
  map: {}
}

const categoriesReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case CATEGORIES_ACTIONS.setCategories:
      return {...state, map: payload};
    default:
      return state;
  }
}

export default categoriesReducer;