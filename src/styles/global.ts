import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${theme.font.family.inter};
  }

  [draggable=true] {
    cursor: move;
  }

  html {
    font-size: 62.5%; // 1.6rem === 16px
  }


  input[type="submit"], button {
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  //** SCROLLBAR CONFIG */
  
  ::-webkit-scrollbar {
    width: 0.8rem;
    background-color: #f8f8f8;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 0.4rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #999;
  }

  ::-webkit-scrollbar-track {
    background-color: #f8f8f8;
  }
`;
