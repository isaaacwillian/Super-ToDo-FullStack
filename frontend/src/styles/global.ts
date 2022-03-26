import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #E5E5E5;
    color: black;
    -webkit-font-smoothing: antialiased;
    transition: all 1s;
  }
  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 14px;
  }
  button{
    cursor: pointer;
  }
`;
