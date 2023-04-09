import { MicroareasService } from '../services/microareas.service';
import { CreateMicroareaDto } from '../dto/create-microarea.dto';
import { UpdateMicroareaDto } from '../dto/update-microarea.dto';
export declare class MicroareasController {
    private readonly microareasService;
    constructor(microareasService: MicroareasService);
    create(createMicroareaDto: CreateMicroareaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMicroareaDto: UpdateMicroareaDto): string;
    remove(id: string): string;
}
