import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: "Heebo";
  }

  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
  }
  
  body {
    font-size: 1.6rem;
    background: white;
  }
`

export default GlobalStyle;