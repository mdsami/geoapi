import { CreateUpazilaDto } from '../dto/create-upazila.dto';
import { UpdateUpazilaDto } from '../dto/update-upazila.dto';
import { Upazila } from '../entities/upazila.entity';
export declare class UpazilasService {
    create(createUpazilaDto: CreateUpazilaDto): string;
    findAll(): Promise<Upazila[]>;
    findOne(id: number): Promise<Upazila>;
    update(id: number, updateUpazilaDto: UpdateUpazilaDto): string;
    remove(id: number): string;
}
