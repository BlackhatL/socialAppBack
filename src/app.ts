import express from "express";
import morgan from "morgan";
import cors from "cors";
import { errorMiddleware } from "./shared/middlewares/errorModdleware";
import { userRoutes } from "./modules/user/routes/userRoutes";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.configureMiddlewares();
    this.configureRoutes();
    this.configureErrorHandling();
  }

  private configureMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));

    const corsOptions: cors.CorsOptions = {
      origin: "http://localhost:5173",
      optionsSuccessStatus: 200,
    };

    this.app.use(cors(corsOptions));
  }

  private configureRoutes() {
    this.app.use("/users", userRoutes);
  }

  private configureErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

export default new App().app;
