import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import ProductCard from "../product-card/product-card.component";
import {selectCategories} from "../../store/categories/categories.selectors";

import {ProductsContainer} from "./category-page.styles";

const getCategory = (categories, categoryTitle) => categories[categoryTitle];

const CategoryPage = () => {
  const {categoryTitle} = useParams();
  const category = getCategory(useSelector(selectCategories), categoryTitle)

  return (
    <ProductsContainer>
      {category && Object.entries(category).map(([id, product]) =>
        <ProductCard key={id} product={product} categoryTitle={categoryTitle}/>)}
    </ProductsContainer>
  );
}

export default CategoryPage;
