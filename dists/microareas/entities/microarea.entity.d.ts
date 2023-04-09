import { BaseEntity } from 'typeorm';
export declare class Microarea extends BaseEntity {
    id: number;
    name: string;
    namebn: string;
    lat: number;
    long: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare class MicroareaFillableFields {
    name: string;
    namebn: string;
}
