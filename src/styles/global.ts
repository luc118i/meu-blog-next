import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color:rgb(66, 66, 66);
    padding: 20px;
  }

  h1, h2, h3 {
    font-family: 'Roboto', sans-serif;
  }

  p {
    margin: 10px 0;
  }
`;
