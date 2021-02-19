import React from 'react';
import useLatestData from '../utils/useLatestData';
import { HomePageGrid } from '../styles/Grids';
import LoadingGrid from '../components/LoadingGrid';
import ItemGrid from '../components/ItemGrid';
 

function CurrentlyFeatured( { featuredTarts }) {
 
  return (
    <div>
      <h2>
        <span className="mark tilt">Featured Tarts</span></h2>
      {!featuredTarts && <LoadingGrid count={4} />}
      {featuredTarts && !featuredTarts?.length && (
        <p>No one is working right now!</p>
      )}
      {featuredTarts?.length && <ItemGrid items={featuredTarts}/>}
    
    </div>
  );
}

export default function HomePage() {
  const { featuredTarts } = useLatestData();

  return (
    <div className="center">
      <HomePageGrid>
        <CurrentlyFeatured featuredTarts={ featuredTarts } />
      </HomePageGrid>
    </div>
  );
}
