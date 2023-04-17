"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistrictsService = void 0;
const common_1 = require("@nestjs/common");
const district_entity_1 = require("../entities/district.entity");
let DistrictsService = class DistrictsService {
    create(createDistrictDto) {
        return 'This action adds a new district';
    }
    async findAll() {
        const district = await district_entity_1.District.find();
        return district;
    }
    async findOne(id) {
        const response = await district_entity_1.District.findOne({ where: { id: id }, relations: ['upazila'] });
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'success',
            data: response
        };
    }
    update(id, updateDistrictDto) {
        return `This action updates a #${id} district`;
    }
    remove(id) {
        return `This action removes a #${id} district`;
    }
};
DistrictsService = __decorate([
    (0, common_1.Injectable)()
], DistrictsService);
exports.DistrictsService = DistrictsService;
//# sourceMappingURL=districts.service.js.map