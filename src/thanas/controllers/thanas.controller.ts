import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThanasService } from '../services/thanas.service';
import { CreateThanaDto } from '../dto/create-thana.dto';
import { UpdateThanaDto } from '../dto/update-thana.dto';

@Controller('thanas')
export class ThanasController {
  constructor(private readonly thanasService: ThanasService) {}

  @Post()
  create(@Body() createThanaDto: CreateThanaDto) {
    return this.thanasService.create(createThanaDto);
  }

  @Get()
  findAll() {
    return this.thanasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.thanasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateThanaDto: UpdateThanaDto) {
    return this.thanasService.update(+id, updateThanaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.thanasService.remove(+id);
  }
}
