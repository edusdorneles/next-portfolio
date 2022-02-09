import { Router } from "express";

// Routes
import usersRouter from "./users.routes";

const router = Router();

router.use("/dashboard", usersRouter);

export default router;
