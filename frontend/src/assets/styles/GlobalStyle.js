import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    overflow-y: hidden;
    overflow-x: hidden;
  }
  
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;
