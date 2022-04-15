import React from "react";
import { Navigate } from "react-router-dom";

interface Props {
  component: JSX.Element;
}

function Private({ component: Component }: Props) {
  const auth = false;
  return auth ? Component : <Navigate to="/login" />;
}

export default Private;
