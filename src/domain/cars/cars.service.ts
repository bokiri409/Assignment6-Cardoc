import { BadRequestException, HttpService, Injectable } from "@nestjs/common";
import { UserRepository } from "../users/users.repository";
import { CarsRepository } from "./cars.repository";
import { CarsInfoDto } from "./dto/carsInfo.dto";

@Injectable()
export class CarsService {
	constructor(
		private readonly carsRepository: CarsRepository,
		private readonly userRepository: UserRepository,
		private readonly httpService: HttpService
	) {}

	private readonly CAR_URL = process.env.CARDOC_URL;

	async carsInfo(carsInfoDto: CarsInfoDto) {
		const findUser = await this.userRepository.findUser(carsInfoDto.userId);

		// 해당 유저가 없을 때 차종 저장 안됨
		if (!findUser) {
			throw new BadRequestException();
		}
		return await this.carsRepository.carInfo(carsInfoDto);
	}

	async tireInfo(userId: string) {
		const findUser = await this.userRepository.findUser(userId);

		// 사용자 없을 때
		if (!findUser) {
			throw new BadRequestException();
		}

		const cars = await this.carsRepository.findCar(userId);
		const tireInfo = [];
		for (const car of cars) {
			const carId = car.trimId;
			const tire = await this.httpService
				.get(this.CAR_URL + car.trimId)
				.toPromise();
			const frontTire = tire.data.spec.driving.frontTire;
			const rearTire = tire.data.spec.driving.rearTire;

			tireInfo.push({ carId, frontTire, rearTire });
		}
		return tireInfo;
	}
}
