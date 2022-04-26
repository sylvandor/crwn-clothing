import {useDispatch} from "react-redux";

import Button from "../button/button.component";

import {addItem} from "../../store/cart/cart.actions";

import {Footer, Name, Price, ProductCardContainer} from "./product-card.styles";

const ProductCard = ({product, category}) => {
  const dispatch = useDispatch();
  const {name, imageUrl, price} = product;

  const handleAddItem = () => dispatch(addItem({...product, category}));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name}/>
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={'inverted'} buttonProps={{onClick: handleAddItem}}>Add to Cart</Button>
    </ProductCardContainer>
  )
}

export default ProductCard;