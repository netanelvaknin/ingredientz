import { createGlobalStyle } from 'styled-components';
import {mobile} from './utils/screen-sizes';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: "Heebo";
  }

  html {
    scroll-behavior: smooth;
    font-size: 62.5%;

    @media ${mobile} {
      font-size: 53%;
    }

    @media (max-width: 320px) {
      font-size: 44%;
    }
  }
  
  body {
    font-size: 1.6rem;
  }

  ::-webkit-scrollbar {
    width: 10px;
  } 

  ::-webkit-scrollbar-track {
    background: #ccc;
  }

  ::-webkit-scrollbar-thumb {
    background: #ff7f41;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #ff7f41;
  }
`

export default GlobalStyle;