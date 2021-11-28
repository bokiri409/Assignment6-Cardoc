import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CarsService } from "./cars.service";
import { CarsInfoDto } from "./dto/carsInfo.dto";

@ApiTags("자동차 정보 API")
@Controller("cars")
export class CarsController {
	constructor(private readonly carsService: CarsService) {}
	@Post("carInfo")
	@ApiOperation({
		summary: "차종 저장 API",
		description: "userId, trimId를 이용하여 차종ID를 저장한다."
	})
	async carsInfo(@Body() body: CarsInfoDto) {
		return await this.carsService.carsInfo(body);
	}

	@Get("tireInfo:userId")
	@ApiOperation({
		summary: "차종 타이어 조회 API",
		description: "userId를 이용하여 타이어 정보를 조회한다."
	})
	async tireInfo(@Param("userId") userId: string) {
		return await this.carsService.tireInfo(userId);
	}
}
