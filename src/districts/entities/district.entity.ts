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
  export class District extends BaseEntity{

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

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }

  export class DistrictFillableFields {
    name: string;
    namebn: string;
}