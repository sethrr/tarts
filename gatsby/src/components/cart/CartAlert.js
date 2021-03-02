import React, { useContext, useEffect } from "react";
import styled from 'styled-components';
import { useShoppingCart } from "use-shopping-cart";
import { StateContext, DispatchContext } from "../../components/context";




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
    const dispatch = useContext(DispatchContext);
    const state = useContext(StateContext);
    const {cartCount} = useShoppingCart();
    return (
        <CartAlertStyles className={state.cartOpen ? 'show' : 'hide' } data-cart-alert> 
           <p>Whattt</p>  
           <button type="button" className="remove" title="Close Window" onClick={() => dispatch({ type: "cartOpen", payload: false })}>&times;</button>
        </CartAlertStyles>
        
 
    )
}