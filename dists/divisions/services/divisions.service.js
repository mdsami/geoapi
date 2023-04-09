"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivisionsService = void 0;
const common_1 = require("@nestjs/common");
const division_entity_1 = require("../entities/division.entity");
let DivisionsService = class DivisionsService {
    create(createDivisionDto) {
        return 'This action adds a new division';
    }
    async findAll() {
        const division = await division_entity_1.Division.find();
        return division;
    }
    async findOne(id) {
        const response = await division_entity_1.Division.findOne({ where: { id: id }, relations: ['district'] });
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'success',
            data: response
        };
    }
    async update(id, updateDivisionDto) {
        return await division_entity_1.Division.update({ id: id }, updateDivisionDto);
    }
    async remove(id) {
        return await division_entity_1.Division.delete({ id: id });
    }
};
DivisionsService = __decorate([
    (0, common_1.Injectable)()
], DivisionsService);
exports.DivisionsService = DivisionsService;
function findOne(id, number) {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=divisions.service.js.map