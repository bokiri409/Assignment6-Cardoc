import { EntityRepository, Repository } from "typeorm";
import { Users } from "../entities/users.entity";
import { CreateUserDto } from "./dto/createUser.dto";
import * as bcrypt from "bcrypt";

@EntityRepository(Users)
export class UserRepository extends Repository<Users> {
	async findUser(userId: string) {
		return await this.findOne({ userId });
	}

	async createUser(createUserDto: CreateUserDto) {
		const newUser = new Users();
		newUser.userId = createUserDto.userId;
		newUser.password = await bcrypt.hash(createUserDto.password, 10);
		newUser.userName = createUserDto.userName;

		return await this.save(newUser);
	}
}
