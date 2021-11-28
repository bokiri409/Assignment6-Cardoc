import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { Users } from "../entities/users.entity";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, "local") {
	constructor(private readonly authService: AuthService) {
		super({
			usernameField: "userId",
			passwordField: "password"
		});
	}

	async validate(userId: string, password: string): Promise<Users> {
		const user = await this.authService.validateUser(userId, password);
		if (!user) {
			throw new UnauthorizedException();
		}
		return user;
	}
}
