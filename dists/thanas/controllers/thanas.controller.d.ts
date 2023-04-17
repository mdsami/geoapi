import { ThanasService } from '../services/thanas.service';
import { CreateThanaDto } from '../dto/create-thana.dto';
import { UpdateThanaDto } from '../dto/update-thana.dto';
export declare class ThanasController {
    private readonly thanasService;
    constructor(thanasService: ThanasService);
    create(createThanaDto: CreateThanaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateThanaDto: UpdateThanaDto): string;
    remove(id: string): string;
}
