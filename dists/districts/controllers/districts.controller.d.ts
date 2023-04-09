import { DistrictsService } from '../services/districts.service';
import { CreateDistrictDto } from '../dto/create-district.dto';
import { UpdateDistrictDto } from '../dto/update-district.dto';
export declare class DistrictsController {
    private readonly districtsService;
    constructor(districtsService: DistrictsService);
    create(createDistrictDto: CreateDistrictDto): string;
    findAll(): Promise<import("../entities/district.entity").District[]>;
    findOne(id: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: import("../entities/district.entity").District;
    }>;
    update(id: string, updateDistrictDto: UpdateDistrictDto): string;
    remove(id: string): string;
}
