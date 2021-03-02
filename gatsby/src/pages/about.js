import { graphql } from "gatsby";
import React from "react";
import styled from 'styled-components';
import Image from "gatsby-image";
import useForm from '../utils/useForm';
import useTart from '../utils/useTart';

const AboutStyles = styled.div`
 display: grid;
  gap: 5rem;
  --columns: 2;
  grid-template-columns: 1fr .33fr;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }

  .baker-bio {
      margin: 1rem 0;
  }
  fieldset {
    grid-column: span 1;
    max-height: 600px;
    overflow: auto;
    display: grid;
    gap: 1rem;
    align-content: start;
    &.order,
    &.menu {
      grid-column: span 1;
      /* Chrome is weird about Grid and fieldsets, so we add a fixed height to fix it :)  */
      height: 900px;
    }
  }
  button {
    display: inline-block;
  }
  .mapleSyrup {
    display: none;
  }

  .contact-container {
      margin-top: 4rem;
  }
`;


export default function AboutPage({ data }) {
    const { values, updateValue } = useForm({
        name: '',
        email: '',
        mapleSyrup: '',
        message: '',
      });

      const { loading, error, submitOrder } = useTart({
        values,
      });

  const about = data.sanityAbout;
  return (
      <>
   <div>
   <h1> About </h1>
   </div>
   <AboutStyles onSubmit={submitOrder}>
   <div className="main">
   <div className="about-container">
   <h2 className="h3-style">The Toasted Tart</h2>
   <p>{about.storeInfo}</p>
   </div>


   <div class="contact-container">
    <h2> Get In Touch</h2>
   <fieldset >
          <legend>Your Info</legend>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={updateValue}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={updateValue}
          />
          <label htmlFor="email">Your message</label>
          <textarea
            type="textarea"
            name="message"
            id="message"
            value={values.message}
            rows="10"
            cols="20"
            onChange={updateValue}
          />
          <input
            type="mapleSyrup"
            name="mapleSyrup"
            id="mapleSyrup"
            value={values.mapleSyrup}
            onChange={updateValue}
            className="mapleSyrup"
          />
          <div>{error ? <p>Error: {error}</p> : ''}</div> 
           <button type="submit">
            {loading ? 'Working On It...' : 'Get In Touch'}
          </button>
        </fieldset>
    </div>
    </div>


   <div className="sidebar"> 
   <Image fluid={about.image.asset.fluid} />
   <h3 className="baker-bio"> Baker Bio</h3>
   <p>{about.biography}</p>
    </div>
    </AboutStyles>
    </>
  );
}
export const query = graphql`
query {
    sanityAbout {
      biography
      image {
        asset {
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
      storeInfo
    }
  }
`;
