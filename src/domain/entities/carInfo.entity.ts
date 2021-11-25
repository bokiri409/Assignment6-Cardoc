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
	car_info_id!: number;

	@ManyToOne(() => Users, (users) => users.carInfo)
	user_id!: Users;

	@Column()
	trim_id?: number;

	@CreateDateColumn()
	createdAt!: Date;

	@UpdateDateColumn()
	updatedAt!: Date;
}
