import { createGlobalStyle } from 'styled-components'
import {
  DESKTOP, LAPTOP, MOBILE, TABLET,
} from './theme/breakpoints'
import bgImage from '../assets/default_bg.jpg'

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    /* font-size: 16px; */
    font-size: clamp(16px, 2vw, 20px);
    /* vars */
    --bg-primary: rgb(255,255,255,0.7);
    --shadow-primary: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  html  {
    overflow-y: auto;
    overflow-x: auto;
    background-color: #ffffff;
    background-image: url(${bgImage});
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  
    background-size: cover;
    font-family: "Titillium Web", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      -webkit-font-smoothing: antialiased;

  }

  html, body, #root {
    height: 100%;
  }

  #root, body {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 2.75rem;
    color: #686868;
  }

  h2 {
    font-size: 1.6rem;
    color: #686868;
    /* font-size: clamp(1.75rem, 2vw, 2.7rem); */
  }

  h3 {
    font-size: 1.15rem;
  }

  .photos {
    /* Prevent vertical gaps */
    line-height: 0;

    -webkit-column-count: 5;
    -webkit-column-gap: 0px;
    -moz-column-count: 5;
    -moz-column-gap: 0px;
    column-count: 5;
    column-gap: 0px;
  }

  .photos img {
    /* Just in case there are inline attributes */
    width: 100% !important;
    height: auto !important;
  }
  
/* mobile */
  @media ${MOBILE} {
    h1 { 
      font-size: 2.5rem;
    }
  }

  @media ${TABLET} {
    /* * {
      font-size: 1.05rem;
    } */

    h1 { 
      font-size: 2.9rem;
    }
  }

  @media ${LAPTOP} {
    /* * {
      font-size: 1.1rem;
    } */
    h1 { 
      font-size: 3.4rem;
    }
  }

  @media  ${DESKTOP} {
    /* * {
      font-size: 1.15rem;
    } */
    h1 { 
      font-size: 3.7rem;
    }
  }

`

export default GlobalStyles

// font-family: "Titillium Web", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
// height: 100vh;
// width: 50vw;
// margin: 0 auto;
// background-color: white;
// display: flex;
// justify-content: center;
// align-items: center;
