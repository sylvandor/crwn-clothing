import {useContext} from "react";
import {CategoriesContext} from "../../contexts/products/categoriesContext";
import CategoryPreview from "../category-preview/category-preview.component";

const CategoriesPreview = () => {
  const {categories} = useContext(CategoriesContext);

  return (
    <div>
      {
        Object.entries(categories)
          .map(([title, products]) =>
            <CategoryPreview key={title} categoryTitle={title} products={products}/>)
      }
    </div>
  )
}

export default CategoriesPreview;