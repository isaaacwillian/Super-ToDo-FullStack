import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./style";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ type, children }: ButtonProps) {
  return <Container type={type}>{children}</Container>;
}
