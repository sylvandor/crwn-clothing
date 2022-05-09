import React from "react";
import {Route, Routes} from "react-router-dom";

import CategoriesPreview from "../../components/categories-preview/categories-preview.component";
import CategoryPage from "../../components/category-page/category-page.component";

const Shop = () =>
  <Routes>
    <Route index element={<CategoriesPreview/>}/>
    <Route path={':categoryTitle'} element={<CategoryPage/>}/>
  </Routes>

export default Shop;