import { graphql } from 'gatsby';
import React from 'react';
import PoptartsList from '../components/PoptartsList';
import ToppingsFilters from '../components/FrostingFilter';

export default function PoptartsPage({ data, pageContext }) {
  const tarts = data.poptarts.nodes;
  return (
    <>
      <ToppingsFilters activeFrosting={pageContext.frosting}/>
      <PoptartsList tarts={tarts} />
    </>
  );
}
export const query = graphql`
  query allTarts ($frosting: [String]) {
    poptarts: allSanityPoptarts(filter: { frosting: { elemMatch: { name: { in: $frosting } } } }     
    )
     {
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
