import {Link} from "react-router-dom";
import './category-item.styles.scss'

const CategoryItem = ({category: {name, imageUrl}}) =>
  <div className={'category-container'}>
    <div className={'background-image'} style={{backgroundImage: `url(${imageUrl}`}}/>
    <Link to={`shop/${name.toLowerCase()}`} className={'category-body-container'}>
      <h2>{name}</h2>
      <p>Show Now</p>
    </Link>
  </div>

export default CategoryItem