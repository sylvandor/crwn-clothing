import {useContext} from "react";
import {CategoriesContext} from "../../contexts/products/categoriesContext";
import ProductCard from "../product-card/product-card.component";
import {useParams} from "react-router-dom";

const getCategory = ({categories}, categoryTitle) => categories[categoryTitle];

const CategoryPage = () => {
  const {categoryTitle} = useParams();
  const category = getCategory(useContext(CategoriesContext), categoryTitle)

  return (
    <div className={'products-container'}>
      {category && Object.entries(category).map(([id, product]) =>
        <ProductCard key={id} product={product} categoryTitle={categoryTitle}/>)}
    </div>
  );
}

export default CategoryPage;