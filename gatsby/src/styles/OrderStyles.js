import styled from 'styled-components';

const OrderStyles = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  fieldset {
    grid-column: span 1;
    max-height: 600px;
    overflow: auto;
    display: grid;
    gap: 1rem;
    align-content: start;
    padding: 1rem;
    &.order,
    &.menu {
      grid-column: span 1;
      /* Chrome is weird about Grid and fieldsets, so we add a fixed height to fix it :)  */
      height: 600px;
    }
    & + fieldset {
      margin-top: 3rem;

    }
  }
  button {
    display: inline-block;
  }
  .mapleSyrup {
    display: none;
  }
  @media (max-width: 900px) {
    fieldset.menu,
    fieldset.order {
      grid-column: span 2;
    }
  }
  p {
    margin: 0;
  }
`;

export default OrderStyles;