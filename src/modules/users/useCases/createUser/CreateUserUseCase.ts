import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const checkEmail = this.usersRepository.findByEmail(email);

    if (checkEmail) {
      throw new Error("Mensagem de erro");
    }

    const user = this.usersRepository.create({name, email});

    return user;
  }
}

export { CreateUserUseCase };
