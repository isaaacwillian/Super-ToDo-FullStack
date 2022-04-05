import Joi from "joi";

export const registerValidate = (data: object) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().min(7).max(100),
    password: Joi.string().required().min(6).max(200),
  });

  return schema.validate(data);
};

export const loginValidate = (data: object) => {
  const schema = Joi.object({
    email: Joi.string().email().min(7).max(100),
    password: Joi.string().required().min(6).max(200),
  });

  return schema.validate(data);
};
