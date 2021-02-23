import React, { useState, useContext  } from 'react';
import SEO from '../components/SEO';
import formatMoney from '../utils/formatMoney';
import OrderStyles from '../styles/OrderStyles';
import TartOrder from '../components/TartOrder';
import OrderContext from '../components/OrderContext';
import useTart from '../utils/useTart';
import calculateOrderTotal from '../utils/calculateOrderTotal';
import { graphql } from 'gatsby';

export default function OrderPage({ data }) {
  const tarts = data.tarts.nodes;
  const [order, setOrder] = useContext(OrderContext);

  function getLocalStorage(key, initialValue) {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (e) {
      // if error, return initial value
      return initialValue;
    }
  }
  const getOrder = getLocalStorage("order");

  const {
    removeFromOrder,
    error,
    loading,
    submitOrder,
  } = useTart({
    tarts,
  });

  return (
    <>
      <SEO title="Order a Tart!" />
      <OrderStyles onSubmit={submitOrder}>

          <fieldset className="order">
          <legend>Order</legend>
          <TartOrder
            order={getOrder}
            tarts={tarts}
            removeFromOrder={removeFromOrder}
          />
        </fieldset>
        <div>
        <fieldset disabled={loading}>
        <legend>Totals</legend>
          <h3>
            Your Total is {formatMoney(calculateOrderTotal(order, tarts))}
          </h3>
          <div>{error ? <p>Error: {error}</p> : ''}</div>
          <button type="submit" disabled={loading}>
            {loading ? 'Placing Order...' : 'Order Ahead'}
          </button>
        </fieldset>
        </div>
      </OrderStyles>
    </>
  );
}
export const query = graphql`
  query {
    tarts: allSanityPoptarts {
      nodes {
        name
        id
        slug {
          current
        }
        price
        image {
          asset {
            fluid(maxWidth: 200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
