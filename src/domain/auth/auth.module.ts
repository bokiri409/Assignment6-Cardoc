import { forwardRef, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "../entities/users.entity";
import { UsersModule } from "../users/users.module";
import { UserRepository } from "../users/users.repository";
import { JwtStrategy } from "./auth.jwtStrategy";
import { LocalStrategy } from "./auth.local.strategy";
import { AuthService } from "./auth.service";

@Module({
	imports: [
		ConfigModule.forRoot(),
		forwardRef(() => UsersModule),
		PassportModule,
		TypeOrmModule.forFeature([Users, UserRepository]),
		JwtModule.register({
			secret: process.env.SECRET_KEY,
			// signOptions: { expiresIn: "1h" }
			signOptions: { expiresIn: "1d" }
		})
	],
	providers: [AuthService, LocalStrategy, JwtStrategy],
	exports: [AuthService]
})
export class AuthModule {}
