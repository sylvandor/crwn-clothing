import {FC} from "react";
import {useDispatch} from "react-redux";

import Button, {BUTTON_TYPES} from "../button/button.component";

import {addItem} from "../../store/cart/cart.actions";

import {Footer, Name, Price, ProductCardContainer} from "./product-card.styles";
import {CategoryItem} from "../../store/categories/categories.types";

type ProductCardProps = {
  categoryItem: CategoryItem;
}

const ProductCard: FC<ProductCardProps> = ({categoryItem}) => {
  const dispatch = useDispatch();
  const {name, imageUrl, price} = categoryItem;

  const handleAddItem = () => dispatch(addItem(categoryItem));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name}/>
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPES.inverted} onClick={handleAddItem}>Add to Cart</Button>
    </ProductCardContainer>
  )
}

export default ProductCard;