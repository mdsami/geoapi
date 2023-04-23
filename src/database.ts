import DatabaseLogger from './orm.logger';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { Division } from './divisions/entities/division.entity';
import { District } from './districts/entities/district.entity';
import { Thana } from './thanas/entities/thana.entity';
import { Upazila } from './upazilas/entities/upazila.entity';
import { Ward } from './wards/entities/ward.entity';
import { Municipality } from './municipalities/entities/municipality.entity';
import { Zone } from './zone/entities/zone.entity';
import { Union } from './unions/entities/union.entity';
import { Microarea } from './microareas/entities/microarea.entity';



@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        // ssl: { rejectUnauthorized: false },
        logger: new DatabaseLogger(),
        autoLoadEntities: true,
        entities: [
          Division,
          District,
          Thana,
          Upazila,
          Ward,
          Union,
          Municipality,
          Zone,
          Microarea
        ],
        // entities: [__dirname + 'entities/**/*.entity{.ts,.js}'],
        synchronize: true,
        namingStrategy: new SnakeNamingStrategy(),
      }),
    }),
  ],
})
export class DatabaseModule { }
