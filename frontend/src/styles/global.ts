import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
    transition: all 0.5s;
  }
  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 14px;
  }
  button{
    cursor: pointer;
  }
`;
