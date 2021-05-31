import { createGlobalStyle } from "styled-components";

const Theme = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    background-color: #000;
  }

  a {
    text-decoration: none;
  }

  .container {
    width: 100%;
    max-width: 1200px
  }

  .active {
      opacity: 1;
  }
`;

export default Theme;
