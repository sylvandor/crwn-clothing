import ProductCard from "../product-card/product-card.component";

import './category-preview.styles.scss'
import {Link} from "react-router-dom";

const CategoryPreview = ({categoryTitle, products}) =>
  <div className={'category-preview-container'}>
    <h2>
      <Link to={`/shop/${categoryTitle}`}>
      <span className={'title'}>{categoryTitle.toUpperCase()}</span>
      </Link>
    </h2>
    <div className={'preview'}>
      {products
        .slice(0, 4)
        .map(product => <ProductCard key={product.id} product={product} categoryTitle={categoryTitle}/>)
      }
    </div>
  </div>

export default CategoryPreview;