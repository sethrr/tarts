import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';
import useTart from '../utils/useTart';
import calculateTartPrice from '../utils/calculateTartPrice';
import formatMoney from '../utils/formatMoney';

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


export default function SingleTartsPage( {data: {tart}}) {

  const { addToOrder, cartMessage } = useTart({tart}); 

  return (
    <>
    <SEO title={tart.name} image={tart.image?.asset?.fluid?.src} />
    <TartGrid>
      <Img fluid={tart.image.asset.fluid} />
      <div>
        <div className="info-container">
          <h2 className="mark">{tart.name}</h2>
          <ul>
            {tart.frosting.map((frosting, index)=> (
              <li key={frosting.id}>
                { (index ? ', ' : '') + frosting.name }
                </li> ))} 
          </ul>
           <p>{tart.description}</p>
           <h3> Add to Cart:</h3>
         <div className="order-btns">
                {['Half Dozen', 'Dozen', 'Two Dozen'].map((size) => (
                  <button
                    type="button"
                    key={size}
                    onClick={() =>
                      addToOrder({
                        id: tart.id,
                        size,
                      })
                    }
                  >
                    {size} {formatMoney(calculateTartPrice(tart.price, size))}
                  </button>
                ))}
              </div>
              <div className="cart-msg">
              {cartMessage ? <p>{cartMessage}</p> : ''}
              </div>
              </div>
      </div>
    </TartGrid>
     
    </>
  )
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    tart: sanityPoptarts(slug: { current: { eq: $slug } }) {
      name
      id
      description
      price
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
