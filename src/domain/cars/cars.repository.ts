import { EntityRepository, Repository } from "typeorm";
import { CarInfo } from "../entities/carInfo.entity";
import { CarsInfoDto } from "./dto/carsInfo.dto";

@EntityRepository(CarInfo)
export class CarsRepository extends Repository<CarInfo> {
	async carInfo(carsInfoDto: CarsInfoDto) {
		const car = new CarInfo();
		car.userId = carsInfoDto.userId;
		car.trimId = carsInfoDto.trimId;

		console.log(car.userId);
		return await this.save(car);
	}
}
