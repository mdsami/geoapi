import { WardsService } from '../services/wards.service';
import { CreateWardDto } from '../dto/create-ward.dto';
import { UpdateWardDto } from '../dto/update-ward.dto';
export declare class WardsController {
    private readonly wardsService;
    constructor(wardsService: WardsService);
    create(createWardDto: CreateWardDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateWardDto: UpdateWardDto): string;
    remove(id: string): string;
}
