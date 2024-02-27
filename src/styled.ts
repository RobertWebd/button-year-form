import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
   box-sizing: border-box;
   padding: 0;
   margin: 0;
   outline: none;
   border: none;
   list-style: none;
   text-decoration: none;
}

html {
  height: 100%;
}

#root {
  display: flex;
  height: 100%;
}

body {
  height: 100%;
  background-color: rgb(21, 23, 26);
  color: rgb(170, 170, 170);
}

`;
