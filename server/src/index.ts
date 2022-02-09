import dotenv from "dotenv";
import { connect } from "mongoose";
import express from "express";
import cors from "cors";

// Routes
import usersRouter from "./routes/users.routes";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes - Dashboard
app.use("/dashboard", usersRouter);

// Credentials
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

connect(
  `mongodb+srv://${dbUser}:${dbPass}@cluster0.uneus.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Servidor iniciado! 🚀");
    });
  })
  .catch((err) => {
    console.log(`Erro: ${err}`);
  });
