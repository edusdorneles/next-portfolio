import { Router } from "express";
import { Request, Response } from "express";
import { compare, genSalt, hash } from "bcrypt";
import { sign } from "jsonwebtoken";

// Models
import User from "../models/User";

// Middlewares
import checkToken from "../middlewares/checkToken";
import requestLimiter from "../middlewares/requestLimiter";

const usersRouter = Router();

// Public - Login
usersRouter.post(
  "/login",
  requestLimiter,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email) {
      return res.status(422).json({ message: "O email é obrigatório." });
    } else if (!password) {
      return res.status(422).json({ message: "A senha é obrigatória." });
    }

    const userExists = await User.findOne({ email: email });

    if (!userExists) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    const checkPassword = await compare(password, userExists.password);

    if (!checkPassword) {
      return res.status(422).json({ message: "Senha inválida." });
    }

    try {
      const secret: any = process.env.SECRET;
      const token = sign({ id: userExists._id }, secret);
      const userName = userExists.name;

      res.status(200).json({
        message: "Autenticação realizada com sucesso!",
        userName,
        token,
      });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Erro no servidor! Tente novamente mais tarde." });
    }
  }
);

// Private - Welcome
usersRouter.get("/", checkToken, async (req: Request, res: Response) => {
  return res.status(200).json({ message: "Bem-vindo!" });
});

// Private - List user
usersRouter.get("/users", checkToken, async (req: Request, res: Response) => {
  const users = await User.find().select("-password");

  if (!users) {
    return res.status(404).json({ message: "Nenhum usuário cadastrado." });
  }

  return res.status(200).json({ users });
});

// Private - Register user
usersRouter.post("/users/register", async (req: Request, res: Response) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!name) {
    return res.status(422).json({ message: "O nome é obrigatório." });
  } else if (!email) {
    return res.status(422).json({ message: "O email é obrigatório." });
  } else if (!password) {
    return res.status(422).json({ message: "A senha é obrigatória." });
  } else if (password !== confirmPassword) {
    return res.status(422).json({ message: "As senhas não conferem." });
  }

  if (!email.includes("@") || !email.includes(".com")) {
    return res.status(422).json({ message: "Insira um email válido." });
  }

  const userExists = await User.findOne({ email: email });

  if (userExists) {
    return res.status(422).json({ message: "Email já existente." });
  }

  const salt = await genSalt(12);
  const passwordHash = await hash(password, salt);

  const user = new User({
    name,
    email,
    password: passwordHash,
  });

  try {
    await user.save();
    res.status(201).json({ message: "Usuário cadastrado com sucesso." });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Erro no servidor! Tente novamente mais tarde." });
  }
});

// Private - Delete user
usersRouter.delete(
  "/users/delete/:id",
  checkToken,
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.status(404).json({ message: "Usuário não identificado." });
    }

    const deleteUser = await User.deleteOne({ _id: id });

    if (!deleteUser) {
      return res.status(400).json({ message: "Erro na deleção do usuário." });
    }

    return res.status(201).json({ message: "Usuário deletado com sucesso." });
  }
);

// Private - Update user
usersRouter.put(
  "/users/update/:id",
  checkToken,
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.status(404).json({ message: "Usuário não identificado." });
    }

    if (!name || !email) {
      return res
        .status(422)
        .json({ message: "Preencha todas as informacões." });
    }

    if (!email.includes("@") || !email.includes(".com")) {
      return res.status(422).json({ message: "Insira um email válido." });
    }

    const updateUser = await User.updateOne(
      { _id: id },
      { $set: { name: name, email: email } }
    );

    if (!updateUser) {
      return res.status(400).json({ message: "Erro na edição do usuário." });
    }

    res.status(200).json({ message: "Usuário editado com sucesso." });
  }
);

export default usersRouter;
