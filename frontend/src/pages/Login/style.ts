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
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  #conta {
    position: absolute;
    bottom: 100px;
  }
  div {
    display: flex;
    align-items: center;
    #todo {
      display: flex;
      flex-direction: column;
    }
    .line {
      width: 30vw;
      height: 2px;
      background-color: black;
    }
    img {
      width: 100px;
    }
    p {
      font-family: "Michroma", sans-serif;
      font-size: 36px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  min-width: 500px;
  background: url(${todoIcon}) no-repeat center;
  background-size: cover;
`;
