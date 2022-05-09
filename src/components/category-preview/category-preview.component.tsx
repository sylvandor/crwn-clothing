import {FC} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import {selectCategoryItems} from "../../store/categories/categories.selectors";

import {CategoryPreviewContainer, Preview, Title} from "./category-preview.styles";

type CategoryPreviewProps = {
  category: string;
}

const CategoryPreview: FC<CategoryPreviewProps> = ({category}) => {
  const items = useSelector(selectCategoryItems(category));

  return <CategoryPreviewContainer>
    <h2>
      <Link to={`/shop/${category}`}>
        <Title>{category.toUpperCase()}</Title>
      </Link>
    </h2>
    <Preview>
      {Object.entries(items)
        .slice(0, 4)
        .map(([id, categoryItem]) =>
          <ProductCard key={id} categoryItem={categoryItem}/>)
      }
    </Preview>
  </CategoryPreviewContainer>
}

export default CategoryPreview;