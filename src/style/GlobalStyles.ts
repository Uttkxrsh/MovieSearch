import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Fira Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("/FiraMono.woff2") format('woff2');
  }

  @font-face {
    font-family: 'Fira Mono Fallback';
    font-style: normal;
    font-weight: 400;
    src: local('Courier New');
    ascent-override: 93.52%;
    descent-override: 26.50%;
    line-gap-override: 0.00%;
    size-adjust: 99.98%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Fira Mono", "Fira Mono Fallback";
    background: black;
    color: white;
  }
`;

export default GlobalStyles;
