import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const checkToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if(!token) {
    return res.status(401).json({ message: "Acesso negado." });
  }

  try {
    const secret: any = process.env.SECRET;

    jwt.verify(token, secret);

    next();
  } catch (err) {
    return res.status(400).json({ message: "Token inválido." });
  }
}

export default checkToken;