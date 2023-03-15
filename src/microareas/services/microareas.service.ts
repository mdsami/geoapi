import { Injectable } from '@nestjs/common';

import { CreateMicroareaDto } from '../dto/create-microarea.dto';
import { UpdateMicroareaDto } from '../dto/update-microarea.dto';

@Injectable()
export class MicroareasService {
  create(createMicroareaDto: CreateMicroareaDto) {
    return 'This action adds a new microarea';
  }

  findAll() {
    return `This action returns all microareas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} microarea`;
  }

  update(id: number, updateMicroareaDto: UpdateMicroareaDto) {
    return `This action updates a #${id} microarea`;
  }

  remove(id: number) {
    return `This action removes a #${id} microarea`;
  }
}
