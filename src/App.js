import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from "./routes/home/home.component";
import Navigation from "./routes/Navigation/navigation.component";
import Authentication from "./routes/authetication/authentication.component";

const Shop = () => <div>Shoppe Page</div>

const App = () => (
  <Routes>
    <Route path={'/'} element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path={'shop'} element={<Shop/>}/>
      <Route path={'auth'} element={<Authentication/>}/>
    </Route>
  </Routes>
)

export default App;