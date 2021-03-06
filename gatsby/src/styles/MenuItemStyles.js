import styled from 'styled-components';

const MenuItemStyles = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0 1.3rem;
  align-content: center;
  align-items: center;
  position: relative;

  .gatsby-image-wrapper {
    grid-row: span 2;
    height: 100%;
  }
  
  .menu-item-info {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
  }
  .gatsby-image-wrapper {
max-height: 150px;
align-self: flex-start;
}
  p {
    margin: 0;
  }
  h2 {
    margin-bottom: .5rem;
  }
  button {
    font-size: 1.5rem;
    background: var(--yellow);
  }

  button + button {
    margin-left: 1rem;
  }
  .remove {
    background: none;
    color: var(--red);
    font-size: 3rem;
    position: absolute;
    top: 0;
    right: 0;
    box-shadow: none;
    line-height: 1rem;
  }
`;

export default MenuItemStyles;
