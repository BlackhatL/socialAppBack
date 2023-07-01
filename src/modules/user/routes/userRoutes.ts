import express, { Router } from "express";
import { UserController } from "../controllers/userController";

const router: Router = express.Router();
const userController = new UserController();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export { router as userRoutes };