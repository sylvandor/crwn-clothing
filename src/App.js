import React, {useEffect, lazy, Suspense} from "react";
import {Route, Routes} from 'react-router-dom'
import {useDispatch} from "react-redux";

import Spinner from "./components/spinner/spinner.component";

import {fetchCategoriesStart} from "./store/categories/categories.actions";
import {checkUserSession} from "./store/user/user.actions";

const Authentication = lazy(() => import('./routes/authetication/authentication.component'))
const Home = lazy(() => import('./routes/home/home.component'))
const Navigation = lazy(() => import('./routes/Navigation/navigation.component'))
const Shop = lazy(() => import('./routes/shop/shop.component'))
const Checkout = lazy(() => import('./routes/checkout/checkout.component'))

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]) // This doesn't actually need dispatch as a dependency. We only want this to run once and still works because dispatch never changes.

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]) // This doesn't actually need dispatch as a dependency. We only want this to run once and still works because dispatch never changes.

  return (
    <Suspense fallback={<Spinner/>}>
      <Routes>
        <Route path={'/'} element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path={'shop/*'} element={<Shop/>}/>
          <Route path={'auth'} element={<Authentication/>}/>
          <Route path={'checkout'} element={<Checkout/>}/>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App;