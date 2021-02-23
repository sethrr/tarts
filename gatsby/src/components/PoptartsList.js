import { Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image'
import styled from 'styled-components';

function SingleTart({ tart }) {
  
  return (
    <TartStyles>
      <Link to={`/poptart/${tart.slug.current}`}>
        <h2>
          <span className="mark">{tart.name}</span>
        </h2>
      </Link>

      <Link to={`/poptart/${tart.slug.current}`}>
        <p> {tart.frosting.map((frosting) => frosting.name).join(', ')}</p>
        <Img fluid={tart.image.asset.fluid} alt={tart.name} />
      </Link>
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
  return (
    <TartGridStyles>
      {tarts.map((tart) => (
        <SingleTart key={`tart-${tart.id}`} tart={tart} />
        
      ))}
    </TartGridStyles>
  );
}
