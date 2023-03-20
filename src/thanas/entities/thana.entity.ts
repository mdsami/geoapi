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

    @Column({ type: 'double',nullable: true, default: 0, })
    lat: number;

    @Column({ type: 'double',nullable: true, default: 0, })
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