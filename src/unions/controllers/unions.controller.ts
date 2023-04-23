import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UnionsService } from '../services/unions.service';
import { CreateUnionDto } from '../dto/create-union.dto';
import { UpdateUnionDto } from '../dto/update-union.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Unions')
@Controller({
  version: '1',
  path: 'unions',
})
@Controller('unions')
export class UnionsController {
  constructor(private readonly unionsService: UnionsService) { }

  @Get()
  findAll() {
    return this.unionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unionsService.findOne(+id);
  }
}
