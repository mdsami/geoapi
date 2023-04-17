"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivisionsModule = void 0;
const common_1 = require("@nestjs/common");
const divisions_service_1 = require("./services/divisions.service");
const divisions_controller_1 = require("./controllers/divisions.controller");
const division_entity_1 = require("./entities/division.entity");
const typeorm_1 = require("@nestjs/typeorm");
let DivisionsModule = class DivisionsModule {
};
DivisionsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([division_entity_1.Division])],
        controllers: [divisions_controller_1.DivisionsController],
        providers: [divisions_service_1.DivisionsService]
    })
], DivisionsModule);
exports.DivisionsModule = DivisionsModule;
//# sourceMappingURL=divisions.module.js.map