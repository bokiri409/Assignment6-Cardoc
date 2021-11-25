import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class SignInUserDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty({ type: String, description: "유저 ID" })
	user_id!: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty({ type: String, description: "유저 Password" })
	user_pw!: string;
}
