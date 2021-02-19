import React from 'react';
import styled from 'styled-components';


const FooterStyles = styled.div`
margin: 5rem auto 1rem;
text-align: center;
color: var(--secondary);
`;
export default function Footer() {
  return (
    <FooterStyles>
      <p>©The Toasted Tart 2021. All Rights Reserved.</p>
    </FooterStyles>
  );
}
