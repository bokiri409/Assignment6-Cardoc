import { Module } from "@nestjs/common";
import { AuthModule } from "./domain/auth/auth.module";
import { UsersModule } from "./domain/users/users.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "./domain/entities/users.entity";
import { UserRepository } from "./domain/users/users.repository";
import { CarInfo } from "./domain/entities/carInfo.entity";
import { ConfigModule } from "@nestjs/config";

@Module({
	imports: [
		// ConfigModule.forRoot({ envFilePath: [".env"], isGlobal: true }),
		ConfigModule.forRoot(),
		TypeOrmModule.forRoot({
			type: "mysql",
			host: process.env.DB_HOST,
			port: 3306,
			username: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_DATABASE,
			entities: [Users, UserRepository, CarInfo],
			synchronize: true
		}),
		UsersModule,
		AuthModule
	]

	// controllers: [AppController, UserController, UsersController],
	// providers: [AppService, UsersService]
})
export class AppModule {}
