import React from "react";
import { Route, Routes as Router } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Todo from "../pages/Todo";

export default function Routes() {
  return (
    <Router>
      <Route path="/" element={<Todo />} />
      <Route path="register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Router>
  );
}
