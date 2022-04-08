import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";

interface props extends JwtPayload {
  _id: string;
}

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.cookies["access-token"];
  if (!accessToken) return res.status(401).json({ error: "User not authenticated" });

  try {
    const validToken = jwt.verify(accessToken, "jwtsecret");
    req.user = validToken;
    next();
  } catch (error) {
    res.status(401).json(error);
  }
};
