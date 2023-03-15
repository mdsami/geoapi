import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostofficesService } from '../services/postoffices.service';
import { CreatePostofficeDto } from '../dto/create-postoffice.dto';
import { UpdatePostofficeDto } from '../dto/update-postoffice.dto';

@Controller('postoffices')
export class PostofficesController {
  constructor(private readonly postofficesService: PostofficesService) {}

  @Post()
  create(@Body() createPostofficeDto: CreatePostofficeDto) {
    return this.postofficesService.create(createPostofficeDto);
  }

  @Get()
  findAll() {
    return this.postofficesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postofficesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostofficeDto: UpdatePostofficeDto) {
    return this.postofficesService.update(+id, updatePostofficeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postofficesService.remove(+id);
  }
}
