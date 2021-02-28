import React from 'react';
import useLatestData from '../utils/useLatestData';
import { HomePageGrid } from '../styles/Grids';
import LoadingGrid from '../components/LoadingGrid';
import ItemGrid from '../components/ItemGrid';
import styled from 'styled-components';
import { Link } from 'gatsby';

const HomeHeadline = styled.div`
margin: 0 auto;
padding: 5rem 0;
display: grid;
grid-gap: 5rem;
grid-template-columns: 1.5fr 1fr;
width: 100%;

h1 strong {
  color: var(--red);
}
.hero-sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    .btn {
      background: var(--secondary);
      padding: 1.5rem 3rem;
    }
}
.hero {
  img {
    max-width: 100%;
    height: 100%;
    max-height: 50rem;
    object-fit: cover;
  }
}
`;

function CurrentlyFeaturedImage ({ featuredImage }) { 
  return (
      <HomeHeadline>
      <div className="hero">

      
                    {featuredImage && (
                       <img src={`${featuredImage.asset.url}`} 
                    alt="hero"
                    height="100%"
                    width="100%"
                    style={{
                        background: `url(${featuredImage.asset.metadata.lqip})`,
                        backgroundSize: "cover"
                    }}
                    />
                    )}
      </div>
      <div className="hero-sidebar">
      <h1> Homemade <strong> Poptarts</strong>.
       <br />
       But for <strong>Adults.</strong>
       </h1>
        <Link to="/poptarts/"><button className="btn"> See Menu </button></Link>
       
       </div>
    </HomeHeadline>

  )
}
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
  const { featuredImage } = useLatestData();
  
  return (
    <div className="center">
      <HomePageGrid>
        <CurrentlyFeaturedImage featuredImage={ featuredImage } />
        <CurrentlyFeatured featuredTarts={ featuredTarts } />
      </HomePageGrid>
    </div>
  );
}
