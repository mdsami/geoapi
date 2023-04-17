import { BaseEntity } from 'typeorm';
export declare class Municipality extends BaseEntity {
    id: number;
    name: string;
    namebn: string;
    lat: number;
    long: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare class MunicipalityFillableFields {
    name: string;
    namebn: string;
}
