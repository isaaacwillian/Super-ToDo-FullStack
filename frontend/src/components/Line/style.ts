import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  .line {
    width: 100%;
    height: 2.5px;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
