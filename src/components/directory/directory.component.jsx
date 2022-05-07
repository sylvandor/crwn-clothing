import {useSelector} from "react-redux";
import {selectCategoriesMap} from "../../store/categories/categories.selectors";
import CategoryItem from "../category-item/category-item.component";

import {DirectoryContainer} from "./directory.styles";

const CATEGORIES =
  {
    hats: {name: 'Hats', imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'},
    jackets: {name: 'Jackets', imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'},
    sneakers: {name: 'Sneakers', imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'},
    womens: {name: 'Womens', imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'},
    mens: {name: 'Mens', imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'}
  }

const Directory = () => {
  const categories = useSelector(selectCategoriesMap);

  return (
    <DirectoryContainer>
      {Object.keys(categories)
        .map(title => <CategoryItem key={title} category={CATEGORIES[title]}/>)}
    </DirectoryContainer>
  )
}


export default Directory