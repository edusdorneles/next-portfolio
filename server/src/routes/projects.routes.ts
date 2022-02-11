import { Router, Request, Response } from "express";

// Models
import Project from "../models/Project";

// Middlewares
import checkToken from "../middlewares/checkToken";

const projectsRouter = Router();

// Private - List projects
projectsRouter.get(
  "/projects",
  checkToken,
  async (req: Request, res: Response) => {
    const projects = await Project.find();

    if (!projects) {
      return res.status(404).json({ message: "Nenhum projeto cadastrado." });
    }

    return res.status(200).json({ projects });
  }
);
