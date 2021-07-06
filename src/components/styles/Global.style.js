import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Tourney:ital,wght@0,100;0,200;1,100&display=swap');
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Tourney', sans-serif;
    }

`;

export default GlobalStyle;
