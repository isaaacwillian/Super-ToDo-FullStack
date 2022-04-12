import React from "react";
import { FormHandles, SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";
import { BsPen } from "react-icons/bs";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Line from "../../components/Line";
import Logo from "../../components/Logo";
import { Container, Content, Header } from "./style";

function Todo() {
  const handleSubmit: SubmitHandler = (data, { reset }) => {
    if (!data.todo) return console.log("oi");
    console.log(data);
    reset();
    return null;
  };
  return (
    <Container>
      <Header>
        <Logo />
        <p>Lista de tarefas de Isaac</p>
        <Button type="button">Logout</Button>
      </Header>
      <Line />
      <Content>
        <Form onSubmit={handleSubmit}>
          <Input name="todo" Icon={BsPen} />
          <Button>Adicionar</Button>
        </Form>
      </Content>
    </Container>
  );
}

export default Todo;
