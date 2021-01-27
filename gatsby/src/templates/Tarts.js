import React from 'react';
import { graphql } from 'gatsby';



// This needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    tart: sanityPoptarts(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }

    }
  }
`;
export default function SingleTartsPage() {
  return <p>Single Pizza!!!</p>;
}