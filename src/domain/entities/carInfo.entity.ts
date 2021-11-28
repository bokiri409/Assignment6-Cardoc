import { ApiProperty } from "@nestjs/swagger";
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from "typeorm";
import { Users } from "./users.entity";

@Entity("carInfo")
export class CarInfo {
	@PrimaryGeneratedColumn()
	carInfoId!: number;

	@ManyToOne(() => Users, (user) => user.carInfo)
	@JoinColumn([{ name: "userId", referencedColumnName: "userId" }])
	@ApiProperty({ description: "user ID" })
	userId!: string;

	@Column()
	@ApiProperty({ description: "carInfo ID" })
	trimId?: number;

	@CreateDateColumn()
	@ApiProperty({ description: "carInfo created date" })
	createdAt!: Date;

	@UpdateDateColumn()
	@ApiProperty({ description: "carInfo updated date" })
	updatedAt!: Date;
}
