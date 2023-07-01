import { User } from "../../../shared/models/userModel";

class UserRepository {
  private users: User[]; // Simulación de una base de datos de usuarios

  constructor() {
    this.users = [
      {
        id: "1",
        name: "John Doe",
        email: "johndoe@correo.test",
        password: "123456",
        profilePictureUrl: "https://picsum.photos/200",
      },
      {
        id: "2",
        name: "Jane Doe",
        email: "janedoe@correo.test",
        password: "123456",
        profilePictureUrl: "https://picsum.photos/200",
      },
    ];
  }

  public getAllUsers(): User[] {
    return this.users;
  }

  public getUserById(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  public createUser(user: User): User {
    this.users.push(user);
    return user;
  }

  public updateUser(id: string, updates: Partial<User>): User | undefined {
    const user = this.users.find((user) => user.id === id);

    if (user) {
      Object.assign(user, updates);
      return user;
    }

    return undefined;
  }

  public deleteUser(id: string): boolean {
    const index = this.users.findIndex((user) => user.id === id);

    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    }

    return false;
  }
}

export { UserRepository };
