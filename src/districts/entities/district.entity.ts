import { Division } from 'src/divisions/entities/division.entity';
import { Upazila } from 'src/upazilas/entities/upazila.entity';
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
  export class District extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    namebn: string;

    @Column({ type: 'double', nullable: true, default: 0, })
    lat: number;

    @Column({ type: 'double',nullable: true,  default: 0, })
    long: number;

    // @Column()
    // division_id: number;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Division,(division) => division.district,{
      onDelete: "CASCADE",
  })
  @JoinColumn({name:'division_id'})
  division:Division;


  @OneToMany(()=> Upazila,(upazila) => upazila.district,{
    onDelete: "CASCADE",
    // cascade: ["insert", "update"],
})
upazila: Upazila[]


  }

  export class DistrictFillableFields {
    name: string;
    namebn: string;
}