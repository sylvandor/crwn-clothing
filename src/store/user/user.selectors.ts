import {createSelector} from "reselect";
import {UserState} from "./user.reducer";
import {RootState} from "../store";

export const selectUser = ({user}: RootState): UserState => user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);
