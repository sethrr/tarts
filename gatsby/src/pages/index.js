import React from 'react';
import useLatestData from '../utils/useLatestData';

function FeaturedTarts() {
  return ( 
    <div>
    <p> Featured Tarts </p>
    </div>
  )
}

export default function HomePage() {
  const {featuredTarts} = useLatestData();

  return (
    <div className="center">
      <h1> The Toasted Tart</h1>
      <p> Hey! Im the home page!</p>
      <div>
        <FeaturedTarts FeaturedTarts={featuredTarts} />
      </div>
    </div>
  );
}
