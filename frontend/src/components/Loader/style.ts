import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  #logo {
    img {
      width: calc(15vh + 6vw);
    }
    p {
      font-size: calc(3vw + 32px);
    }
  }
`;
