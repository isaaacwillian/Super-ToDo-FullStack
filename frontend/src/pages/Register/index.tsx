import React, { useRef } from "react";
import { Form } from "@unform/web";
import { FormHandles, SubmitHandler } from "@unform/core";
import { FiMail, FiLock, FiLogIn, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
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
      <Background />
      <Content>
        <Line>
          <Logo />
        </Line>
        <Form ref={formRef} onSubmit={handleFormSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input
            name="username"
            type="text"
            placeholder="Nome do usuário"
            Icon={FiUser}
            required
          />
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
          <Button type="submit">Registrar</Button>
        </Form>
        <Link to="/">
          <FiLogIn />
          Voltar ao login
        </Link>
      </Content>
    </Container>
  );
}

export default Login;
