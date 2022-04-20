import * as styled from 'styled-components';

export const GlobalStyle = styled.createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    height: 100%;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    height: 100%;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.black};
  }

  a,
  button,
  input,
  select,
  textarea {
    font-family: 'Montserrat', sans-serif;
  }

  #root {
    height: 100%;
  }

  .ReactModal__Overlay {
    z-index: 9999;
  }
`;
