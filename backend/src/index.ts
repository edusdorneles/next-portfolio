import dotenv from "dotenv";
import { connect } from "mongoose";
import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";

// Middlewares
import checkToken from "./middlewares/checkToken";
import requestLimiter from "./middlewares/requestLimiter";

// Models
import User from "./models/User";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Private - Welcome
app.get("/dashboard", checkToken, async (req: Request, res: Response) => {
  return res.status(200).json({ message: "Bem-vindo!" });
});

// Private - List user
app.get("/dashboard/users", checkToken, async (req: Request, res: Response) => {
  const users = await User.find().select("-password");

  if (!users) {
    return res.status(404).json({ message: "Nenhum usuário cadastrado." });
  }

  return res.status(200).json({ users });
});

// Private - Register user
app.post(
  "/dashboard/register",
  checkToken,
  async (req: Request, res: Response) => {
    const { name, email, password, confirmPassword } = req.body;

    // Validations
    if (!name) {
      return res.status(422).json({ message: "O nome é obrigatório." });
    } else if (!email) {
      return res.status(422).json({ message: "O email é obrigatório." });
    } else if (!password) {
      return res.status(422).json({ message: "A senha é obrigatória." });
    } else if (password !== confirmPassword) {
      return res.status(422).json({ message: "As senhas não conferem." });
    }

    // Check if user already exists
    const userExists = await User.findOne({ email: email });

    if (userExists) {
      return res.status(422).json({ message: "Email já existente." });
    }

    // Create password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    // Create user
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
  }
);

// Public - Login user
app.post(
  "/admin/login",
  requestLimiter,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // Validations
    if (!email) {
      return res.status(422).json({ message: "O email é obrigatório." });
    } else if (!password) {
      return res.status(422).json({ message: "A senha é obrigatória." });
    }

    // Check if user exists
    const userExists = await User.findOne({ email: email });

    if (!userExists) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    // Check if password match
    const checkPassword = await bcrypt.compare(password, userExists.password);

    if (!checkPassword) {
      return res.status(422).json({ message: "Senha inválida." });
    }

    try {
      const secret: any = process.env.SECRET;

      const token = jwt.sign(
        {
          id: userExists._id,
        },
        secret
      );

      res
        .status(200)
        .json({ message: "Autenticação realizada com sucesso!", token });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Erro no servidor! Tente novamente mais tarde." });
    }
  }
);

// Credentials
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

connect(
  `mongodb+srv://${dbUser}:${dbPass}@cluster0.uneus.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
)
  .then(() => {
    app.listen(3002, () => {
      console.log("Servidor iniciado! 🚀");
    });
  })
  .catch((err) => {
    console.log(`Erro: ${err}`);
  });
