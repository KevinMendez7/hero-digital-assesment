import { createGlobalStyle } from "styled-components"

export const Global = createGlobalStyle`
  body {
    margin: 0;
    background: rgb(58 64 88 / 85%);
    font-family: 'Open Sans', sans-serif;
  }

  :focus-visible {
    outline: none;
  }
`;