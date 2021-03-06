import {combineReducers} from "redux";
import userReducer from "./user/user.reducer";
import categoriesReducer from "./categories/categories.reducer";
import cartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  categories: categoriesReducer
});

export default rootReducer;