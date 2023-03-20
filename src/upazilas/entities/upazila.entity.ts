import { District } from 'src/districts/entities/district.entity';
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
  export class Upazila extends BaseEntity{

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

    @CreateDateColumn({type:'timestamp'})
    createdAt: Date;
  
    @UpdateDateColumn({type:'timestamp'})
    updatedAt: Date;

    @ManyToOne(() => Division,(division) => division.district,{
      onDelete: "CASCADE",
  })
  @JoinColumn({name:'division_id'})
  division:Division;
  
    @ManyToOne(() => District,(district) => district.upazila,{
      onDelete: "CASCADE",
  })
  @JoinColumn({name:'district_id'})
  district:District;


  }

  export class UpazilaFillableFields {
    name: string;
    namebn: string;
}