import { CreateMicroareaDto } from '../dto/create-microarea.dto';
import { UpdateMicroareaDto } from '../dto/update-microarea.dto';
export declare class MicroareasService {
    create(createMicroareaDto: CreateMicroareaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMicroareaDto: UpdateMicroareaDto): string;
    remove(id: number): string;
}
