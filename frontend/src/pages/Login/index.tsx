import React, { useRef } from "react";
import { Form } from "@unform/web";
import { FormHandles, SubmitHandler } from "@unform/core";
import { Container, Background, Content } from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";

function Login() {
  const formRef = useRef<FormHandles>(null);

  const handleFormSubmit: SubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleFormSubmit}>
          <Input name="email" type="email" placeholder="E-mail" />
          <Input name="password" type="password" placeholder="Senha" />
          <Button type="submit">Click</Button>
        </Form>
      </Content>
      <Background />
    </Container>
  );
}

export default Login;
