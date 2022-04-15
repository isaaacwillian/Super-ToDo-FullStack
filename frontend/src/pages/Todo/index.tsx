import React, { useEffect } from "react";
import { SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";
import { BsPen } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Line from "../../components/Line";
import Logo from "../../components/Logo";
import { Container, Content, Header } from "./style";
import { api } from "../../services/api";

function Todo() {
  const handleSubmit: SubmitHandler = (data, { reset }) => {
    if (!data.todo) return null;
    reset();
    return null;
  };

  useEffect(() => {
    api
      .get("/data/get")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container>
      <Header>
        <div id="header">
          <Logo />
          <p>Lista de tarefas de Isaac</p>
          <Button type="button">
            <Link to="/login">Logout</Link>
          </Button>
        </div>
        <Line />
      </Header>
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
