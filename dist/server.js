"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const userController_1 = require("./modules/user/controllers/userController");
const port = 3000;
const userController = new userController_1.UserController();
const appVersion = "0.0.1";
const environment = "development";
// TODO: LA RUTA / DEBERIA SER UNA PAGINA DE INICIO O ALGO ASI
app_1.default.get("/", (req, res) => {
    res.send("Hello, this is Express + TypeScript");
});
// Ruta para obtener todos los usuarios
app_1.default.get("/users", userController.getAllUsers);
// Escucha el servidor en el puerto especificado
app_1.default.listen(port, () => {
    console.log(`[Server]: App version: ${appVersion}`);
    console.log(`[Server]: App is running at http://localhost:${port}`);
    console.log(`[Server]: Environment: ${environment}`);
});
