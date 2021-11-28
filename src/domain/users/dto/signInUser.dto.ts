import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class SignInUserDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty({ type: String, description: "유저 ID" })
	userId!: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty({ type: String, description: "유저 Password" })
	password!: string;
}
