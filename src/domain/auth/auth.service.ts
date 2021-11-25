import { BadRequestException, Injectable } from "@nestjs/common";
import { UserRepository } from "../users/users.repository";
import * as bcrypt from "bcrypt";
import { Users } from "../entities/users.entity";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
	constructor(
		private readonly userRepository: UserRepository,
		private readonly jwtService: JwtService
	) {}

	async validateUser(user_id: string, user_pw: string): Promise<any> {
		const user = await this.userRepository.findUser(user_id);

		if (!user || (user && !(await bcrypt.compare(user_pw, user.user_pw)))) {
			return new BadRequestException();
		}
		return user;
	}

	async makeToken(user: Users) {
		const payload = { user_id: user.user_id, user_name: user.user_name };
		return { access_token: this.jwtService.sign(payload) };
	}
}
