import User from "../models/User";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import { loginValidate, registerValidate } from "./validate";

const userController = {
  register: (req: Request, res: Response) => {
    const { error } = registerValidate(req.body);
    if (error) return res.status(400).send(error.message);

    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });

    user
      .save()
      .then(() => {
        res.send(user);
      })
      .catch((err: Error) => {
        res.status(400).send(err);
      });
  },

  login: async (req: Request, res: Response) => {
    const { error } = loginValidate(req.body);
    if (error) return res.status(400).send(error.message);

    const selectedUser = await User.findOne({
      email: req.body.email,
    });
    if (!selectedUser) return res.status(400).send("Email or password is incorrect");

    res.send("User Logged");
  },
};

export default userController;
