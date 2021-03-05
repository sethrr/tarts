import React from 'react';
import { Link } from 'gatsby';

import Logo from './Logo';
import { useShoppingCart } from "use-shopping-cart";

export default function Nav() {
  const {cartCount} = useShoppingCart();

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li>
            <Link to="/poptarts/">Order Now</Link>
        </li>
        <li>
          <Link to="/cart" data-cartcount={cartCount !==0 ? cartCount : null} >Cart</Link> 
        </li>
      </ul>
    </div>
  );
}
