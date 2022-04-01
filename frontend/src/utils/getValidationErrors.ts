import { ValidationError } from "yup";

interface Errors {
  [key: string]: string;
}

export default function getValidationsErrors(errors: ValidationError) {
  const errorMessages: Errors = {};

  errors.inner.forEach((error) => {
    if (error.path) errorMessages[error.path] = error.message;
  });

  return errorMessages;
}
