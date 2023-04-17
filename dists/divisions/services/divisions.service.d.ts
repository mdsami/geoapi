import { HttpStatus } from '@nestjs/common';
import { CreateDivisionDto } from '../dto/create-division.dto';
import { UpdateDivisionDto } from '../dto/update-division.dto';
import { Division } from '../entities/division.entity';
export declare class DivisionsService {
    create(createDivisionDto: CreateDivisionDto): string;
    findAll(): Promise<Division[]>;
    findOne(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: Division;
    }>;
    update(id: number, updateDivisionDto: UpdateDivisionDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
