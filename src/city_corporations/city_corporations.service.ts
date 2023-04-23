import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCityCorporationDto } from './dto/create-city_corporation.dto';
import { UpdateCityCorporationDto } from './dto/update-city_corporation.dto';
import { CityCorporation } from './entities/city_corporation.entity';

@Injectable()
export class CityCorporationsService {
  create(createCityCorporationDto: CreateCityCorporationDto) {
    return 'This action adds a new cityCorporation';
  }

  async findAll(): Promise<CityCorporation[]> {
    return await CityCorporation.find();
  }

  async findOne(id: number): Promise<CityCorporation> {
    const cityCorp = await CityCorporation.findOne({ where: { id: id } });

    if (!cityCorp) {
      throw new NotFoundException('Not found');
    }

    return cityCorp;
  }

  update(id: number, updateCityCorporationDto: UpdateCityCorporationDto) {
    return `This action updates a #${id} cityCorporation`;
  }

  remove(id: number) {
    return `This action removes a #${id} cityCorporation`;
  }
}