import { District } from 'src/districts/entities/district.entity';
import { Division } from 'src/divisions/entities/division.entity';
import { Municipality } from 'src/municipalities/entities/municipality.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  JoinColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Upazila extends BaseEntity {

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

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;

  @ManyToOne(() => District, (district) => district.upazila, {
    onDelete: "CASCADE",
  })
  district: District;

  @ManyToOne(() => Division, (division) => division.upazila, {
    onDelete: "CASCADE",
  })
  division: Division;

  @OneToMany(() => Municipality, (municipality) => municipality.division, {
    // onDelete: "CASCADE",
    // cascade: ["insert", "update"],
  })
  municipality: Municipality[];
}

export class UpazilaFillableFields {
  name: string;
  namebn: string;
}