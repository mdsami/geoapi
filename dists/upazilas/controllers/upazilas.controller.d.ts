import { UpazilasService } from '../services/upazilas.service';
import { CreateUpazilaDto } from '../dto/create-upazila.dto';
import { UpdateUpazilaDto } from '../dto/update-upazila.dto';
export declare class UpazilasController {
    private readonly upazilasService;
    constructor(upazilasService: UpazilasService);
    create(createUpazilaDto: CreateUpazilaDto): string;
    findAll(): Promise<import("../entities/upazila.entity").Upazila[]>;
    findOne(id: string): Promise<import("../entities/upazila.entity").Upazila>;
    update(id: string, updateUpazilaDto: UpdateUpazilaDto): string;
    remove(id: string): string;
}
