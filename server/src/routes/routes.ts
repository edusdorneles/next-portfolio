import { Router } from "express";

// Routes
import usersRouter from "./users.routes";
import projectsRouter from "./projects.routes";

const router = Router();

router.use("/dashboard", usersRouter);
router.use("/dashboard", projectsRouter);

export default router;
