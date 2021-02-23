import React, { useContext} from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';
import OrderContext from '../components/OrderContext';





const NavStyles = styled.nav`
  .logo {
    transform: translateY(-25%);
  }
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    margin-top: -6rem;
  }
  li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;
    &:nth-child(1) {
      --rotate: 1deg;
    }
    &:nth-child(2) {
      --rotate: -2.5deg;
    }
    &:nth-child(4) {
      --rotate: 2.5deg;
    }
    &:hover {
      --rotate: 3deg;
    }
  }
  a {
    font-size: 3rem;
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
                color: var(--red);
                background: var(--yellow)
             
            }
        }
  }
`;

export default function Nav() {
  const getCount = useContext(OrderContext)[0].length;
  // if (getCount == 0) {
  //   getCount = null;
  // }


  return (
    <NavStyles>
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
          <Link to="/cart" data-cartcount={getCount !=0 ? getCount : null}>Cart</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
