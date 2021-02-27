import React from "react";
import { Flex, Box } from "theme-ui";
import { useShoppingCart } from "use-shopping-cart";

const CheckoutDetails = () => {
  const {
    cartDetails,
    formattedTotalPrice,
    handleCartClick,
    removeItem,
    redirectToCheckout,
  } = useShoppingCart();

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
    <div>
      {Object.keys(cartDetails).map((cartItem) => {

        const item = cartDetails[cartItem];
        return (
          <div>
              <img src={item.image} />
              {item.name}
              {item.description}
              Qty: 0
              {item.formattedValue}
              <button onClick={removeItem(item.sku)}> x </button>
        </div>
        );
      })}
      Subtotal: {formattedTotalPrice}
      <button onClick={handleCartClick}>Close</button>
      <button onClick={handleSubmit}>Checkout</button>
    </div>
    </>
  );
};

export default CheckoutDetails;
