"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MunicipalitiesService = void 0;
const common_1 = require("@nestjs/common");
let MunicipalitiesService = class MunicipalitiesService {
    create(createMunicipalityDto) {
        return 'This action adds a new municipality';
    }
    findAll() {
        return `This action returns all municipalities`;
    }
    findOne(id) {
        return `This action returns a #${id} municipality`;
    }
    update(id, updateMunicipalityDto) {
        return `This action updates a #${id} municipality`;
    }
    remove(id) {
        return `This action removes a #${id} municipality`;
    }
};
MunicipalitiesService = __decorate([
    (0, common_1.Injectable)()
], MunicipalitiesService);
exports.MunicipalitiesService = MunicipalitiesService;
//# sourceMappingURL=municipalities.service.js.map