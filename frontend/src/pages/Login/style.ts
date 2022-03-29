import styled from "styled-components";
import { shade, lighten } from "polished";
import todoIcon from "../../assets/todo-login.jpg";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 70%;
  min-width: 500px;
  justify-content: space-evenly;
  align-items: center;

  #logo {
    margin-right: 10px;
  }

  form {
    h1 {
      text-align: center;
      margin-bottom: 16px;
      color: ${(props) => props.theme.colors.text};
    }

    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    transition: all 0.5s;

    svg {
      margin-right: 10px;
    }

    &:hover {
      color: ${(props) =>
        props.theme.title === "light"
          ? lighten(0.3, props.theme.colors.primary)
          : shade(0.2, props.theme.colors.primary)};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  min-width: 600px;
  background: url(${todoIcon}) no-repeat center;
  background-size: cover;
`;
