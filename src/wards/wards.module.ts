import { Module } from '@nestjs/common';
import { WardsService } from './services/wards.service';
import { WardsController } from './controllers/wards.controller';

@Module({
  controllers: [WardsController],
  providers: [WardsService]
})
export class WardsModule {}
