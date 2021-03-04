import React, { useContext, useEffect } from "react";
import styled from 'styled-components';
import { useShoppingCart } from "use-shopping-cart";
import { StateContext, DispatchContext } from "../../components/context";
import Cart from '../../components/cart/cart'
import { setConfig } from 'react-hot-loader';

setConfig({ pureSFC: true });


const CartAlertStyles = styled.div`
position: fixed;
bottom: 0;
right: 0;
padding: 3rem;
border: 5px solid var(--yellow);
background: white;
width: 20%;
transition: "right 250ms ease-in-out";
position: "fixed";
bottom: 0;
right: -800;
height: "100vh";
z-index: 99999;      

.remove {
    background: none;
    color: var(--red);
    font-size: 5rem;
    position: absolute;
    top: .5rem;
    right: .5rem;
    box-shadow: none;
    line-height: 1rem;
    padding: 1rem;
  }

&.show {
right: 0;
}

&.hide {
    display: none;
}


@keyframes slideUp {
  0% { bottom: -200px; }
  100% { bottom: 0; }
}
`


export default function CartAlert() {
  const { cartCount } = useShoppingCart();
    const dispatch = useContext(DispatchContext);
    const state= useContext(StateContext);

    return (
        state.cartOpen ? 
        <CartAlertStyles> 
            <p>You have {cartCount} items in your cart. </p>
            <button> Go To Checkout </button>
           <button type="button" className="remove" title="Close Window" onClick={() => dispatch({ type: "cartOpen", payload: false })}>&times;</button>
        </CartAlertStyles>
           :
          <>
          </>
    )
      
}