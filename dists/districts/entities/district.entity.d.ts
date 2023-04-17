import { Division } from 'src/divisions/entities/division.entity';
import { Upazila } from 'src/upazilas/entities/upazila.entity';
import { BaseEntity } from 'typeorm';
export declare class District extends BaseEntity {
    id: number;
    name: string;
    namebn: string;
    lat: number;
    long: number;
    createdAt: Date;
    updatedAt: Date;
    division: Division;
    upazila: Upazila[];
}
export declare class DistrictFillableFields {
    name: string;
    namebn: string;
}
