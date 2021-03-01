import React from 'react';
import styled from 'styled-components';
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

  .the-tart {
    font-size: 3.2em;
    letter-spacing: 0.2em;

  }
  .toasted {
    transform: scale(1.3);
    display: block;
    text-shadow: 0.18em 0.18em 0 rgba(0, 0, 0, 0.05);
    perspective: 100px;
  }
  .letter {
    font-size: 3em;
    color: var(--primary);
    display: inline-block;
    line-height: 1;
    transition: transform 0.3s;
  }
`;

export default function Logo() {
  return (
    <LogoStyles className="logo">
    <div className="inner">
      <span className="the-tart">THE</span>
      <h1 className="h5-style">
        <span className="toasted">
          <span className="letter">T</span>
          <span className="letter">O</span>
          <span className="letter">A</span>
          <span className="letter">S</span>
          <span className="letter">T</span>
          <span className="letter">E</span>
          <span className="letter">D</span>
        </span>
        <span className="the-tart">TART</span>
      </h1>
    </div>
  </LogoStyles>
  );
}
