import React, { InputHTMLAttributes, useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { IconBaseProps } from "react-icons";
import { Container } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  Icon: React.ComponentType<IconBaseProps>;
}

export default function Input({ name, Icon, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Icon size={17} />
      <input name={name} ref={inputRef} {...rest} />
    </Container>
  );
}
