import styled from "styled-components";

interface testProps {
  hasError: boolean;
  isFocused: boolean;
}

export const Container = styled.div<testProps>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background-color: ${(props) => props.theme.colors.inputBackground};
  height: 35px;
  border: ${(props) => {
    if (props.isFocused) {
      return "2px solid #fcad00";
    }
    if (props.hasError) {
      return "2px solid #fc5454";
    }
    return null;
  }};

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
    transition: all 0.5s;
    color: ${(props) =>
      props.isFocused ? "#fcad00" : props.theme.colors.inputPlaceholder};
  }
`;
