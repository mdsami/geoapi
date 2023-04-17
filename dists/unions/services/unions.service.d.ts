import { CreateUnionDto } from '../dto/create-union.dto';
import { UpdateUnionDto } from '../dto/update-union.dto';
export declare class UnionsService {
    create(createUnionDto: CreateUnionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUnionDto: UpdateUnionDto): string;
    remove(id: number): string;
}
