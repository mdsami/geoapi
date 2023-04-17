"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const orm_logger_1 = require("./orm.logger");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const division_entity_1 = require("./divisions/entities/division.entity");
const district_entity_1 = require("./districts/entities/district.entity");
const thana_entity_1 = require("./thanas/entities/thana.entity");
const upazila_entity_1 = require("./upazilas/entities/upazila.entity");
const ward_entity_1 = require("./wards/entities/ward.entity");
const municipality_entity_1 = require("./municipalities/entities/municipality.entity");
const zone_entity_1 = require("./zone/entities/zone.entity");
const union_entity_1 = require("./unions/entities/union.entity");
const microarea_entity_1 = require("./microareas/entities/microarea.entity");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'mysql',
                    host: configService.get('DB_HOST'),
                    port: configService.get('DB_PORT'),
                    username: configService.get('DB_USERNAME'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_NAME'),
                    logger: new orm_logger_1.default(),
                    autoLoadEntities: true,
                    entities: [
                        division_entity_1.Division,
                        district_entity_1.District,
                        thana_entity_1.Thana,
                        upazila_entity_1.Upazila,
                        ward_entity_1.Ward,
                        union_entity_1.Union,
                        municipality_entity_1.Municipality,
                        zone_entity_1.Zone,
                        microarea_entity_1.Microarea
                    ],
                    synchronize: true,
                    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
                }),
            }),
        ],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.js.map