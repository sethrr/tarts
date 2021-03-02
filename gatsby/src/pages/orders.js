import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';
import calculateTartPrice from '../utils/calculateTartPrice';
import formatMoney from '../utils/formatMoney';
import OrderStyles from '../styles/OrderStyles';
import MenuItemStyles from '../styles/MenuItemStyles';
import useTart from '../utils/useTart';


export default function OrderPage({ data }) {
  const tarts = data.tarts.nodes;
  const { values, updateValue } = useForm({
    name: '',
    email: '',
    mapleSyrup: '',
  });
  const {
    addToOrder,
 
    loading,
    message,
    submitOrder,
  } = useTart({
    tarts,
    values,
  });



  if (message) {
    return <p>{message}</p>;
  }
  return (
    <>
      <SEO title="Order a Tart!" />
      <OrderStyles onSubmit={submitOrder}>
        <fieldset disabled={loading}>
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
          <input
            type="mapleSyrup"
            name="mapleSyrup"
            id="mapleSyrup"
            value={values.mapleSyrup}
            onChange={updateValue}
            className="mapleSyrup"
          />
        </fieldset>
        <fieldset disabled={loading} className="menu">
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
                {['Half Dozen', 'Full Dozen', 'Two Dozen'].map((size) => (
                  <button
                    type="button"
                    key={size}
                    onClick={() =>
                      addToOrder({
                        id: tart.id,
                        size,
                      })
                    }
                  >
                    {size} {formatMoney(calculateTartPrice(tart.price, size))}
                  </button>
                ))}
              </div>
            </MenuItemStyles>
          ))}
        </fieldset>

    
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
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
