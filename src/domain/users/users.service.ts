import { BadRequestException, Injectable } from "@nestjs/common";
import { AuthService } from "../auth/auth.service";
import { CreateUserDto } from "./dto/createUser.dto";
import { UserRepository } from "./users.repository";

@Injectable()
export class UsersService {
	constructor(
		private readonly userRepository: UserRepository,
		private readonly authService: AuthService
	) {}
	async createUser(createuserDto: CreateUserDto) {
		const findUser = await this.userRepository.findUser(
			createuserDto.user_id
		);

		if (findUser) {
			throw new BadRequestException();
		}
		const user = await this.userRepository.createUser(createuserDto);
		console.log(await this.authService.makeToken(user));
		return await this.authService.makeToken(user);
	}
}
