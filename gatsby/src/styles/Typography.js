import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/Kollektif.woff';
import boldFont from '../assets/fonts/Kollektif-Bold.woff';

const Typography = createGlobalStyle`
  @font-face {
    font-family: Kollektif;
    src: url(${font});
  }
  @font-face {
    font-family: Kollektif;
    src: url(${boldFont});
    font-weight: bold;
  }

  html {
    font-family: Kollektif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--primary-light);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
    text-decoration: none;
  }
  mark, .mark {
    color: var(--primary);
    border: 5px solid var(--primary);
    padding: 5px;
    margin: 0;
    display: inline;
    line-height: 1;
    text-decoration: none;
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }
`;

export default Typography;
