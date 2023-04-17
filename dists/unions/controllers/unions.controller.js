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
exports.UnionsController = void 0;
const common_1 = require("@nestjs/common");
const unions_service_1 = require("../services/unions.service");
const create_union_dto_1 = require("../dto/create-union.dto");
const update_union_dto_1 = require("../dto/update-union.dto");
const swagger_1 = require("@nestjs/swagger");
let UnionsController = class UnionsController {
    constructor(unionsService) {
        this.unionsService = unionsService;
    }
    create(createUnionDto) {
        return this.unionsService.create(createUnionDto);
    }
    findAll() {
        return this.unionsService.findAll();
    }
    findOne(id) {
        return this.unionsService.findOne(+id);
    }
    update(id, updateUnionDto) {
        return this.unionsService.update(+id, updateUnionDto);
    }
    remove(id) {
        return this.unionsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_union_dto_1.CreateUnionDto]),
    __metadata("design:returntype", void 0)
], UnionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UnionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UnionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_union_dto_1.UpdateUnionDto]),
    __metadata("design:returntype", void 0)
], UnionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UnionsController.prototype, "remove", null);
UnionsController = __decorate([
    (0, swagger_1.ApiTags)('Unions'),
    (0, common_1.Controller)({
        version: '1',
        path: 'unions',
    }),
    (0, common_1.Controller)('unions'),
    __metadata("design:paramtypes", [unions_service_1.UnionsService])
], UnionsController);
exports.UnionsController = UnionsController;
//# sourceMappingURL=unions.controller.js.map