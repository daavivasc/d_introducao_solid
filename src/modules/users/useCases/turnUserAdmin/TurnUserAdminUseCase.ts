import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const checkUser = this.usersRepository.findById(user_id);

    if (!checkUser) {
      throw new Error("Mensagem de erro");
    }

    const user = this.usersRepository.turnAdmin(checkUser);

    return user;
  }
}

export { TurnUserAdminUseCase };
