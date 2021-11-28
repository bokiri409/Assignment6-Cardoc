import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty({ type: String, description: "유저 ID" })
	userId!: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty({ type: String, description: "유저 Password" })
	password!: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty({ type: String, description: "유저 name" })
	userName!: string;
}
