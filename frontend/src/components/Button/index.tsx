import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./style";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...rest }: ButtonProps) {
  return <Container {...rest}>{children}</Container>;
}
