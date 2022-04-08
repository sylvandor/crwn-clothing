import {useContext} from "react";
import {CategoriesContext} from "../../contexts/products/categoriesContext";
import ProductCard from "../product-card/product-card.component";
import {useParams} from "react-router-dom";

import {ProductsContainer} from "./category-page.styles";

const getCategory = ({categories}, categoryTitle) => categories[categoryTitle];

const CategoryPage = () => {
  const {categoryTitle} = useParams();
  const category = getCategory(useContext(CategoriesContext), categoryTitle)

  return (
    <ProductsContainer>
      {category && Object.entries(category).map(([id, product]) =>
        <ProductCard key={id} product={product} categoryTitle={categoryTitle}/>)}
    </ProductsContainer>
  );
}

export default CategoryPage;