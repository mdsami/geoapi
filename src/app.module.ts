import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database';
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
import LogsMiddleware from './Logger.middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DivisionsModule,
    DistrictsModule,
    ThanasModule,
    MunicipalitiesModule,
    WardsModule,
    PostofficesModule,
    UnionsModule,
    DatabaseModule,
    UpazilasModule,
    ZoneModule,
    MicroareasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogsMiddleware).forRoutes('*');
  }
}
