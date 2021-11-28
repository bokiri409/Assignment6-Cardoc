import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CarInfo } from "../entities/carInfo.entity";
import { Users } from "../entities/users.entity";
import { UserRepository } from "../users/users.repository";
import { CarsController } from "./cars.controller";
import { CarsRepository } from "./cars.repository";
import { CarsService } from "./cars.service";

@Module({
	imports: [
		TypeOrmModule.forFeature([
			Users,
			UserRepository,
			CarsRepository,
			CarInfo
		])
	],
	controllers: [CarsController],
	providers: [CarsService]
})
export class CarsModule {}
