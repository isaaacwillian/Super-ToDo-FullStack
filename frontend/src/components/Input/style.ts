import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background-color: ${(props) => props.theme.colors.inputBackground};
  height: 35px;
  border: none;
  border-radius: 8px;
  transition: all 0.5s;

  input {
    height: 100%;
    border: none;
    color: ${(props) => props.theme.colors.text};
    background-color: transparent;

    ::placeholder {
      color: ${(props) => props.theme.colors.inputPlaceholder};
    }
  }

  svg {
    color: ${(props) => props.theme.colors.inputPlaceholder};
  }
`;
