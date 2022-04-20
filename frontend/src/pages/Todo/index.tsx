import React, { FormEvent, KeyboardEvent, useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";
import { BsPen } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import { Container, Content, Header, TodoList } from "./style";
import { api } from "../../services/api";
import { AuthLoadingContext } from "../../context/authAndLoading";

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
  const { getData } = useContext(AuthLoadingContext);

  const getInfos = () => {
    getData()
      .then((res) => setUser(res))
      .catch();
  };

  const notify = () =>
    toast.error("Ocorreu um erro, tente novamente!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleSubmit: SubmitHandler = async (data, { reset }) => {
    if (!data.todo) return null;

    try {
      await api.post("/data/add", data, { withCredentials: true });
      getInfos();
    } catch (error) {
      return toast.error("Ocorreu um erro no servidor, tente novamente!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
      notify();
    }
  };

  const updateTodo = async (e: KeyboardEvent) => {
    const span = e.target as HTMLElement;
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        await api.put(
          "data/update",
          { todoId: span.id, newTodo: span.innerText },
          { withCredentials: true }
        );
        span.removeAttribute("contenteditable");
        span.classList.remove("updatingTodo");
      } catch (error) {
        notify();
      }
    }
  };

  const findSpanElement = (e: HTMLElement) => {
    if (!e.children[0]) {
      return e.parentElement?.parentElement?.parentElement?.previousSibling;
    }
    if (!e.children[0].children[0]) {
      return e.parentElement?.parentElement?.previousSibling;
    }
    return e?.parentElement?.previousSibling;
  };

  const handleEditClick = (e: FormEvent) => {
    const span = findSpanElement(e.target as HTMLElement) as HTMLElement;
    span.setAttribute("contenteditable", "true");
    span.classList.add("updatingTodo");
    span.focus();
  };

  const removeTodo = async (e: FormEvent) => {
    const span = findSpanElement(e.target as HTMLElement) as HTMLElement;
    try {
      await api.delete("data/remove", { withCredentials: true, data: { id: span.id } });
      getInfos();
    } catch (error) {
      notify();
    }
  };

  useEffect(() => {
    getInfos();
  }, []);

  return (
    <Container>
      <ToastContainer />
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
        <TodoList>
          {user.todoList &&
            user.todoList.map((todo) => (
              <div id="todo" key={todo.id}>
                <span id={todo.id} role="textbox" tabIndex={0} onKeyDown={updateTodo}>
                  {todo.todo}
                </span>
                <div>
                  <button type="button" onClick={handleEditClick}>
                    <FaRegEdit size="20px" />
                  </button>
                  <button type="button" onClick={removeTodo}>
                    <ImBin size="20px" />
                  </button>
                </div>
              </div>
            ))}
        </TodoList>
      </Content>
    </Container>
  );
}

export default Todo;
