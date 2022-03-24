import styled from "styled-components";
import todoIcon from "../../assets/todo-login.jpg";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: white;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  width: 70%;
  min-width: 500px;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
  }
`;

export const Background = styled.div`
  flex: 1;
  min-width: 500px;
  background: url(${todoIcon}) no-repeat center;
  background-size: cover;
`;
