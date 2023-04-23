
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
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Union extends BaseEntity {

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

  @ManyToOne(() => Division, (division) => division.union)
  division: Division;

  @ManyToOne(() => District, (district) => district.union)
  district: District;

  @ManyToOne(() => Upazila, (upazila) => upazila.union)
  upazila: Upazila;
}

export class UnionFillableFields {
  name: string;
  namebn: string;
}