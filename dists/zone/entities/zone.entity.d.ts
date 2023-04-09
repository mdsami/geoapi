import { BaseEntity } from 'typeorm';
export declare class Zone extends BaseEntity {
    id: number;
    name: string;
    namebn: string;
    lat: number;
    long: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare class ZoneFillableFields {
    name: string;
    namebn: string;
}
