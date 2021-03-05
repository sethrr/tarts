import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import GlobalAlert from './GlobalAlert';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import CartAlert from './cart/CartAlert';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />

    

          <Nav />
          <GlobalAlert />
          {children}
          <CartAlert />
          <Footer />
   
      
    </>
  );
}
