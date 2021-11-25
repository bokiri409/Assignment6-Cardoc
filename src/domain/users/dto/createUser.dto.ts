import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
	@IsString()
	@IsNotEmpty()
	user_id!: string;

	@IsString()
	@IsNotEmpty()
	user_pw!: string;

	@IsString()
	@IsNotEmpty()
	user_name!: string;
}
