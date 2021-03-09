import React from "react";
import styled from "styled-components";
import sprinkles from "../assets/images/sprinks223.svg";

const LogoStyles = styled.div`
  /* This value controls the entire size of the logo*/
  font-size: 6px;
  font-size: clamp(1px, 0.35vw, 8px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  margin: 0;
  background: var(--tertiary);
  --borderSize: 5px;
  border: var(--borderSize) solid var(--primary);
  border-radius: 25px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  

  h1 {
    margin: 0;
    padding: 1rem;
    transform: rotate(2deg);
  
  &:hover {
    
    transform: rotate(-2deg);
  }
    span {
      display: block;
    }
  }

  .the-tart {

    letter-spacing: 0.2em;

  }
  .toasted {
    transform: scale(1.3);
    display: block;
    text-shadow: 0 0.18em 0 rgba(0, 0, 0, 0.05);
    perspective: 100px;
  }
  .letter {
    font-size: 3rem;
    color: var(--primary);
    display: inline-block;
    line-height: 1;
    transition: transform 0.3s;
    margin-bottom: .5rem;
  }
`;

export default function Logo() {
  return (
    <LogoStyles className="logo">
      <div className="inner">
        <h1 className="h6-style">
        <span className="the-tart">THE</span>
          <span className="toasted letter"> Toasted
          </span>
          <span className="the-tart">TART</span>
        </h1>
      </div>
    </LogoStyles>
  );
}
