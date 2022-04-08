import ProductCard from "../product-card/product-card.component";
import {Link} from "react-router-dom";

import {CategoryPreviewContainer, Preview, Title} from "./category-preview.styles";

const CategoryPreview = ({categoryTitle, products}) =>
  <CategoryPreviewContainer>
    <h2>
      <Link to={`/shop/${categoryTitle}`}>
        <Title>{categoryTitle.toUpperCase()}</Title>
      </Link>
    </h2>
    <Preview>
      {products
        .slice(0, 4)
        .map(product => <ProductCard key={product.id} product={product} categoryTitle={categoryTitle}/>)
      }
    </Preview>
  </CategoryPreviewContainer>

export default CategoryPreview;