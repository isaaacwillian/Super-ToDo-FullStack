import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

interface Props {
  component: JSX.Element;
}

export function ProtectedRoute({ component: Component }: Props) {
  const { auth } = useContext(AuthContext);
  return auth ? Component : <Navigate to="/login" />;
}

export function ProtectedCredentials({ component: Component }: Props) {
  const { auth } = useContext(AuthContext);
  return !auth ? Component : <Navigate to="/" />;
}
