import React, { useContext, useEffect } from "react";
import { StateContext, DispatchContext } from "../context";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import { globalHistory } from "@reach/router";

const Cart = () => {
  const {
    cartDetails,
    cartCount,
    removeItem,
    redirectToCheckout,
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
  }, []);

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
  <>
     
     Your Cart
       
     
       
        <div>
        {cartCount !== 0
          ? Object.keys(cartDetails).map((cartItem, index) => {
              const item = cartDetails[cartItem];
              return (
                <React.Fragment key={index}>
              
                  
                    <img src={item?.image} />
                  
                        {item?.name}
                     
                      
                        {formatCurrencyString({
                          value: item.price,
                          currency: item.currency,
                          language: "en-US",
                        })}
                    
                  
                    <button onClick={() => removeItem(item.id)}>x</button>
                
                  
                </React.Fragment>
              );
            })
          : null}
          </div>
      
        <button variant="checkout" onClick={handleSubmit}>
          Checkout
        </button>
      

    </>
  );
};

export default Cart;
