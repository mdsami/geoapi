import { District } from 'src/districts/entities/district.entity';
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
export class Upazila extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  namebn: string;

  @Column()
  lat: number;

  @Column()
  long: number;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}

export class UpazilaFillableFields {
  name: string;
  namebn: string;
}