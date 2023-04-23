import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThanasService } from '../services/thanas.service';
import { CreateThanaDto } from '../dto/create-thana.dto';
import { UpdateThanaDto } from '../dto/update-thana.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Thanas')
@Controller({
  version: '1',
  path: 'thanas',
})
@Controller('thanas')
export class ThanasController {
  constructor(private readonly thanasService: ThanasService) { }

  @Get()
  findAll() {
    return this.thanasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.thanasService.findOne(+id);
  }
}
