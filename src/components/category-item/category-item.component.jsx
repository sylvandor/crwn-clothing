import {BackgroundImage, CategoryContainer, CategoryLink} from "./category-item.styles";

const CategoryItem = ({category: {name, imageUrl}}) =>
  <CategoryContainer>
    <BackgroundImage imageUrl={imageUrl}/>
    <CategoryLink to={`shop/${name.toLowerCase()}`}>
      <h2>{name}</h2>
      <p>Show Now</p>
    </CategoryLink>
  </CategoryContainer>

export default CategoryItem