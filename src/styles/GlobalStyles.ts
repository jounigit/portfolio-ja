import { createGlobalStyle } from 'styled-components'
import {
  DESKTOP, LAPTOP, MOBILE, TABLET,
} from './theme/breakpoints'
import bgImage from '../assets/taustakuva-01.jpg'
import { colors } from './theme'

interface Prop {
  bgImage?: false | true | undefined,
  homePage?: false | true | undefined,
  bgColor?: string | undefined,
  adminPage?: false | true | undefined,
}

const GlobalStyles = createGlobalStyle<Prop>`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: Nunito, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      -webkit-font-smoothing: antialiased;
    font-size: clamp(16px, 2vw, 20px);
    /* vars */
    --bg-white: rgb(255,255,255,0.8);
    --bg-primary: rgb(255,255,255,0.7);
    --bg-secondary: rgb(255,255,255,0.6);
    --shadow-primary: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    --gray-1: ${colors.grey1};
    --gray-2: ${colors.grey2};
    --gray-3: ${colors.grey3};
    --gray-4: ${colors.grey4};
    --gray-5: ${colors.grey5};
  }

  html  {
    overflow-y: auto;
    overflow-x: auto;
  }

  html, body, #root {
    width: 100%;
    min-height: 100vh;
  }

  #root, body {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    background-image: url(${(props) => (!props.adminPage && bgImage)});
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;  
    background-size: cover;
  }

  .headerMiddle {
    font-size: 1.75rem;
    font-weight: 700;
    color: ${colors.white};
    text-align: center;
    padding: 1.2em 0 0.8em;
  }

  h1 {
    font-size: 2.75rem;
    color: ${colors.grey4};
  }

  h2 {
    font-size: 1.6rem;
    color: ${colors.grey4};
    /* font-size: clamp(1.75rem, 2vw, 2.7rem); */
  }

  h3 {
    font-size: 1.15rem;
    color: ${colors.grey4};
  }

  h4 {
    font-size: 1rem;
    color: ${colors.grey4};
  }

  h5 {
    font-size: .9rem;
    color: ${colors.grey4};
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
