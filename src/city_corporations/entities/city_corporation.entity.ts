import { District } from "src/districts/entities/district.entity";
import { Division } from "src/divisions/entities/division.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class CityCorporation extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	namebn: string;

	@Column({ nullable: true })
	lat: number;

	@Column({ nullable: true })
	long: number;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@ManyToOne(() => Division, (division) => division.city_corporation, {
		onDelete: "CASCADE",
	})
	@JoinColumn({ name: 'division_id' })
	division: Division;


	@ManyToOne(() => District, (district) => district.city_corporation, {
		onDelete: "CASCADE",
	})
	@JoinColumn({ name: 'district_id' })
	district: District;
}

export class CityCorporationFillableFields {
	name: string;
	namebn: string;
}