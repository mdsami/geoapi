import { UnionsService } from '../services/unions.service';
import { CreateUnionDto } from '../dto/create-union.dto';
import { UpdateUnionDto } from '../dto/update-union.dto';
export declare class UnionsController {
    private readonly unionsService;
    constructor(unionsService: UnionsService);
    create(createUnionDto: CreateUnionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUnionDto: UpdateUnionDto): string;
    remove(id: string): string;
}
