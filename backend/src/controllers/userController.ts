import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { loginValidate, registerValidate } from "./validate";
import User from "../models/User";

export const register = async (req: Request, res: Response) => {
  const { error } = registerValidate(req.body);
  if (error) return res.status(400).send(error.message);
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });

    await user.save();
    return res.send(user);
  } catch (err) {
    return res.status(400).json({ error: "User already exists" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { error } = loginValidate(req.body);
  if (error) return res.status(400).send(error.message);

  const selectedUser = await User.findOne({ email: req.body.email }).select("+password");
  if (!selectedUser) return res.status(400).send("Email or password is incorrect");

  const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectedUser.password);
  if (!passwordAndUserMatch) return res.status(400).send("Email or password is incorrect");

  const accessToken = jwt.sign({ _id: selectedUser._id }, "jwtsecret", {
    expiresIn: "1d",
  });

  res.cookie("access-token", accessToken, {
    maxAge: 60 * 60 * 24 * 1000,
    httpOnly: true,
  });
  return res.send("User Logged");
};

export const logout = async (req: Request, res: Response) => {
  res.clearCookie("access-token");
  return res.send("User Logged out").end();
};
