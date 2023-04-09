"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MunicipalitiesModule = void 0;
const common_1 = require("@nestjs/common");
const municipalities_service_1 = require("./services/municipalities.service");
const municipalities_controller_1 = require("./controllers/municipalities.controller");
let MunicipalitiesModule = class MunicipalitiesModule {
};
MunicipalitiesModule = __decorate([
    (0, common_1.Module)({
        controllers: [municipalities_controller_1.MunicipalitiesController],
        providers: [municipalities_service_1.MunicipalitiesService]
    })
], MunicipalitiesModule);
exports.MunicipalitiesModule = MunicipalitiesModule;
//# sourceMappingURL=municipalities.module.js.map