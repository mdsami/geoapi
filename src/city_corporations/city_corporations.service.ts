import { Injectable } from '@nestjs/common';
import { CreateCityCorporationDto } from './dto/create-city_corporation.dto';
import { UpdateCityCorporationDto } from './dto/update-city_corporation.dto';

@Injectable()
export class CityCorporationsService {
  create(createCityCorporationDto: CreateCityCorporationDto) {
    return 'This action adds a new cityCorporation';
  }

  findAll() {
    return `This action returns all cityCorporations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cityCorporation`;
  }

  update(id: number, updateCityCorporationDto: UpdateCityCorporationDto) {
    return `This action updates a #${id} cityCorporation`;
  }

  remove(id: number) {
    return `This action removes a #${id} cityCorporation`;
  }
}
