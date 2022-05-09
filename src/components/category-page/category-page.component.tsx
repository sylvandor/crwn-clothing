import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import ProductCard from "../product-card/product-card.component";
import {selectCategoriesIsLoading, selectCategoryItems} from "../../store/categories/categories.selectors";
import Spinner from "../spinner/spinner.component";

import {ProductsContainer, Title} from "./category-page.styles";

type CategoryRouteParams = {
  categoryTitle: string
}

const CategoryPage = () => {
  const {categoryTitle} = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
  const items = useSelector(selectCategoryItems(categoryTitle));
  const isLoading = useSelector(selectCategoriesIsLoading);

  return <>
    <Title>{categoryTitle.toUpperCase()}</Title>
    {
      isLoading ?
        <Spinner/> :
        <ProductsContainer>
          {items &&
            Object.entries(items).map(([id, categoryItem]) =>
              <ProductCard key={id} categoryItem={categoryItem}/>
            )}
        </ProductsContainer>
    }
  </>;
}

export default CategoryPage;
