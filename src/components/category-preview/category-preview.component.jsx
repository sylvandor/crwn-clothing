import ProductCard from "../product-card/product-card.component";
import {Link} from "react-router-dom";

import {CategoryPreviewContainer, Preview, Title} from "./category-preview.styles";
import {useSelector} from "react-redux";
import {selectCategoryItems} from "../../store/categories/categories.selectors";

const CategoryPreview = ({category}) => {
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
        .map(([id, product]) =>
          <ProductCard key={id} product={product}/>)
      }
    </Preview>
  </CategoryPreviewContainer>
}

export default CategoryPreview;