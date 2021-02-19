import React from 'react';
import styled from 'styled-components';
import stripes from '../assets/images/stripes.svg';
import sprinkles from '../assets/images/sprinks223.svg';


const LogoStyles = styled.div`
  /* This value controls the entire size of the logo*/
  font-size: 6px;
  font-size: clamp(1px, 0.65vw, 8px);
  width: 50em;
  height: 30em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  margin: 0;
  --borderSize: 1em;
  background: white ;
  background-size: 150em;
  border: var(--borderSize) solid var(--primary);
  border-radius: 25px;

  display: flex;
  .inner {
    flex: 1;
    background: var(--lightbrown) url(${sprinkles});

    display: grid;
    grid-template-rows: 25% 25% 25%;
    align-content: center;
    border-radius: 15px;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .est {
    font-size: 1.5em;
    align-self: center;
  } align-self: center;
  }
  h1 {
    display: grid;
    grid-template-rows: 8fr 2fr;
    align-items: center;
    margin: 0;
    grid-row: 2 / span 2;
    grid-gap: 1.25rem;
    transform: translateY(-0.7em);
  }

  .slices {
    font-size: 3.2em;
    letter-spacing: 0.2em;

  }
  .slicks {
    transform: scale(1.3);
    display: block;
    text-shadow: 0.18em 0.18em 0 rgba(0, 0, 0, 0.05);
    perspective: 100px;
  }
  .letter {
    font-size: 3em;
    color: var(--primary);
    --scale: 1;
    --rotate: -10deg;
    --translateX: 0;
    --translateY: 0;
    --rotateX: 0deg;
    transform: scale(var(--scale)) rotate(var(--rotate))
      translateX(var(--translateX)) translateY(var(--translateY))
      rotateX(var(--rotateX));
    display: inline-block;
    line-height: 1;
    transition: transform 0.3s;
  
    &.S {
      --translateX: -0.05;
    }
    &.l {
      --rotate: 2deg;
      --scale: 1.4;
      --translateX: 0.05em;
      --translateY: -0.05em;
    }
    &.i {
      --scale: 0.9;
      --translateY: -0.1em;
      --translateX: 0.1em;
    }
    &.c {
      --rotate: 3deg;
      --scale: 0.9;
      --translateX: 0.1em;
      --translateY: 0.23em;
    }
    &.k {
      --rotate: -12deg;
      --scale: 1.2;
      --translateX: 0.06em;
    }
    &.apos {
      --translateX: 0.1em;
    }
    &.s {
      --rotate: 12deg;
      --scale: 0.9;
      --translateY: -0.14em;
    }
  }
`;

export default function Logo() {
  return (
    <LogoStyles className="logo">
    <div className="inner">
      <span className="slices">THE</span>
      <h1 class="h5-style">
        <span className="slicks">
          <span className="letter">T</span>
          <span className="letter">O</span>
          <span className="letter">A</span>
          <span className="letter">S</span>
          <span className="letter">T</span>
          <span className="letter">E</span>
          <span className="letter">D</span>
        </span>
        <span className="slices slices-last">TART</span>
      </h1>
    </div>
  </LogoStyles>
  );
}
