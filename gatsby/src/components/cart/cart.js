import React, { useContext, useEffect } from "react";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import MenuItemStyles from '../../styles/MenuItemStyles';
import Img from 'gatsby-image';
import OrderStyles from "../../styles/OrderStyles";
import {StateContext, DispatchContext} from '../context'
import { globalHistory } from "@reach/router";


const Cart = () => {
  const {
    cartDetails,
    cartCount,
    removeItem,
    redirectToCheckout,
    formattedTotalPrice
  } = useShoppingCart();
  
  const dispatch = useContext(DispatchContext);
  
  dispatch({ type: "cartOpen", payload: false })

  useEffect(() => {
  }, [cartCount]);
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/.netlify/functions/create-session", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartDetails),
    })
      .then((res) => {
        return res.json();
      })
      .catch((error) => console.log(error));

    redirectToCheckout({ sessionId: response.sessionId });
  };

  return (
    <OrderStyles>
        <fieldset><legend>Order</legend>
        {cartCount !== 0
          ? Object.keys(cartDetails).map((cartItem, index) => {
              const item = cartDetails[cartItem];

              return (
                <React.Fragment key={index}>
                  <MenuItemStyles>
                  <Img
                width="50"
                height="50"
                fluid={item?.image.asset.fluid}
                alt={item?.name}
              />
              <div className="menu-item-info">
                <h2>{item?.name}</h2>
                    quantity: {item.quantity}
                      <p>
                        {formatCurrencyString({
                          value: item.price,
                          currency: 'USD',
                          language: "en-US",
                        })}
                      </p>
              </div>
                      <button type="button" className="remove" title={`Remove ${item.title} from Order`} onClick={() => removeItem(item.id)}>&times;</button>
                
                  </MenuItemStyles>
                </React.Fragment>
              );
            })
          : <p>Your cart is empty!</p>
          
        }
        </fieldset>
      <div>
        <fieldset>
      
      <legend>Shipping</legend>
      <p>"the next business day after an order has shipped." Business days are defined as "Monday-Friday" and not including holidays and weekends. Additionally, examples are provided, letting a customer know that with next day delivery, "an order that ships out on Thursday...would be delivered on Friday" and that "an order shipping out on Friday...would arrive on Monday."</p>
        </fieldset>
        <fieldset>
      <legend>Total</legend>
      <p>Subtotal: {formattedTotalPrice}</p>
      <p>Total: {formattedTotalPrice}</p>
      {cartCount !== 0
          ?
        <button onClick={handleSubmit}>
          Checkout
        </button>
          :

          <button disabled>
          Checkout
        </button>
      } 
      </fieldset>
      </div>
      </OrderStyles>

  );
};

export default Cart;
