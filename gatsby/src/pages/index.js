import React from 'react';
import useLatestData from '../utils/useLatestData';
import { HomePageGrid } from '../styles/Grids';
import {FeaturedTartsLoader, FeaturedImageLoader} from '../components/LoadingGrid';
import ItemGrid from '../components/ItemGrid';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Image from "gatsby-image";

const FeaturedTartsSection = styled.div`
background: var(--red);
padding: 10rem 0;
margin-left: -2rem;
margin-right: -2rem;

.mark, .btn {
  background: var(--yellow);
  color: var(--black);
}



`;

const HomeHeadline = styled.div`
margin: 0 auto;
padding: 5rem 0;
display: grid;
grid-gap: 5rem;
grid-template-columns: 1fr 1fr;
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
  /* display: flex; */
  flex-direction: center;
  align-items: center;
  
}
`;


function CurrentlyFeatured( { featuredTarts }) {
  return (
    <FeaturedTartsSection>

      <h2>
      <span className="mark tilt">Featured Tarts</span></h2>
      {!featuredTarts && <FeaturedTartsLoader count={4} />}
      {featuredTarts && !featuredTarts?.length && (
        <p>No one is working right now!</p>
      )}
      {featuredTarts?.length && <ItemGrid items={featuredTarts}/>}
    
    </FeaturedTartsSection>
  );
}

export default function HomePage({ data }) {
  const { featuredTarts } = useLatestData();
  const { featuredImage } = useLatestData();
  
  const homeData = data.sanityStoreSettings;

  return (
    <div className="center">
      <HomePageGrid>

      <HomeHeadline>
      <div className="hero">
      <div class="image-container">
      <Image fluid={homeData.featuredImage.asset.fluid} height={500} width={500}/>
      </div>
      </div>
      <div className="hero-sidebar">
      <h1> Homemade <strong> Poptarts</strong>.
       <br />
       But for <strong>Adults.</strong>
       </h1>
        <Link to="/poptarts/"><button className="btn"> See Menu </button></Link>
       
       </div>
    </HomeHeadline>
        <CurrentlyFeatured featuredTarts={ featuredTarts } />
      </HomePageGrid>
    </div>
  );
}
export const query = graphql`
query {
  sanityStoreSettings {
    featuredImage {
      asset {
        fluid(maxWidth: 500) {
          ...GatsbySanityImageFluid
        }
      }
    }
  }
}
  
`;