import React, { useContext, useEffect } from "react";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import MenuItemStyles from '../../styles/MenuItemStyles';
import Img from 'gatsby-image';
import OrderStyles from "../../styles/OrderStyles";
import {StateContext, DispatchContext} from '../context'
import formatMoney  from "../../utils/formatMoney"
import { globalHistory } from "@reach/router";

const Cart = () => {
  const {
    cartDetails,
    cartCount,
    removeItem,
    redirectToCheckout,
    totalPrice
  } = useShoppingCart();
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);

  useEffect(() => {
    console.log({ cartCount });
  }, [cartCount]);

  useEffect(() => {
    // If the route has changed it means the user has clicked on a category and we want to wait half a second then close the pop out
    return globalHistory.listen(({ action }) => {
      if (action === "PUSH") {
        const timer = setTimeout(() => {
          dispatch({ type: "cartOpen", payload: false });
        }, 500);

        return () => clearTimeout(timer);
      }
    });
  }, [state.cartOpen, dispatch]);
  

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
                    <p>quantity: {item.quantity}</p>
                       <p> price: {formatMoney(item.price)} </p>
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
      {formatMoney(totalPrice)}
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
