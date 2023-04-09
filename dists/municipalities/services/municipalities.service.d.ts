import { CreateMunicipalityDto } from '../dto/create-municipality.dto';
import { UpdateMunicipalityDto } from '../dto/update-municipality.dto';
export declare class MunicipalitiesService {
    create(createMunicipalityDto: CreateMunicipalityDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMunicipalityDto: UpdateMunicipalityDto): string;
    remove(id: number): string;
}
