import { BaseEntity } from 'typeorm';
export declare class Union extends BaseEntity {
    id: number;
    name: string;
    namebn: string;
    lat: number;
    long: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare class UnionFillableFields {
    name: string;
    namebn: string;
}
