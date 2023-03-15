import { Injectable } from '@nestjs/common';
import { CreateUpazilaDto } from '../dto/create-upazila.dto';
import { UpdateUpazilaDto } from '../dto/update-upazila.dto';

@Injectable()
export class UpazilasService {
  create(createUpazilaDto: CreateUpazilaDto) {
    return 'This action adds a new upazila';
  }

  findAll() {
    return `This action returns all upazilas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} upazila`;
  }

  update(id: number, updateUpazilaDto: UpdateUpazilaDto) {
    return `This action updates a #${id} upazila`;
  }

  remove(id: number) {
    return `This action removes a #${id} upazila`;
  }
}
