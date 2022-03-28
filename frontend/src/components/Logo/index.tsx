import React from "react";
import icon from "../../assets/todo-icon.svg";

import { Container } from "./style";

export default function Logo() {
  return (
    <Container id="logo">
      <img src={icon} alt="icon" />
      <div>
        <p>Super </p>
        <p>To-Do</p>
      </div>
    </Container>
  );
}
