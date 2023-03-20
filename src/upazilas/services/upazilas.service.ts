import { Injectable } from '@nestjs/common';
import { CreateUpazilaDto } from '../dto/create-upazila.dto';
import { UpdateUpazilaDto } from '../dto/update-upazila.dto';
import { Upazila } from '../entities/upazila.entity';

@Injectable()
export class UpazilasService {
  create(createUpazilaDto: CreateUpazilaDto) {
    return 'This action adds a new upazila';
  }

  async findAll() {
    const upazila  = await Upazila.find();
    return upazila;
  }

  async findOne(id: number) {
    return await Upazila.findOne({ where: { id: id } });
  }


  update(id: number, updateUpazilaDto: UpdateUpazilaDto) {
    return `This action updates a #${id} upazila`;
  }

  remove(id: number) {
    return `This action removes a #${id} upazila`;
  }
}
