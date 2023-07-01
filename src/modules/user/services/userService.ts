import { User } from "../../../shared/models/userModel";
import { UserRepository } from "../repositories/userRepository";

class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public getAllUsers(): User[] {
    //Lógica para obtener todos los usuarios utilizando el UserRepository
    return this.userRepository.getAllUsers();
  }

  public getUserById(id: string): User | undefined {
    //Lógica para obtener un usuario por su ID utilizando el UserRepository
    return this.userRepository.getUserById(id);
  }

  public createUser(user: User): User {
    //Lógica para crear un nuevo usuario utilizando el UserRepository
    return this.userRepository.createUser(user);
  }

  public updateUser(id: string, updates: Partial<User>): User | undefined {
    //Lógica para actualizar un usuario existente utilizando el UserRepository
    return this.userRepository.updateUser(id, updates);
  }

  public deleteUser(id: string): boolean {
    //Lógica para eliminar un usuario utilizando el UserRepository
    return this.userRepository.deleteUser(id);
  }
}

export { UserService };
