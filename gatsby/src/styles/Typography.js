import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/frenchfries.woff';


const Typography = createGlobalStyle`
  @font-face {
    font-family: frenchfries;
    src: url(${font});
  }
  html {
    font-family: frenchfries, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
    font-weight: 700;
    
    &.no-margins {
      margin: 0;
    }
  }

  h1, h2 {
    margin-bottom: 2rem;
  }
  a {
    color: var(--black);
    text-decoration: none;
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  mark, .mark {
    background: var(--secondary);
    padding: 5px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }


:root {
    --responsive-h1: 5.5rem;
    --responsive-h2: 3.5rem;
    --responsive-h3: 2.75rem;
    --responsive-h4: 2.125rem;
    --responsive-h5: 1.75rem;
    --responsive-h6: 1.125rem;



    @media(max-width: 1200px) {
        --navigation-font-size: 1.125rem;
        --responsive-h1: 4rem;
        --responsive-h2: 2.5rem;
        --responsive-h3: 2rem;
        --responsive-h4: 1.75rem;
        --responsive-h5: 1.375rem;
        --responsive-h6: 0.875rem;
    }


     @media(max-width: 600px) {
        --responsive-h1: 2.5rem;
        --responsive-h2: 2rem;
        --responsive-h3: 1.75rem;
        --responsive-h4: 1.5rem;
        --responsive-h5: 1.25rem;
    }

    --text-margin: #{$_typography-paragraph-spacing};

    // FONT SIZES
h1, .h1-style {
    font-size: $_font-size-default-xx-large;
    font-size: var(--responsive-h1);

}


h2, .h2-style {
    font-size: $_font-size-default-x-large;
    font-size: var(--responsive-h2);

}

h3, .h3-style {
    font-size: $_font-size-default-large;
    font-size: var(--responsive-h3);

}

h4, .h4-style {
    font-size: $_font-size-default-med-large;
    font-size: var(--responsive-h4);

}

h5, .h5-style {
    font-size: $_font-size-default-medium;
    font-size: var(--responsive-h5);

}

h6,.h6-style {
    font-size: $_font-size-default-regular;
    font-size: var(--responsive-h6);

}

}
`;

export default Typography;
