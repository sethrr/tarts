import React, { useContext } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { StateContext, DispatchContext } from "../../components/context";




export default function CartAlert() {
  const { cartCount } = useShoppingCart();
    const dispatch = useContext(DispatchContext);
    const state= useContext(StateContext);

    return (
        state.cartOpen ? 
        <div> 
            <p>You have {cartCount} items in your cart. </p>
            <button> Go To Checkout </button>
           <button type="button" className="remove" title="Close Window" onClick={() => dispatch({ type: "cartOpen", payload: false })}>&times;</button>
        </div>
           :
          <>
          </>
    )
      
}