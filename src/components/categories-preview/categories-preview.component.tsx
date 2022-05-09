import {useSelector} from "react-redux";
import CategoryPreview from "../category-preview/category-preview.component";
import {selectCategoriesIsLoading, selectCategoryTitles} from "../../store/categories/categories.selectors";
import Spinner from "../spinner/spinner.component";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategoryTitles);
  const isLoading = useSelector(selectCategoriesIsLoading)

  return isLoading ?
    <Spinner/> :
    <div>
      {categories.map((category) => <CategoryPreview key={category} category={category}/>)}
    </div>
}

export default CategoriesPreview;