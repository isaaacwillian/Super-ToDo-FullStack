import React, { useRef } from "react";
import { Form } from "@unform/web";
import { FormHandles, SubmitHandler } from "@unform/core";
import { Container, Background, Content } from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import icon from "../../assets/todo-icon.svg";

function Login() {
  const formRef = useRef<FormHandles>(null);

  const handleFormSubmit: SubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Content>
        <div>
          <div className="line" />

          <img src={icon} alt="icon" />
          <div id="todo">
            <p>Super </p>
            <p>To-Do</p>
          </div>

          <div className="line" />
        </div>
        <h1>Faça seu login</h1>
        <Form ref={formRef} onSubmit={handleFormSubmit}>
          <Input name="email" type="email" placeholder="E-mail" />
          <Input name="password" type="password" placeholder="Senha" />
          <Button type="submit">Click</Button>
        </Form>
        <a href="#oi">Esqueci a senha</a>
        <a id="conta" href="#a">
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
}

export default Login;
