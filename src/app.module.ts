import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DivisionsModule } from './divisions/divisions.module';
import { DistrictsModule } from './districts/districts.module';
import { ThanasModule } from './thanas/thanas.module';
import { MunicipalitiesModule } from './municipalities/municipalities.module';
import { WardsModule } from './wards/wards.module';
import { PostofficesModule } from './postoffices/postoffices.module';
import { UnionsModule } from './unions/unions.module';
import { UpazilasModule } from './upazilas/upazilas.module';
import { ZoneModule } from './zone/zone.module';
import { MicroareasModule } from './microareas/microareas.module';

@Module({
  imports: [DivisionsModule, DistrictsModule, ThanasModule, MunicipalitiesModule, WardsModule, PostofficesModule, UnionsModule, UpazilasModule, ZoneModule, MicroareasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
