import { CreateWardDto } from '../dto/create-ward.dto';
import { UpdateWardDto } from '../dto/update-ward.dto';
export declare class WardsService {
    create(createWardDto: CreateWardDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateWardDto: UpdateWardDto): string;
    remove(id: number): string;
}
