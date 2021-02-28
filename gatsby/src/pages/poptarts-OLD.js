import { graphql } from 'gatsby';
import React from 'react';
import PoptartsList from '../components/PoptartsList';
import ToppingsFilters from '../components/FrostingFilter';
import SEO from '../components/SEO';
import { HeadingStyles } from '../styles/HeadingStyles';

export default function PoptartsPage({ data, pageContext }) {
  const tarts = data.poptarts.nodes;
 
  return (
    <div>
    <SEO title={pageContext.frosting ? `Poptarts with ${pageContext.frosting}` : `All Poptarts` } />
    <h1>Our Menu</h1>
      <HeadingStyles>
        <h2 className="h3-style no-margins"> Filter By Frosting:</h2>
        </HeadingStyles>
      <ToppingsFilters activeFrosting={pageContext.frosting}/> 
      <PoptartsList tarts={tarts} />
       {/* <Pagination
        pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
        totalCount={data.poptarts.totalCount}
        currentPage={pageContext.currentPage || 1}
        skip={pageContext.skip}
        base="/poptarts"
      />  */}
    </div>
  );
} 
export const query = graphql`
query allTarts ($frosting: [String], $skip: Int = 0, $pageSize: Int = 8) {
  poptarts: allSanityPoptarts(filter: 
    { frosting: 
      { elemMatch: 
        { name: 
          { in: $frosting }
        } 
      }
    }, 
    limit: $pageSize, skip: $skip)
     {
      totalCount
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
