import React, { useContext, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "./Logo";
import { useShoppingCart } from "use-shopping-cart";
import { stickyHeader } from '../utils/stickyNavigation';

const NavStyles = styled.nav`
  text-align: center;
  list-style: none;
  display: flex;
  max-width: var(--max-width);
  background: white;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  padding: 1rem 2rem;

  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    align-items: center;
    flex-grow: 1;
    display: flex;
    align-content: flex-end;
    justify-content: flex-end;
  }
  li {
    margin-left: 2rem;
  }
  .logo {
    &:hover {
      --rotate: 3deg;
    }
  }
  a {
    text-decoration: none;
    color: var(--primary);
    position: relative;

    &[data-cartcount] {
      &:after {
        content: attr(data-cartcount);
        position: absolute;
        width: 18px;
        height: 18px;
        font-size: 18px;
        top: -7px;
        right: -12px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        color: var(--primary);
        background: var(--secondary);
      }
    }
  }
`;

export default function Nav() {
  const { cartCount } = useShoppingCart();
  useEffect(() => {
    console.log('happy')
    stickyHeader();
  }, []);

  return (
    <NavStyles>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <ul>
        <li className="logo"></li>

        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/poptarts/">Order Now</Link>
        </li>
        <li>
          <Link to="/cart" data-cartcount={cartCount != -0 ? cartCount : null}>
            Cart
          </Link>
        </li>
      </ul>
    </NavStyles>
  );
}
