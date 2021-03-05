import React from 'react';
import useLatestData from '../utils/useLatestData';
import {FeaturedTartsLoader} from '../components/LoadingGrid';
import { Link } from 'gatsby';
import Image from "gatsby-image";


function CurrentlyFeatured( { featuredTarts }) {
  return (
    <div>

      <h2>
      <span className="mark tilt">Featured Tarts</span></h2>
      {!featuredTarts && <FeaturedTartsLoader count={4} />}
      {featuredTarts && !featuredTarts?.length && (
        <p>No one is working right now!</p>
      )}
      {featuredTarts?.length && <div items={featuredTarts}/>}
    
    </div>
  );
}

export default function HomePage({ data }) {
  const { featuredTarts } = useLatestData();

  
  const homeData = data.sanityStoreSettings;

  return (
    <div className="center">
      <div>

      <div>
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
    </div>
        <CurrentlyFeatured featuredTarts={ featuredTarts } />
      </div>
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