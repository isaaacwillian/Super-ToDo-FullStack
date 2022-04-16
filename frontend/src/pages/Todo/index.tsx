import React, { useContext, useEffect, useState } from "react";
import { SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";
import { BsPen } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Line from "../../components/Line";
import Logo from "../../components/Logo";
import { Container, Content, Header } from "./style";
import { api } from "../../services/api";
import { AuthContext } from "../../context/authContext";

interface todoListProps {
  id: string;
  todo: string;
}
interface Props {
  username: string;
  todoList: todoListProps[];
}

function Todo() {
  const [user, setUser] = useState<Props>({} as Props);
  const navigate = useNavigate();
  const { getData } = useContext(AuthContext);

  const getInfos = () => {
    getData()
      .then((res) => setUser(res))
      .catch();
  };

  const handleSubmit: SubmitHandler = async (data, { reset }) => {
    if (!data.todo) return null;

    try {
      await api.post("/data/add", data, { withCredentials: true });
      getInfos();
    } catch (error) {
      console.log(error);
    }

    reset();
    return null;
  };

  const handleLogout = async () => {
    try {
      await api.post("/user/logout", {}, { withCredentials: true });
      await getData();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfos();
  }, []);

  return (
    <Container>
      <Header>
        <div id="header">
          <Logo />
          <p>Lista de tarefas de {user.username}</p>
          <Button type="button" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Header>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Input name="todo" Icon={BsPen} />
          <Button>Adicionar</Button>
        </Form>
        {user.todoList && user.todoList.map((todo) => <p key={todo.id}>{todo.todo}</p>)}
      </Content>
    </Container>
  );
}

export default Todo;
