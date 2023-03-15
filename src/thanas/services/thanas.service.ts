import { Injectable } from '@nestjs/common';
import { CreateThanaDto } from '../dto/create-thana.dto';
import { UpdateThanaDto } from '../dto/update-thana.dto';

@Injectable()
export class ThanasService {
  create(createThanaDto: CreateThanaDto) {
    return 'This action adds a new thana';
  }

  findAll() {
    return `This action returns all thanas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} thana`;
  }

  update(id: number, updateThanaDto: UpdateThanaDto) {
    return `This action updates a #${id} thana`;
  }

  remove(id: number) {
    return `This action removes a #${id} thana`;
  }
}
