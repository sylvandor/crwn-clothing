import React, {useEffect} from "react";
import {Route, Routes} from 'react-router-dom'
import {useDispatch} from "react-redux";

import Home from "./routes/home/home.component";
import Navigation from "./routes/Navigation/navigation.component";
import Authentication from "./routes/authetication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

import {setCurrentUser} from "./store/user/user.actions";


import {createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser} from "./utils/firebase/firebase.utils";
import {fetchCategoriesAsync} from "./store/categories/categories.actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    signOutUser();

    return onAuthStateChangedListener(user => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      dispatch(setCurrentUser(user));
    })
  }, [dispatch]) // This doesn't actually need dispatch as a dependency. We only want this to run once and still works because dispatch never changes.

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]) // This doesn't actually need dispatch as a dependency. We only want this to run once and still works because dispatch never changes.

  return (<Routes>
    <Route path={'/'} element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path={'shop/*'} element={<Shop/>}/>
      <Route path={'auth'} element={<Authentication/>}/>
      <Route path={'checkout'} element={<Checkout/>}/>
    </Route>
  </Routes>)
}

export default App;