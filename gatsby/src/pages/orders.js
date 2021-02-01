import React, {useState} from 'react';
import SEO from '../components/SEO';
import OrderStyles from '../styles/OrderStyles';
import MenuItemStyles from '../styles/MenuItemStyles';
import useForm from '../utils/useForm';
import calculateTartPrice from '../utils/calculateTartPrice';
import calculateOrderTotal from '../utils/calculateOrderTotal';
import formatMoney from '../utils/formatMoney';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import useTart from '../utils/useTart';
import TartOrder from '../components/TartOrder';

export default function OrderPage( { data }) {
  const tarts = data.poptarts.nodes;
const { values, updateValue } = useForm({
  name: '',
  email: '',
})
const {order, addToOrder, removeFromOrder, error, loading, message, submitOrder } = useTart({tarts , values: values});
if (message) {
  return <p>{message}</p>
}
  return (
    <>
     <SEO title="Order a Poptart!" />
      <OrderStyles onSubmit={submitOrder}>
        <fieldset>
          <legend>Your Info</legend>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={updateValue}
            />
          </label>

          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={updateValue}
            />
          </label>
        </fieldset>
        <fieldset className="menu">
          <legend>Menu</legend>
          {tarts.map((tart) => (
            <MenuItemStyles key={tart.id}>
              <Img
                width="50"
                height="50"
                fluid={tart.image.asset.fluid}
                alt={tart.name}
              />
              <div>
                <h2>{tart.name}</h2>
              </div>
              <div>
                {['Half', 'Full', 'Two'].map((size) => (
                  <button 
                  key={size} 
                  type="button" 
                  onClick={() => addToOrder({
                    id: tart.id,
                    size,
                  })}>
                    {size} {formatMoney(calculateTartPrice(tart.price, size))}
                  </button>
                ))}
              </div>
            </MenuItemStyles>
          ))}
        </fieldset>
        <fieldset className="order">
          <legend>Order</legend>
          <TartOrder order={order} removeFromOrder={removeFromOrder} tarts={tarts} ></TartOrder>
        </fieldset>
        <fieldset>
          <h3>
            Your Total is {formatMoney(calculateOrderTotal(order, tarts))}
          </h3>
          <div>{error ? <p> Error: {error}</p> : ''}</div>
          <button type="submit" disabled={loading}>
            {loading ? ' Placing order..' : 'Order ahead'}
            </button>
        </fieldset>
      </OrderStyles>
    </>
  );
}

export const query = graphql`
query {
  poptarts: allSanityPoptarts {
      nodes { 
        name
        price
        id
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;