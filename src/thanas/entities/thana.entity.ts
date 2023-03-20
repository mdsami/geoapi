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
  export class Thana extends BaseEntity{

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

    @CreateDateColumn({type: "timestamp"})
    createdAt: Date;
  
    @UpdateDateColumn({type: "timestamp"})
    updatedAt: Date;
  }

  export class ThanaFillableFields {
    name: string;
    namebn: string;
}