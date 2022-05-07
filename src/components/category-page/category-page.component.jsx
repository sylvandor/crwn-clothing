import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import ProductCard from "../product-card/product-card.component";
import {selectCategoriesIsLoading, selectCategoryItems} from "../../store/categories/categories.selectors";
import Spinner from "../spinner/spinner.component";

import {ProductsContainer, Title} from "./category-page.styles";

const CategoryPage = () => {
  const {categoryTitle} = useParams();
  const items = useSelector(selectCategoryItems(categoryTitle));
  const isLoading = useSelector(selectCategoriesIsLoading);

  return <>
    <Title>{categoryTitle.toUpperCase()}</Title>
    {
      isLoading ?
        <Spinner/> :
        <ProductsContainer>
          {items && Object.entries(items).map(([id, product]) => <ProductCard key={id} product={product} />)}
        </ProductsContainer>
    }
  </>;
}

export default CategoryPage;
