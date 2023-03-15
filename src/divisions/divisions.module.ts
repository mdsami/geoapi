import { Module } from '@nestjs/common';
import { DivisionsService } from './services/divisions.service';
import { DivisionsController } from './controllers/divisions.controller';

@Module({
  controllers: [DivisionsController],
  providers: [DivisionsService]
})
export class DivisionsModule {}
