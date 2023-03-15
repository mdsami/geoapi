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
  export class Division extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    bnname: string;

    @Column()
    lat: number;

    @Column()
    long: number;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }

  export class DivisionFillableFields {
    name: string;
    bnname: string;
}

