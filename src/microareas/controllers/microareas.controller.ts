import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { MicroareasService } from '../services/microareas.service';
import { CreateMicroareaDto } from '../dto/create-microarea.dto';
import { UpdateMicroareaDto } from '../dto/update-microarea.dto';

@ApiTags('Microareas')
@Controller({
  version: '1',
  path: 'microareas',
})
@Controller('microareas')
export class MicroareasController {
  constructor(private readonly microareasService: MicroareasService) {}

  @Post()
  create(@Body() createMicroareaDto: CreateMicroareaDto) {
    return this.microareasService.create(createMicroareaDto);
  }

  @Get()
  findAll() {
    return this.microareasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.microareasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMicroareaDto: UpdateMicroareaDto) {
    return this.microareasService.update(+id, updateMicroareaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.microareasService.remove(+id);
  }
}
