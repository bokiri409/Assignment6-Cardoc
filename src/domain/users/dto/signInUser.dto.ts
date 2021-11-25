import { IsNotEmpty, IsString } from "class-validator";

export class SignInUserDto {
	@IsString()
	@IsNotEmpty()
	user_id!: string;

	@IsString()
	@IsNotEmpty()
	user_pw!: string;
}
