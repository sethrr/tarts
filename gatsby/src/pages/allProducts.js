import React from "react";
import { graphql } from "gatsby";
import ProductsList from '../components/ProductsList';

const AllProducts = ({ data }) => {
    const tarts = data.allSanityProduct.nodes
  return (
   <p> What </p>
  );
};

export default AllProducts;

export const query = graphql`
  query AllProductsQuery {
    allSanityProduct {
      nodes {
        title
        slug {
          current
        }
        price
        currency
        image {
          asset {
            url
          }
        }
      }
    }
  }
`;
