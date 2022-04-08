import {useContext} from "react";
import Button from "../button/button.component";
import {CartContext} from "../../contexts/cart/cart.context";

import {Footer, Name, Price, ProductCardContainer} from "./product-card.styles";

const ProductCard = ({product: {id, name, imageUrl, price}, categoryTitle}) => {
  const {addProduct} = useContext(CartContext);

  const addItem = () => addProduct(id, categoryTitle);

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