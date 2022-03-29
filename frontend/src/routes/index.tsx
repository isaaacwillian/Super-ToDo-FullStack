import React from "react";
import { Route, Routes as Router } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function Routes() {
  return (
    <Router>
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Router>
  );
}
