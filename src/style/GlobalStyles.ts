import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
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
