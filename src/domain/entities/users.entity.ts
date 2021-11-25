import { ApiProperty } from "@nestjs/swagger";
import {
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryColumn,
	UpdateDateColumn
} from "typeorm";
import { CarInfo } from "./carInfo.entity";

@Entity("users")
export class Users {
	@PrimaryColumn("varchar", { length: 20, nullable: false })
	@ApiProperty({ description: "user ID" })
	user_id!: string;

	@Column("varchar", { length: 50, nullable: false })
	@ApiProperty({ description: "user Name" })
	user_name!: string;

	@Column("varchar", { length: 200, nullable: false })
	@ApiProperty({ description: "user password" })
	user_pw!: string;

	@OneToMany(() => CarInfo, (carInfo) => carInfo.user_id)
	@ApiProperty({ description: "user carInformation" })
	carInfo?: CarInfo[];

	@CreateDateColumn()
	@ApiProperty({ description: "user created date" })
	createdAt!: Date;

	@UpdateDateColumn()
	@ApiProperty({ description: "user updated date" })
	updatedAt!: Date;
}
