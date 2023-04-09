"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistrictsController = void 0;
const common_1 = require("@nestjs/common");
const districts_service_1 = require("../services/districts.service");
const create_district_dto_1 = require("../dto/create-district.dto");
const update_district_dto_1 = require("../dto/update-district.dto");
const swagger_1 = require("@nestjs/swagger");
let DistrictsController = class DistrictsController {
    constructor(districtsService) {
        this.districtsService = districtsService;
    }
    create(createDistrictDto) {
        return this.districtsService.create(createDistrictDto);
    }
    findAll() {
        return this.districtsService.findAll();
    }
    findOne(id) {
        return this.districtsService.findOne(+id);
    }
    update(id, updateDistrictDto) {
        return this.districtsService.update(+id, updateDistrictDto);
    }
    remove(id) {
        return this.districtsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_district_dto_1.CreateDistrictDto]),
    __metadata("design:returntype", void 0)
], DistrictsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DistrictsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DistrictsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_district_dto_1.UpdateDistrictDto]),
    __metadata("design:returntype", void 0)
], DistrictsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DistrictsController.prototype, "remove", null);
DistrictsController = __decorate([
    (0, swagger_1.ApiTags)('Districts'),
    (0, common_1.Controller)({
        version: '1',
        path: 'districts',
    }),
    (0, common_1.Controller)('districts'),
    __metadata("design:paramtypes", [districts_service_1.DistrictsService])
], DistrictsController);
exports.DistrictsController = DistrictsController;
//# sourceMappingURL=districts.controller.js.map