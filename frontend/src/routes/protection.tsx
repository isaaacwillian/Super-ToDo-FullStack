import React from "react";
import { Navigate } from "react-router-dom";

interface Props {
  component: JSX.Element;
}

export function ProtectedRoute({ component: Component }: Props) {
  const auth = true;
  return auth ? Component : <Navigate to="/login" />;
}

export function ProtectedCredentials({ component: Component }: Props) {
  const auth = false;
  return !auth ? Component : <Navigate to="/" />;
}
