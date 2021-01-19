import { graphql } from 'gatsby';
import React from 'react';
import PoptartsList from '../components/PoptartsList';

export default function PoptartsPage({ data }) {
  const tarts = data.poptarts.nodes;
  return (
    <>
      <PoptartsList tarts={tarts} />
    </>
  );
}
export const query = graphql`
  query allTarts {
    poptarts: allSanityPoptarts {
      nodes {
        name
        price
        id
        slug {
          current
        }
        frosting {
          id
          name
        }
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
