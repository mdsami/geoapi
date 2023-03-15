import { Module } from '@nestjs/common';
import { ZoneService } from './services/zone.service';
import { ZoneController } from './controllers/zone.controller';

@Module({
  controllers: [ZoneController],
  providers: [ZoneService]
})
export class ZoneModule {}
