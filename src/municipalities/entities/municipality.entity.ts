import { District } from 'src/districts/entities/district.entity';
import { Division } from 'src/divisions/entities/division.entity';
import { Upazila } from 'src/upazilas/entities/upazila.entity';
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
} from 'typeorm';

@Entity()
export class Municipality extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  namebn: string;

  @Column({ nullable: true, type: 'double precision', default: 0 })
  lat: number;

  @Column({ nullable: true, type: 'double precision', default: 0 })
  long: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Division, (division) => division.municipality, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: 'division_id' })
  division: Division;

  @ManyToOne(() => District, (district) => district.municipality, {
    onDelete: "CASCADE",

  })
  @JoinColumn({ name: 'district_id' })
  district: District;

  @ManyToOne(() => Upazila, (upazila) => upazila.municipality, {
    onDelete: "CASCADE",
    nullable: true,
  })
  @JoinColumn({ name: 'upazila_id' })
  upazila: Upazila;
}

export class MunicipalityFillableFields {
  name: string;
  namebn: string;
}