import React from 'react';
import SEO from '../components/SEO';
import OrderStyles from '../styles/OrderStyles';
import CheckoutDetails from '../components/cart/checkout-details';


export default function CheckoutDetailsPage({ }) {
  
  return (
    <>
      <SEO title="Order a Tart!" />
      <OrderStyles>

     
          <CheckoutDetails />

    

      </OrderStyles>
    </>
  );
}
