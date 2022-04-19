import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 35px;
  border-radius: 10px;
  border: 0;
  margin-top: 3px;
  transition: 0.2s;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.background};
  &:hover {
    transform: translateY(-3px);
    border-color: ${(props) => props.theme.colors.primary};
  }
  &:active {
    transform: translateY(-1px);
  }
`;
