import { Module } from '@nestjs/common';
import { ThanasService } from './services/thanas.service';
import { ThanasController } from './controllers/thanas.controller';

@Module({
  controllers: [ThanasController],
  providers: [ThanasService]
})
export class ThanasModule {}
