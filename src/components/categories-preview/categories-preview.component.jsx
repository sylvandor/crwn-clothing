import {useSelector} from "react-redux";
import CategoryPreview from "../category-preview/category-preview.component";
import {selectCategories, selectCategoriesIsLoading} from "../../store/categories/categories.selectors";
import Spinner from "../spinner/spinner.component";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectCategoriesIsLoading)

  return isLoading ?
    <Spinner/> :
    <div>
      {
        Object.entries(categories)
          .map(([title, products]) =>
            <CategoryPreview key={title} categoryTitle={title} products={products}/>)
      }
    </div>
}

export default CategoriesPreview;