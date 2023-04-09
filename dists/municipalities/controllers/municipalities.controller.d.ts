import { MunicipalitiesService } from '../services/municipalities.service';
import { CreateMunicipalityDto } from '../dto/create-municipality.dto';
import { UpdateMunicipalityDto } from '../dto/update-municipality.dto';
export declare class MunicipalitiesController {
    private readonly municipalitiesService;
    constructor(municipalitiesService: MunicipalitiesService);
    create(createMunicipalityDto: CreateMunicipalityDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMunicipalityDto: UpdateMunicipalityDto): string;
    remove(id: string): string;
}
