import { HttpStatus } from '@nestjs/common';
import { CreateDistrictDto } from '../dto/create-district.dto';
import { UpdateDistrictDto } from '../dto/update-district.dto';
import { District } from '../entities/district.entity';
export declare class DistrictsService {
    create(createDistrictDto: CreateDistrictDto): string;
    findAll(): Promise<District[]>;
    findOne(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: District;
    }>;
    update(id: number, updateDistrictDto: UpdateDistrictDto): string;
    remove(id: number): string;
}
