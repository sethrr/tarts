import React, { useContext, useState } from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import { DispatchContext } from "../components/context";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

const Product = ({ data }) => {
  const {
    title,
    id,
    price,
    currency,
    description,
    image,
    sku,
  } = data.product;
  const dispatch = useContext(DispatchContext);
  const { addItem } = useShoppingCart();

  const formattedPrice = formatCurrencyString({
    value: price * 100,
    currency: currency,
    language: "en-US",
  });

  const addToCart = () => {
    addItem(
      {
        name: title,
        id: id.current,
        price: price * 100,
        currency,
        sku: sku,
        image: images[0].asset.url,
      },
      1
    );
    dispatch({ type: "cartOpen", payload: true });
  };

  return (
    <div>
      
            <Image fluid={mainImage.asset.fluid} loading="lazy" />
            <Image fluid={image.asset.fluid} loading="lazy" />
            {description.en}
            {formattedPrice}
      
    </div>
  );
};

export default Product;

export const query = graphql`
query ProductTemplateQuery($id: String!) {
    product: sanityProduct(productId: { current: { eq:  $id } }) {
     productId {
       current
     }
     title
     price
     currency
     sku
     description 
     image {
       asset {
         fluid {
          base64
         }
       }
     }
    
     
   }
 }
 
`;
