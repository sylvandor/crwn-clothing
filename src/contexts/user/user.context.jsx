import {createContext, useEffect, useReducer} from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser} from "../../utils/firebase/firebase.utils";

export const UserContext = createContext({});

const INITIAL_STATE = {currentUser: null};
const SET_CURRENT_USER_ACTION = 'SET_CURRENT_USER';

const userReducer = (state, {type, payload}) => {
  switch (type) {
    case SET_CURRENT_USER_ACTION:
      return {...state, currentUser: payload};
    default:
      throw new Error(`Unhandled type ${type} in the userReducer`);
  }
}

export const UserProvider = ({children}) => {
  const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE)
  const setCurrentUser = user => dispatch({type: SET_CURRENT_USER_ACTION, payload: user});

  const value = {currentUser, setCurrentUser};

  useEffect(() => {
    signOutUser();

    return onAuthStateChangedListener(user => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      setCurrentUser(user);
    })
  }, [])

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}