import { Injectable, NotFoundException } from '@nestjs/common';
import { Municipality } from '../entities/municipality.entity';

@Injectable()
export class MunicipalitiesService {

  async findAll(): Promise<Municipality[]> {
    return await Municipality.find();
  }

  async findOne(id: number): Promise<Municipality> {
    const municipality = await Municipality.findOne({ where: { id: id }, relations: ['division', 'district'] });

    if (!municipality) {
      throw new NotFoundException('Not found');
    }

    return municipality;
  }
}
