import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "../auth/auth.module";
import { Users } from "../entities/users.entity";
import { UsersController } from "./users.controller";
import { UserRepository } from "./users.repository";
import { UsersService } from "./users.service";

@Module({
	imports: [
		TypeOrmModule.forFeature([Users, UserRepository]),
		forwardRef(() => AuthModule)
	],
	controllers: [UsersController],
	providers: [UsersService]
	// exports: [UsersService]
})
export class UsersModule {}
