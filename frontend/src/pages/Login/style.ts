import styled from "styled-components";
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
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  h1 {
    text-align: center;
    margin-bottom: 16px;
    color: ${(props) => props.theme.colors.text};
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    transition: all 0.5s;

    svg {
      margin-right: 10px;
    }

    &:hover {
      color: #4c3636a4;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  min-width: 600px;
  background: url(${todoIcon}) no-repeat center;
  background-size: cover;
`;
