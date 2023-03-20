import { Division } from 'src/divisions/entities/division.entity';
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
export class District extends BaseEntity {

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

  // @Column()
  // division_id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Division, (division) => division.district, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: 'division_id' })
  division: Division;
}

export class DistrictFillableFields {
  name: string;
  namebn: string;
}