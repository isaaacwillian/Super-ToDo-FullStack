import React from "react";
import { Container } from "./style";

interface Props {
  children: React.ReactNode;
}

export default function Line({ children }: Props) {
  return (
    <Container>
      <div className="line" />
      {children}
      <div className="line" />
    </Container>
  );
}
