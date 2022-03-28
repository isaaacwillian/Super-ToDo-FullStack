import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 100px;
    filter: ${(props) =>
      props.theme.title === "dark"
        ? "invert(100%) sepia(20%) saturate(0%) hue-rotate(243deg) brightness(107%) contrast(106%)"
        : null};
  }
  div {
    display: flex;
    flex-direction: column;
    p {
      font-family: "Michroma", sans-serif;
      font-size: 36px;
      color: ${(props) => props.theme.colors.text};
    }
  }
`;
