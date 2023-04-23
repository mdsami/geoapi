import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MunicipalitiesService } from '../services/municipalities.service';
import { CreateMunicipalityDto } from '../dto/create-municipality.dto';
import { UpdateMunicipalityDto } from '../dto/update-municipality.dto';

@ApiTags('Municipalities')
@Controller({
  version: '1',
  path: 'municipalities',
})
@Controller('municipalities')
export class MunicipalitiesController {
  constructor(private readonly municipalitiesService: MunicipalitiesService) { }

  @Get()
  findAll() {
    return this.municipalitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.municipalitiesService.findOne(+id);
  }
}
