import { Module } from '@nestjs/common';
import { MunicipalitiesService } from './services/municipalities.service';
import { MunicipalitiesController } from './controllers/municipalities.controller';

@Module({
  controllers: [MunicipalitiesController],
  providers: [MunicipalitiesService]
})
export class MunicipalitiesModule {}
