import { District } from 'src/districts/entities/district.entity';
import { BaseEntity } from 'typeorm';
export declare class Division extends BaseEntity {
    id: number;
    name: string;
    namebn: string;
    lat: number;
    long: number;
    createdAt: Date;
    updatedAt: Date;
    district: District[];
}
export declare class DivisionFillableFields {
    name: string;
    bnname: string;
}
