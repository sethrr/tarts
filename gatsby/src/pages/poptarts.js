import { graphql } from 'gatsby';
import React from 'react';
import PoptartsList from '../components/PoptartsList';
import ToppingsFilters from '../components/ToppingFilter';

export default function PoptartsPage({ data }) {
  const tarts = data.poptarts.nodes;
  return (
    <>
      <ToppingsFilters />
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
