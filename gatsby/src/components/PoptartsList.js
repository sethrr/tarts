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
        <p> {tart.frosting.map((frosting) => frosting.name).join(', ')}</p>
        <Img fluid={tart.image.asset.fluid} alt={tart.name}/>
    </TartStyles>
  );
}


const TartGridStytles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;

`;

const TartStyles = styled.div` 
display: grid;

@supports not (grid-template-rows: subgrid) {
--rows: auto auto 1fr;
}

grid-template-rows: var(--row, subgrid);
grid-row: span 3;
grid-gap: 1rem;

h2, p {
      margin: 0;
    }
`;


export default function PoptartsList({ tarts }) {
  return (
    <TartGridStytles>
      {tarts.map((tart) => (
        <SingleTart key={tart.id} tart={tart} />
      ))}
    </TartGridStytles>
  );
}
