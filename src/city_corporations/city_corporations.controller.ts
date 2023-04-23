import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CityCorporationsService } from './city_corporations.service';
import { CreateCityCorporationDto } from './dto/create-city_corporation.dto';
import { UpdateCityCorporationDto } from './dto/update-city_corporation.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('City Corporations')
@Controller({
  version: '1',
  path: 'city-corporations',
})
@Controller('city-corporations')
export class CityCorporationsController {
  constructor(private readonly cityCorporationsService: CityCorporationsService) { }

  @Get()
  findAll() {
    return this.cityCorporationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cityCorporationsService.findOne(+id);
  }
}
