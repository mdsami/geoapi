"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoneService = void 0;
const common_1 = require("@nestjs/common");
let ZoneService = class ZoneService {
    create(createZoneDto) {
        return 'This action adds a new zone';
    }
    findAll() {
        return `This action returns all zone`;
    }
    findOne(id) {
        return `This action returns a #${id} zone`;
    }
    update(id, updateZoneDto) {
        return `This action updates a #${id} zone`;
    }
    remove(id) {
        return `This action removes a #${id} zone`;
    }
};
ZoneService = __decorate([
    (0, common_1.Injectable)()
], ZoneService);
exports.ZoneService = ZoneService;
//# sourceMappingURL=zone.service.js.map