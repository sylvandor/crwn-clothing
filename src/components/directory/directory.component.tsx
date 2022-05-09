import {useSelector} from "react-redux";
import {selectCategoriesMap} from "../../store/categories/categories.selectors";
import CategoryItem from "../category-item/category-item.component";

import {DirectoryContainer} from "./directory.styles";

const Directory = () => {
  const categories = useSelector(selectCategoriesMap);

  return (
    <DirectoryContainer>
      {Object.entries(categories)
        .map(([title, category]) => <CategoryItem key={title} category={category}/>)}
    </DirectoryContainer>
  )
};

export default Directory;
