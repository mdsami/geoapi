import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateThanaDto } from '../dto/create-thana.dto';
import { UpdateThanaDto } from '../dto/update-thana.dto';
import { Thana } from '../entities/thana.entity';

@Injectable()
export class ThanasService {
  async findAll(): Promise<Thana[]> {
    return await Thana.find();
  }

  async findOne(id: number): Promise<Thana> {
    const thana = await Thana.findOne({ where: { id: id }, relations: ['division', 'district'] });
    if (!thana) {
      throw new NotFoundException('Not found');
    }
    return thana;
  }
}
