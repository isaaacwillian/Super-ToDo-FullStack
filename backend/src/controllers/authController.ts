import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import User from "../models/User";

export const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.cookies["access-token"];
  if (!accessToken) return res.status(401).json({ error: "User not authenticated" });

  try {
    const validToken = jwt.verify(accessToken, "jwtsecret");
    req.user = validToken;
    const user = await User.findOne({ _id: req.user._id });
    if (!user) return res.status(404).json({ error: "Not found user" });
    next();
  } catch (error) {
    return res.status(401).json(error);
  }

  return null;
};
