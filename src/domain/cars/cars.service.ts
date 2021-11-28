import { BadRequestException, Injectable } from "@nestjs/common";
import { UserRepository } from "../users/users.repository";
import { CarsRepository } from "./cars.repository";
import { CarsInfoDto } from "./dto/carsInfo.dto";

@Injectable()
export class CarsService {
	constructor(
		private readonly carsRepository: CarsRepository,
		private readonly userRepository: UserRepository
	) {}
	async carsInfo(carsInfoDto: CarsInfoDto) {
		const findUser = await this.userRepository.findUser(carsInfoDto.userId);

		// 해당 유저가 없을 때 차종 저장 안됨
		if (!findUser) {
			throw new BadRequestException();
		}
		return await this.carsRepository.carInfo(carsInfoDto);
	}
}
