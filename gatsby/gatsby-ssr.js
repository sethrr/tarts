import React from 'react';
import Layout from './src/components/Layout';
import { OrderProvider } from './src/components/OrderContext';
import { loadStripe } from '@stripe/stripe-js';
import { CartProvider } from 'use-shopping-cart';
import { useSiteMetadata } from './src/components/useSiteMetadata';
import SiteProvider from './src/components/context';

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_API_PUBLIC);

const WithMetaData = ({element}) => {
    return(
        <CartProvider
        stripe={stripePromise}
        successUrl="https://gatsby-starter-sell-stuff.netlify.app/success"
        cancelUrl="https://gatsby-starter-sell-stuff.netlify.app/cancelled"
        currency="USD"
        allowedCountries="['US']"
        billingAddressCollection={true}
        mode="checkout-session"
        >
           <SiteProvider>
                {element}
            </SiteProvider>
        </CartProvider>
    )
}

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
  return ( 
  <>
  <OrderProvider>{element}</OrderProvider> 
  <WithMetaData element={element} />
  </>
  )
}
