import React from "react";
import { Form } from "@unform/web";
import { Container, Background, Content } from "./style";

function Login() {
  return (
    <Container>
      <Content>
        <form action="">
          <input type="text" />
          <button type="submit">click</button>
        </form>
      </Content>
      <Background />
    </Container>
  );
}

export default Login;
