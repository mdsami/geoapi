import { CityCorporation } from 'src/city_corporations/entities/city_corporation.entity';
import { Upazila } from './../../upazilas/entities/upazila.entity';
import { Division } from 'src/divisions/entities/division.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Municipality } from 'src/municipalities/entities/municipality.entity';
import { Thana } from 'src/thanas/entities/thana.entity';

@Entity()
export class District extends BaseEntity {

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

  // @Column()
  // division_id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Division, (division) => division.district, {
    onDelete: "CASCADE",
    // eager: true,
  })
  @JoinColumn({ name: 'division_id' })
  division: Division;

  @OneToMany(() => Upazila, (upazila) => upazila.district, {
    onDelete: "CASCADE",
    cascade: ["insert", "update"],
  })
  upazila: Upazila[]

  @OneToMany(() => CityCorporation, (city_corporation) => city_corporation.district, {
    onDelete: "CASCADE",
    cascade: ["insert", "update"],
  })
  city_corporation: CityCorporation[]

  @OneToMany(() => Municipality, (municipality) => municipality.district, {
    onDelete: "CASCADE",
    cascade: ["insert", "update"],
  })
  municipality: Municipality[]

  @OneToMany(() => Thana, (thana) => thana.district, {
    onDelete: "CASCADE",
    cascade: ["insert", "update"],
  })
  thana: Thana[]
}

export class DistrictFillableFields {
  name: string;
  namebn: string;
}