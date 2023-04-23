import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DivisionsService } from '../services/divisions.service';
import { CreateDivisionDto } from '../dto/create-division.dto';
import { UpdateDivisionDto } from '../dto/update-division.dto';

@ApiTags('Divisions')
@Controller({
  version: '1',
  path: 'divisions',
})
@Controller('divisions')
export class DivisionsController {
  constructor(private readonly divisionsService: DivisionsService) { }
  @Get()
  findAll() {
    return this.divisionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.divisionsService.findOne(+id);
  }
}
