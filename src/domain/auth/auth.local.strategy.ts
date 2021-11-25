import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { Users } from "../entities/users.entity";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, "local") {
	constructor(private readonly authService: AuthService) {
		super({
			usernameField: "user_id",
			passwordField: "user_pw"
		});
	}

	async validate(user_id: string, user_pw: string): Promise<Users> {
		const user = await this.authService.validateUser(user_id, user_pw);
		if (!user) {
			throw new UnauthorizedException();
		}
		return user;
	}
}
