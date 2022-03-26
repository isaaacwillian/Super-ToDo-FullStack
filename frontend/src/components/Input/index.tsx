import React, { InputHTMLAttributes, useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { Container } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export default function Input({ name, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return <Container name={name} ref={inputRef} {...rest} />;
}
