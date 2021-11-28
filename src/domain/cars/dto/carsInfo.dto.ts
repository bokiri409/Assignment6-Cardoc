import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CarsInfoDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty({ type: String, description: "유저 ID" })
	userId!: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty({ type: Number, description: "자동차 차종 ID" })
	trimId!: number;
}
