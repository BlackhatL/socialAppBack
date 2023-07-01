import { Request, Response } from "express";
import { UserService } from "../services/userService";
import { User } from "../../../shared/models/userModel";

class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public getAllUsers = async (req: Request, res: Response) => {
    const users = await this.userService.getAllUsers();

    res.status(200).json(users);
  };

  public getUserById(req: Request, res: Response): void {
    const userId = req.params.id;
    const user = this.userService.getUserById(userId);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json(user);
  }

  public createUser(req: Request, res: Response): void {
    const userData: User = req.body;

    const createdUser = this.userService.createUser(userData);

    res.status(201).json(createdUser);
  }

  public updateUser(req: Request, res: Response): void {
    const userId = req.params.id;
    const updatedData: User = req.body;

    const updatedUser = this.userService.updateUser(userId, updatedData);

    if (!updatedUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json(updatedUser);
  }

  public deleteUser(req: Request, res: Response): void {
    const userId = req.params.id;

    const deletionResult = this.userService.deleteUser(userId);

    if (!deletionResult) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({ message: "User deleted successfully" });
  }
}

export { UserController };
