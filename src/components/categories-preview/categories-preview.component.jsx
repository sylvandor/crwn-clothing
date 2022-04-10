import {useSelector} from "react-redux";
import CategoryPreview from "../category-preview/category-preview.component";
import {selectCategories} from "../../store/categories/categories.selectors";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategories);

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