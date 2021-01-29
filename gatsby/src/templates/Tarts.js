import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const TartGrid = styled.div`
display: grid;
grid-gap: 2rem;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

export default function SingleTartsPage( {data: {tart}}) {
  
  return (
    <TartGrid>
      <Img fluid={tart.image.asset.fluid} />
      <div>
        <h2 className="mark">{tart.name}</h2>
        <ul>
          {tart.frosting.map((frosting)=> (
            <li key={frosting.id}>{frosting.name}</li>
          ))} 
        </ul>
      </div>
    </TartGrid>
  )
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    tart: sanityPoptarts(slug: { current: { eq: $slug } }) {
      name
      id
      frosting {
        name
        id
      }
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
