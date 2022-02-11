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

// Private - Register project
projectsRouter.post(
  "/projects/register",
  checkToken,
  async (req: Request, res: Response) => {
    const { title, description, image, initialDate, techs, github, preview } =
      req.body;

    if (!title) {
      return res.status(422).json({ message: "O titulo é obrigatório." });
    } else if (!description) {
      return res.status(422).json({ message: "A descrição é obrigatória." });
    } else if (!image) {
      return res.status(422).json({ message: "A imagem é obrigatória." });
    } else if (!initialDate) {
      return res.status(422).json({ message: "A data inicial é obrigatória." });
    } else if (!techs) {
      return res
        .status(422)
        .json({ message: "As tecnologias são obrigatórias." });
    } else if (!github) {
      return res
        .status(422)
        .json({ message: "O link para o GitHub é obrigatório." });
    } else if (!preview) {
      return res
        .status(422)
        .json({ message: "O link para preview é obrigatório." });
    }

    const projectExists = await Project.findOne({ title: title });

    if (projectExists) {
      return res.status(422).json({ message: "Projeto já existente." });
    }

    const project = new Project({
      title,
      description,
      image,
      initialDate,
      techs,
      github,
      preview,
    });

    try {
      await project.save();
      res.status(201).json({ message: "Projeto cadastrado com sucesso." });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Erro no servidor! Tente novamente mais tarde." });
    }
  }
);

export default projectsRouter;
