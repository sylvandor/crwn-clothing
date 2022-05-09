import styled from "styled-components";

export const Preview = styled.div``
export const Title = styled.span``

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  ${Title} {
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
  }

  ${Preview} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
  }
`
