import { Request, Response } from "express";
import app from "./app";
import { UserController } from "./modules/user/controllers/userController";

const port = 3000;
const userController = new UserController();
const appVersion = "0.0.1";
const environment = "development";

// TODO: LA RUTA / DEBERIA SER UNA PAGINA DE INICIO O ALGO ASI
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, this is Express + TypeScript");
});

// Ruta para obtener todos los usuarios
app.get("/users", userController.getAllUsers);

// Escucha el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`[Server]: App version: ${appVersion}`);
  console.log(`[Server]: App is running at http://localhost:${port}`);
  console.log(`[Server]: Environment: ${environment}`);
});
