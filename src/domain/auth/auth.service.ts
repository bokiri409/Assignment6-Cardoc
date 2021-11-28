import { BadRequestException, Injectable } from "@nestjs/common";
import { UserRepository } from "../users/users.repository";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
	constructor(
		private readonly userRepository: UserRepository,
		private readonly jwtService: JwtService
	) {}

	async validateUser(userId: string, password: string): Promise<any> {
		const user = await this.userRepository.findUser(userId);

		if (
			!user ||
			(user && !(await bcrypt.compare(password, user.password)))
		) {
			return new BadRequestException();
		}
		return user;
	}

	async makeToken(user: any) {
		const payload = { userId: user.userId, userName: user.userName };
		return { access_token: this.jwtService.sign(payload) };
	}
}
