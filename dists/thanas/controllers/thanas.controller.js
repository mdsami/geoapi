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
exports.ThanasController = void 0;
const common_1 = require("@nestjs/common");
const thanas_service_1 = require("../services/thanas.service");
const create_thana_dto_1 = require("../dto/create-thana.dto");
const update_thana_dto_1 = require("../dto/update-thana.dto");
const swagger_1 = require("@nestjs/swagger");
let ThanasController = class ThanasController {
    constructor(thanasService) {
        this.thanasService = thanasService;
    }
    create(createThanaDto) {
        return this.thanasService.create(createThanaDto);
    }
    findAll() {
        return this.thanasService.findAll();
    }
    findOne(id) {
        return this.thanasService.findOne(+id);
    }
    update(id, updateThanaDto) {
        return this.thanasService.update(+id, updateThanaDto);
    }
    remove(id) {
        return this.thanasService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_thana_dto_1.CreateThanaDto]),
    __metadata("design:returntype", void 0)
], ThanasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ThanasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ThanasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_thana_dto_1.UpdateThanaDto]),
    __metadata("design:returntype", void 0)
], ThanasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ThanasController.prototype, "remove", null);
ThanasController = __decorate([
    (0, swagger_1.ApiTags)('Thanas'),
    (0, common_1.Controller)({
        version: '1',
        path: 'thanas',
    }),
    (0, common_1.Controller)('thanas'),
    __metadata("design:paramtypes", [thanas_service_1.ThanasService])
], ThanasController);
exports.ThanasController = ThanasController;
//# sourceMappingURL=thanas.controller.js.map