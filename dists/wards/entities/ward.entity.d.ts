import { BaseEntity } from 'typeorm';
export declare class Ward extends BaseEntity {
    id: number;
    name: string;
    namebn: string;
    lat: number;
    long: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare class WardFillableFields {
    name: string;
    namebn: string;
}
