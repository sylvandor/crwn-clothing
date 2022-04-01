import {Route, Routes} from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";

import './shop.styles.scss'
import CategoryPage from "../category-page/category-page.component";
import React from "react";

const Shop = () =>
  <Routes>
    <Route index element={<CategoriesPreview/>}/>
    <Route path={':categoryTitle'} element={<CategoryPage/>}/>
  </Routes>

export default Shop;