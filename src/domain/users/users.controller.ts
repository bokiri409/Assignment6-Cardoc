import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { AuthService } from "../auth/auth.service";
import { LocalAuthGuard } from "../auth/guard/localAuthGuard";
import { CreateUserDto } from "./dto/createUser.dto";
import { SignInUserDto } from "./dto/signInUser.dto";
import { UsersService } from "./users.service";

@ApiTags("유저 API")
@Controller("users")
export class UsersController {
	constructor(
		private readonly usersService: UsersService,
		private readonly authService: AuthService
	) {}

	@Post("signup")
	@ApiOperation({
		summary: "회원가입 API",
		description: "userId, password, userName을 이용하여 회원가입 한다."
	})
	async signUp(@Body() body: CreateUserDto) {
		return await this.usersService.createUser(body);
	}

	@UseGuards(LocalAuthGuard)
	@Post("signin")
	@ApiOperation({
		summary: "로그인 API",
		description: "userId, password를 이용하여 로그인 한다."
	})
	async signIn(@Body() body: SignInUserDto) {
		return await this.authService.makeToken(body);
	}
}
