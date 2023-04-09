import { BaseEntity } from 'typeorm';
export declare class Thana extends BaseEntity {
    id: number;
    name: string;
    namebn: string;
    lat: number;
    long: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare class ThanaFillableFields {
    name: string;
    namebn: string;
}
