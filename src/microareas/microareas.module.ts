import { Module } from '@nestjs/common';
import { MicroareasService } from './services/microareas.service';
import { MicroareasController } from './controllers/microareas.controller';

@Module({
  controllers: [MicroareasController],
  providers: [MicroareasService]
})
export class MicroareasModule {}
