import {FC} from "react";

import {Category} from '../../store/categories/categories.types'

import {BackgroundImage, CategoryContainer, CategoryLink} from "./category-item.styles";

type CategoryItemProps = {
  category: Category
}

const CategoryItem: FC<CategoryItemProps> = ({category: {title, imageUrl}}) =>
  <CategoryContainer>
    <BackgroundImage imageUrl={imageUrl}/>
    <CategoryLink to={`shop/${title.toLowerCase()}`}>
      <h2>{title}</h2>
      <p>Show Now</p>
    </CategoryLink>
  </CategoryContainer>

export default CategoryItem