import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import ProductCard from "../product-card/product-card.component";
import {selectCategories, selectCategoriesIsLoading} from "../../store/categories/categories.selectors";
import Spinner from "../spinner/spinner.component";

import {ProductsContainer, Title} from "./category-page.styles";

const getCategory = (categories, categoryTitle) => categories[categoryTitle];

const CategoryPage = () => {
  const {categoryTitle} = useParams();
  const category = getCategory(useSelector(selectCategories), categoryTitle);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return <>
    <Title>{categoryTitle.toUpperCase()}</Title>
    {
      isLoading ?
        <Spinner/> :
        <ProductsContainer>
          {category && Object.entries(category).map(([id, product]) =>
            <ProductCard key={id} product={product} categoryTitle={categoryTitle}/>)}
        </ProductsContainer>
    }
  </>;
}

export default CategoryPage;
