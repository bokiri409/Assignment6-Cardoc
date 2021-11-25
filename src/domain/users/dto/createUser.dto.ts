import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty({ type: String, description: "유저 ID" })
	user_id!: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty({ type: String, description: "유저 Password" })
	user_pw!: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty({ type: String, description: "유저 name" })
	user_name!: string;
}
