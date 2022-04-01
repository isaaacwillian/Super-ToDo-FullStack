import React from "react";
import { Container } from "./style";

interface Props {
  error: string;
  children: React.ReactNode;
}

export default function Tooltip({ children, error }: Props) {
  return (
    <Container>
      <span>{error}</span>
      {children}
    </Container>
  );
}
