import React from "react";
import { graphql } from "gatsby";
import ProductsList from '../components/ProductsList';



const AllProducts = ({ data }) => {
    const tarts = data.allSanityProduct.nodes
  return (
    <ProductsList tarts={tarts} />
  );
};

export default AllProducts;

export const query = graphql`
  query AllProductsQuery {
    allSanityProduct {
      nodes {
          
        title
        id
        slug {
          current
        }
        price
        currency
        image {
            asset {
              fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid
              }
            }
          }
      }
    }
  }
`;
