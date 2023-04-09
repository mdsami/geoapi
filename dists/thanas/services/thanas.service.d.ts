import { CreateThanaDto } from '../dto/create-thana.dto';
import { UpdateThanaDto } from '../dto/update-thana.dto';
export declare class ThanasService {
    create(createThanaDto: CreateThanaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateThanaDto: UpdateThanaDto): string;
    remove(id: number): string;
}
