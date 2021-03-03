import React from 'react';
import SEO from '../components/SEO';
import Cart from '../components/cart/cart';


export default function OrderPage({ }) {
  
  return (
    <>
      <SEO title="Order a Tart!" />
      <h1>Cart</h1>
             <Cart />
    </>
  );
}
