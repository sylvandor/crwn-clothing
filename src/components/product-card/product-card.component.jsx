import {useDispatch} from "react-redux";

import Button from "../button/button.component";

import {addProduct} from "../../store/cart/cart.actions";

import {Footer, Name, Price, ProductCardContainer} from "./product-card.styles";

const ProductCard = ({product: {id, name, imageUrl, price}, categoryTitle}) => {
  const dispatch = useDispatch();

  const addItem = () => dispatch(addProduct(id, categoryTitle, price));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name}/>
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={'inverted'} buttonProps={{onClick: addItem}}>Add to Cart</Button>
    </ProductCardContainer>
  )
}

export default ProductCard;