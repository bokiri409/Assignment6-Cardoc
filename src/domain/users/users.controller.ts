import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "../auth/auth.service";
import { LocalAuthGuard } from "../auth/guard/localAuthGuard";
import { CreateUserDto } from "./dto/createUser.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
	constructor(
		private readonly usersService: UsersService,
		private readonly authService: AuthService
	) {}

	@Post("signup")
	async signUp(@Body() body: CreateUserDto) {
		return { token: await this.usersService.createUser(body) };
	}

	@UseGuards(LocalAuthGuard)
	@Post("signin")
	async signIn(@Request() req) {
		console.log(req.user);
		return { token: this.authService.makeToken(req.user) };
	}
}
