import { createGlobalStyle } from "styled-components";
import "normalize.css";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #8d6a62;
    --secondary: #e2a99c;
    --tertiary: #F9F3EF;
    --black: #2E2E2E;
    --white: #fff;
    --grey: #efefef;
    --spacer: 1rem;
    --gap: 2.5rem;
    --max-width: 1200px;
  }

  html {
    margin: 0;
    font-size: 16px;
  }
  
  * {
    box-sizing: border-box;
  }

  body {
	display: flex;
	flex-direction: column;
  font-size: 2rem;
    max-width: var(--max-width);
    margin: 0 auto;

	&.fixed {
		overflow: hidden;
	}
}

main {
	flex: 1 0 auto;
	position: relative;
}

#siteHeader {
  top: 0;
  width: 100%;
  z-index: 200;
  position: fixed;
  margin: 0;
  padding: 0;
}

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  .gatsby-image-wrapper img[src*="base64\\,"] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }

  html {
    scrollbar-width: thin;
    scrollbar-color: var(--primary) var(--white);
  }

  body::-webkit-scrollbar-track {
    background: var(--white);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--primary) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }


`;

export default GlobalStyles;
