import styled, { keyframes } from "styled-components";
import { lighten, shade } from "polished";

export const Container = styled.div``;

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Header = styled.div`
  box-shadow: 0px 0px 10px black;
  position: sticky;
  animation: ${appearFromTop} 1.5s;
  #header {
    width: 100%;
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
const showOpacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Content = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${showOpacity} 3s;
  width: 100%;

  form {
    display: flex;
    width: 80%;
    max-width: 900px;
    display: flex;
    align-items: center;
    input {
      width: 93%;
    }
    button {
      width: 10%;
      min-width: 90px;
      margin-left: 10px;
    }
  }
`;

export const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  max-width: 900px;
  width: 80%;

  #todo {
    display: flex;
    position: relative;
    margin-bottom: 5px;

    span {
      justify-content: space-between;
      color: ${(props) => props.theme.colors.text};
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      background-color: ${(props) => props.theme.colors.secondary};
      word-wrap: break-word;
      padding-right: 100px;
      transition: all 0.2s;
    }
    .updatingTodo {
      border: 2px solid #fcad00;
      background-color: ${(props) =>
        props.theme.title === "light"
          ? shade(0.1, props.theme.colors.background)
          : lighten(0.1, props.theme.colors.background)};
      &:focus {
      }
    }
    div {
      position: absolute;
      height: 100%;
      width: 10%;
      right: 0;
      display: flex;
      button {
        margin-right: 10px;
        width: 100%;
        background-color: transparent;
        border: none;
        color: ${(props) => props.theme.colors.primary};
        transition: all 0.5s;
        &:hover {
          color: #fcad00;
        }
        &:active {
          transform: translateY(2px);
          color: ${shade(0.2, "#fcad00")};
        }
      }
    }
  }
`;
