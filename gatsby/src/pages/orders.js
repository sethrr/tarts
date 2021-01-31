import React, {useState} from 'react';
import SEO from '../components/SEO';
import OrderStyles from '../styles/OrderStyles';
import MenuItemStyles from '../styles/MenuItemStyles';
import useForm from '../utils/useForm';
import calculateTartPrice from '../utils/calculateTartPrice';
import formatMoney from '../utils/formatMoney';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function OrderPage( { data }) {
const { values, updateValue } = useForm({
  name: '',
  email: '',
})
const tarts = data.poptarts.nodes;
  return (
    <>
     <SEO title="Order a Poptart!" />
      <OrderStyles>
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
                  <button key={size} type="button">
                    {size} {formatMoney(calculateTartPrice(tart.price, size))}
                  </button>
                ))}
              </div>
            </MenuItemStyles>
          ))}
        </fieldset>
        <fieldset className="order">
          <legend>Order</legend>
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