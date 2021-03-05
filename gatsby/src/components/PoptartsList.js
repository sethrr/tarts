import { Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image'

function SingleTart({ tart }) {
  return (
    <div>
      <Link to={`/product/${tart.slug.current}`}>
        <h2>
          <span className="mark">{tart.title}</span>
        </h2>
      </Link>

      <Link to={`/product/${tart.slug.current}`}>
        <p> {tart.frosting.map((frosting) => frosting.name).join(', ')} </p>
        <Img fluid={tart.image.asset.fluid} alt={tart.title} />
      </Link>
    </div>
  );
  }

export default function PoptartsList({ tarts }) {
  return (
    <div>
      {tarts.map((tart) => (
        <SingleTart key={`tart-${tart.id}`} tart={tart} />
        
      ))}
    </div>
  );
}
