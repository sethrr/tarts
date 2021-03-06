import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Nav from './Nav';
import GlobalAlert from './GlobalAlert';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import stripes from '../assets/images/stripes.svg';
import CartAlert from './cart/CartAlert';

const SiteBorderStyles = styled.div`
  max-width: 80%;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 12rem);
  background: white url(${stripes});
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  border: 5px solid var(--lightbrown);
  background-size: 80em;
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const ContentStyles = styled.div`
  background: white;
  padding: 2rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <ContentStyles>
          <Nav />
          <GlobalAlert />
          {children}
          <CartAlert />
          <Footer />
        </ContentStyles>
      </SiteBorderStyles>
    </>
  );
}
