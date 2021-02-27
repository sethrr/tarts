import React, { useContext, useState } from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import { DispatchContext } from "../components/context";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import styled from 'styled-components';
import Img from 'gatsby-image';

const TartGrid = styled.div`
display: grid;
grid-gap: 2rem;
grid-template-columns: .33fr .5fr;
ul {
  list-style-type: none;
  padding-left: 0;
}
li {
display: inline-block;
color: var(--red);
}
.info-container {
  border: 2px solid var(--lightbrown);
  padding: 2rem;
  flex-direction: column;
align-content: flex-start;
align-items: flex-start;
justify-content: flex-start;
}
.order-btns {
display: flex;
flex-direction: column;
align-items: flex-start;
button {
  margin-top: 1rem;
}
}
.cart-msg {

  p {
    color: var(--yellow);
}
}
`;
const Product = ({ data }) => {
  const {
    title,
    productId,
    price,
    currency,
    description,
    image,
    sku,
  } = data.product;

  const dispatch = useContext(DispatchContext);

  const { addItem } = useShoppingCart();

  const formattedPrice = formatCurrencyString({
    value: 3 * 100,
    currency: currency,
    language: "en-US",
  });

  const addToCart = () => {
    addItem(
      {
        name: title,
        id: productId.current,
        price: 3 * 100,
        currency,
        sku: sku,
        image: image,
      },
      1
    );
  };

  return (
    <>
     
    
            <button onClick={addToCart}> add to cart</button>

      <TartGrid>
      <Image fluid={image.asset.fluid} />
      <div>
        <div className="info-container">
          <h2 className="mark">{title}</h2>
      
           <p>{description}</p>
           <h3> Add to Cart:</h3>
         <div className="order-btns">
                {['Half Dozen', 'Dozen', 'Two Dozen'].map((size) => (
                  <button
                    type="button"
                    key={size}
                   onClick={addToCart}>
                    {formattedPrice} 
                  </button>
                ))}
              </div>
   
              </div>
      </div>
    </TartGrid>
   
 
    
    </>
  );
};

export default Product;

export const query = graphql`
query ProductTemplateQuery($id: String!) {
    product: sanityProduct(id: { eq: $id }) {
      productId {
        current
      }
      title
      price
      currency
      sku
      description 
      image{
        asset {
           fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
 
`;
