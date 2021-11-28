import {
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryColumn,
	UpdateDateColumn
} from "typeorm";
import { Users } from "./users.entity";

@Entity("carInfo")
export class CarInfo {
	@PrimaryColumn()
	carInfoId!: number;

	@ManyToOne(() => Users, (users) => users.carInfo)
	userId!: Users;

	@Column()
	trimId?: number;

	@CreateDateColumn()
	createdAt!: Date;

	@UpdateDateColumn()
	updatedAt!: Date;
}
