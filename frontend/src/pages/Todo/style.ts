import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.div`
  box-shadow: 0px 0px 10px black;
  position: sticky;
  #header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10%;
    padding: 15px 60px;
    button {
      width: 70px;
      &:hover {
        transform: translateY(0);
        border-color: ${(props) => props.theme.colors.background};
        background-color: ${(props) => lighten(0.2, props.theme.colors.primary)};
      }
    }
    p {
      font-size: 32px;
    }
    #logo {
      width: 50px;
      p {
        font-size: 16px;
      }
    }
  }
`;

export const Content = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  form {
    display: flex;
    width: 900px;
    input {
      width: 750px;
    }
    button {
      width: 100px;
      margin-left: 10px;
    }
  }
`;
