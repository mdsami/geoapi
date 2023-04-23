import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUnionDto } from '../dto/create-union.dto';
import { UpdateUnionDto } from '../dto/update-union.dto';
import { Union } from '../entities/union.entity';

@Injectable()
export class UnionsService {

  async findAll(): Promise<Union[]> {
    return await Union.find();
  }

  async findOne(id: number): Promise<Union> {
    const union = await Union.findOne({ where: { id: id }, relations: ['division', 'district', 'upazila'] })

    if (!union) {
      throw new NotFoundException('Not found');
    }

    return union;
  }
}
