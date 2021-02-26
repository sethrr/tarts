import { Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image'
import styled from 'styled-components';
import calculateTartPrice from '../utils/calculateTartPrice';
import formatMoney from '../utils/formatMoney';
function SingleTart({ tart }) {
  
  return (
    <TartStyles>
    
        <h2>
          <span className="mark">{tart.title}</span>
          <Img fluid={tart.image.asset.fluid} alt={tart.name} />
          <span>{formatMoney(tart.price)}</span>
        </h2>

    </TartStyles>
  );
}


const TartGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 4rem;

`;

const TartStyles = styled.div` 
display: grid;

@supports not (grid-template-rows: subgrid) {
}

--rows: auto  1fr;
grid-template-rows: var(--rows, subgrid);
grid-template-columns: 1fr;
grid-row: span 2;
grid-gap: 1rem;
margin-bottom: 3rem;

a {
  position: relative;
overflow: hidden;
}
.gatsby-image-wrapper  {
   height: 100%;
  }
h2, p, a {
      margin: 0;
    }
p {
      font-size: 1.5rem;
      margin-bottom: 1rem;
}  
`;


export default function PoptartsList({ tarts }) {
    console.log(tarts)
  return (
    <TartGridStyles>
      {tarts.map((tart) => (
        <SingleTart key={tart.id} tart={tart} />
        
      ))}
    </TartGridStyles>
  );
}
