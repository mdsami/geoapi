"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const database_1 = require("./database");
const divisions_module_1 = require("./divisions/divisions.module");
const districts_module_1 = require("./districts/districts.module");
const thanas_module_1 = require("./thanas/thanas.module");
const municipalities_module_1 = require("./municipalities/municipalities.module");
const wards_module_1 = require("./wards/wards.module");
const postoffices_module_1 = require("./postoffices/postoffices.module");
const unions_module_1 = require("./unions/unions.module");
const upazilas_module_1 = require("./upazilas/upazilas.module");
const zone_module_1 = require("./zone/zone.module");
const microareas_module_1 = require("./microareas/microareas.module");
const Logger_middleware_1 = require("./Logger.middleware");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(Logger_middleware_1.default).forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            divisions_module_1.DivisionsModule,
            districts_module_1.DistrictsModule,
            thanas_module_1.ThanasModule,
            municipalities_module_1.MunicipalitiesModule,
            wards_module_1.WardsModule,
            postoffices_module_1.PostofficesModule,
            unions_module_1.UnionsModule,
            database_1.DatabaseModule,
            upazilas_module_1.UpazilasModule,
            zone_module_1.ZoneModule,
            microareas_module_1.MicroareasModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map