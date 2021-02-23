import React from 'react';
import styled from 'styled-components';


const AlertStyles = styled.nav`
  background: var(--yellow);
  display: flex;
  margin-bottom: 3rem;

  p {
    padding: 1rem;
    color: white;
    margin: 0 auto;

  }
  
`;

export default function GlobalAlert() {
  return (
    <AlertStyles>
      <p> All orders are shipped out weekly Tuesday-Saturday. Now offering local pickup in Chicago metro.</p>
    </AlertStyles>
  );
}
