import { District } from 'src/districts/entities/district.entity';
import { Division } from 'src/divisions/entities/division.entity';
import { BaseEntity } from 'typeorm';
export declare class Upazila extends BaseEntity {
    id: number;
    name: string;
    namebn: string;
    lat: number;
    long: number;
    createdAt: Date;
    updatedAt: Date;
    division: Division;
    district: District;
}
export declare class UpazilaFillableFields {
    name: string;
    namebn: string;
}
