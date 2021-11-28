import { Body, Controller, Post } from "@nestjs/common";
import { CarsService } from "./cars.service";
import { CarsInfoDto } from "./dto/carsInfo.dto";

@Controller("")
export class CarsController {
	constructor(private readonly carsService: CarsService) {}
	@Post("carInfo")
	async carsInfo(@Body() body: CarsInfoDto) {
		return await this.carsService.carsInfo(body);
	}
}
