import styled from "styled-components";

export const Container = styled.button`
  width: 230px;
  height: 35px;
  border-radius: 10px;
  border: none;
  transition: all 0.5s;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
`;
