import React from "react";
import { Route, Routes as Router } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Todo from "../pages/Todo";
import { ProtectedCredentials, ProtectedRoute } from "./protection";
import { AuthProvider } from "../context/authAndLoading";

export default function Routes() {
  return (
    <AuthProvider>
      <Router>
        <Route path="/" element={<ProtectedRoute component={<Todo />} />} />
        <Route path="login" element={<ProtectedCredentials component={<Login />} />} />
        <Route path="register" element={<ProtectedCredentials component={<Register />} />} />
      </Router>
    </AuthProvider>
  );
}
