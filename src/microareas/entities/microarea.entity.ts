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
  export class Microarea extends BaseEntity{

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

  export class MicroareaFillableFields {
    name: string;
    namebn: string;
}