import { ZoneService } from '../services/zone.service';
import { CreateZoneDto } from '../dto/create-zone.dto';
import { UpdateZoneDto } from '../dto/update-zone.dto';
export declare class ZoneController {
    private readonly zoneService;
    constructor(zoneService: ZoneService);
    create(createZoneDto: CreateZoneDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateZoneDto: UpdateZoneDto): string;
    remove(id: string): string;
}
