import { Injectable } from '@nestjs/common';
import { CreatePostofficeDto } from '../dto/create-postoffice.dto';
import { UpdatePostofficeDto } from '../dto/update-postoffice.dto';

@Injectable()
export class PostofficesService {
  create(createPostofficeDto: CreatePostofficeDto) {
    return 'This action adds a new postoffice';
  }

  findAll() {
    return `This action returns all postoffices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postoffice`;
  }

  update(id: number, updatePostofficeDto: UpdatePostofficeDto) {
    return `This action updates a #${id} postoffice`;
  }

  remove(id: number) {
    return `This action removes a #${id} postoffice`;
  }
}
