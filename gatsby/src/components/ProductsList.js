import React from 'react';
import Img from 'gatsby-image'
import formatMoney from '../utils/formatMoney';
function SingleTart({ tart }) {
  
  return (
    <div>
    
        <h2>
          <span className="mark">{tart.title}</span>
          <Img fluid={tart.image.asset.fluid} alt={tart.name} />
          <span>{formatMoney(tart.price)}</span>
        </h2>

    </div>
  );
}




export default function PoptartsList({ tarts }) {
  return (
    <div>
      {tarts.map((tart) => (
        <SingleTart key={tart.id} tart={tart} />
        
      ))}
    </div>
  );
}
