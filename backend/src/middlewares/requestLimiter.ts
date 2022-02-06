import rateLimit from "express-rate-limit";
import { Request, Response } from "express";

const requestLimiter = rateLimit({
  windowMs: 3 * 60 * 1000,
  max: 3,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req: Request, res: Response) => {
    return res.status(429).json({
      message: "Muitas tentativas de login, tente novamente mais tarde.",
    });
  },
});

export default requestLimiter;
