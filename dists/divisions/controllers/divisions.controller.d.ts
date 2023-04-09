import { DivisionsService } from '../services/divisions.service';
import { CreateDivisionDto } from '../dto/create-division.dto';
import { UpdateDivisionDto } from '../dto/update-division.dto';
export declare class DivisionsController {
    private readonly divisionsService;
    constructor(divisionsService: DivisionsService);
    create(createDivisionDto: CreateDivisionDto): string;
    findAll(): Promise<import("../entities/division.entity").Division[]>;
    findOne(id: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: import("../entities/division.entity").Division;
    }>;
    update(id: string, updateDivisionDto: UpdateDivisionDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
