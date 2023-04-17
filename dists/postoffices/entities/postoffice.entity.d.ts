import { BaseEntity } from 'typeorm';
export declare class Postoffice extends BaseEntity {
    id: number;
    name: string;
    namebn: string;
    lat: number;
    long: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare class PostofficeFillableFields {
    name: string;
    namebn: string;
}
