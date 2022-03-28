import React, { useRef } from "react";
import { Form } from "@unform/web";
import { FormHandles, SubmitHandler } from "@unform/core";
import { FiMail, FiLock, FiLogIn } from "react-icons/fi";
import { Container, Background, Content } from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Line from "../../components/Line";
import Logo from "../../components/Logo";

function Login() {
  const formRef = useRef<FormHandles>(null);

  const handleFormSubmit: SubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Content>
        <Line>
          <Logo />
        </Line>
        <Form ref={formRef} onSubmit={handleFormSubmit}>
          <h1>Faça seu login</h1>
          <Input
            name="email"
            type="email"
            placeholder="E-mail"
            Icon={FiMail}
            required
          />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            Icon={FiLock}
            required
          />
          <Button type="submit">Click</Button>
        </Form>
        <a href="#a">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
}

export default Login;
