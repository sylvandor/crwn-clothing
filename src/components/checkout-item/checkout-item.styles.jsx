import styled from "styled-components";

export const ImageContainer = styled.div``
export const Name = styled.span``
export const Quantity = styled.span``
export const Cost = styled.span``
export const Arrow = styled.span``
export const Count = styled.span``
export const RemoveButton = styled.span``

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  
   ${ImageContainer} {
     width: 23%;
     padding-right: 15px;

     img {
       width: 100%;
       height: 100%;
     }
   }
  
  ${Name},
  ${Quantity},
  ${Cost} {
    width: 23%;
  }

  ${Quantity} {
    display: flex;
    
    ${Arrow} {
      cursor: pointer;
    }
    
    ${Count} {
      margin: 0 10px;
    }
  }
  
  ${RemoveButton} {
    padding-left: 12px;
    cursor: pointer;
  }
`
