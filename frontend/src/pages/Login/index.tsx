import React, { useRef } from "react";
import { Form } from "@unform/web";
import { FormHandles, SubmitHandler } from "@unform/core";
import { FiMail, FiLock, FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Container, Background, Content } from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Line from "../../components/Line";
import Logo from "../../components/Logo";
import getValidationsErrors from "../../utils/getValidationErrors";

function Login() {
  const formRef = useRef<FormHandles>(null);

  const handleFormSubmit: SubmitHandler = async (data, { reset }) => {
    try {
      const schema = yup.object().shape({
        email: yup
          .string()
          .email("Digite um email válido")
          .required("Email é obrigatório"),
        password: yup.string().min(6, "Senha mínimo 6 caracteres"),
      });

      await schema.validate(data, { abortEarly: false });

      formRef.current?.setErrors({});

      console.log(data);
      reset();
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errors = getValidationsErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
  };

  return (
    <Container>
      <Content>
        <Line>
          <Logo />
        </Line>
        <Form ref={formRef} onSubmit={handleFormSubmit}>
          <h1>Faça seu login</h1>
          <Input name="email" placeholder="E-mail" Icon={FiMail} />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            Icon={FiLock}
          />
          <Button type="submit">Entrar</Button>
        </Form>
        <Link to="/register">
          <FiLogIn />
          Criar conta
        </Link>
      </Content>
      <Background />
    </Container>
  );
}

export default Login;
