import { Module } from '@nestjs/common';
import { CityCorporationsService } from './city_corporations.service';
import { CityCorporationsController } from './city_corporations.controller';
import { CityCorporation } from './entities/city_corporation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CityCorporation])],
  controllers: [CityCorporationsController],
  providers: [CityCorporationsService]
})
export class CityCorporationsModule { }
