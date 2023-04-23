import { PartialType } from '@nestjs/swagger';
import { CreateCityCorporationDto } from './create-city_corporation.dto';

export class UpdateCityCorporationDto extends PartialType(CreateCityCorporationDto) {}
