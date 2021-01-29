import { graphql } from 'gatsby';
import React from 'react';
import fetch from 'isomorphic-fetch';




export default function BeersPage( { data }) {
  return (
    <div>
      <div className="item">
        {data.etsyTarts.nodes.map(tart => {
          return (
            <div key={tart.id}>
              <h3> {tart.title}</h3>
              <h6>{tart.description.split('*')} </h6>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export const query = graphql`
query {
  etsyTarts: allEtsyTart {
    nodes {
      id
      title
      url
      price
      listing_id
      description
    }
  }
}`;