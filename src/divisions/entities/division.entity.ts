import { CityCorporation } from 'src/city_corporations/entities/city_corporation.entity';
import { District } from 'src/districts/entities/district.entity';
import { Municipality } from 'src/municipalities/entities/municipality.entity';
import { Thana } from 'src/thanas/entities/thana.entity';
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
  OneToMany,
} from 'typeorm';

@Entity()
export class Division extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  namebn: string;

  @Column({ type: 'double precision', default: 0, })
  lat: number;

  @Column({ type: 'double precision', default: 0, })
  long: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(() => District, (district) => district.division, {
    onDelete: "CASCADE",
    cascade: ["insert", "update"],
  })
  district: District[]

  @OneToMany(() => Upazila, (upazila) => upazila.division, {
    onDelete: "CASCADE",
    cascade: ["insert", "update"],
  })
  upazila: Upazila[]

  @OneToMany(() => CityCorporation, (cityCorporation) => cityCorporation.division, {
    onDelete: "CASCADE",
    cascade: ["insert", "update"],
  })
  city_corporation: CityCorporation[]

  @OneToMany(() => Municipality, (municipality) => municipality.division, {
    onDelete: "CASCADE",
    cascade: ["insert", "update"],
  })
  municipality: Municipality[];

  @OneToMany(() => Thana, (thana) => thana.division, {
    onDelete: "CASCADE",
    cascade: ["insert", "update"],
  })
  thana: Thana[]
}

export class DivisionFillableFields {
  name: string;
  bnname: string;
}

