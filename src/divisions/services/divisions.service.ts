import { HttpStatus, Injectable } from '@nestjs/common';
import { Division } from '../entities/division.entity';

@Injectable()
export class DivisionsService {

  async findAll() {
    const division = await Division.find();
    return division;
  }
  async findOne(id: number) {
    const response = await Division.findOne({ where: { id: id }, relations: ['district'] });
    return {
      statusCode: HttpStatus.OK,
      message: 'success',
      data: response
    }

  }

}