import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CityCorporationsService } from './city_corporations.service';
import { CreateCityCorporationDto } from './dto/create-city_corporation.dto';
import { UpdateCityCorporationDto } from './dto/update-city_corporation.dto';

@Controller('city-corporations')
export class CityCorporationsController {
  constructor(private readonly cityCorporationsService: CityCorporationsService) {}

  @Post()
  create(@Body() createCityCorporationDto: CreateCityCorporationDto) {
    return this.cityCorporationsService.create(createCityCorporationDto);
  }

  @Get()
  findAll() {
    return this.cityCorporationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cityCorporationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCityCorporationDto: UpdateCityCorporationDto) {
    return this.cityCorporationsService.update(+id, updateCityCorporationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cityCorporationsService.remove(+id);
  }
}
