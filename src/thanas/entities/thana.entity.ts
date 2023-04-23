import { Division } from 'src/divisions/entities/division.entity';
import { District } from './../../districts/entities/district.entity';
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
export class Thana extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  namebn: string;

  @Column({ nullable: true, default: 0, type: 'double precision' })
  lat: number;

  @Column({ nullable: true, default: 0, type: 'double precision' })
  long: number;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;

  @ManyToOne(() => Division, (division) => division.thana)
  @JoinColumn({ name: 'division_id' })
  division: Division;

  @ManyToOne(() => District, (district) => district.thana)
  @JoinColumn({ name: 'district_id' })
  district: District;
}

export class ThanaFillableFields {
  name: string;
  namebn: string;
}