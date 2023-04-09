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
exports.MicroareasController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const microareas_service_1 = require("../services/microareas.service");
const create_microarea_dto_1 = require("../dto/create-microarea.dto");
const update_microarea_dto_1 = require("../dto/update-microarea.dto");
let MicroareasController = class MicroareasController {
    constructor(microareasService) {
        this.microareasService = microareasService;
    }
    create(createMicroareaDto) {
        return this.microareasService.create(createMicroareaDto);
    }
    findAll() {
        return this.microareasService.findAll();
    }
    findOne(id) {
        return this.microareasService.findOne(+id);
    }
    update(id, updateMicroareaDto) {
        return this.microareasService.update(+id, updateMicroareaDto);
    }
    remove(id) {
        return this.microareasService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_microarea_dto_1.CreateMicroareaDto]),
    __metadata("design:returntype", void 0)
], MicroareasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MicroareasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MicroareasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_microarea_dto_1.UpdateMicroareaDto]),
    __metadata("design:returntype", void 0)
], MicroareasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MicroareasController.prototype, "remove", null);
MicroareasController = __decorate([
    (0, swagger_1.ApiTags)('Microareas'),
    (0, common_1.Controller)({
        version: '1',
        path: 'microareas',
    }),
    (0, common_1.Controller)('microareas'),
    __metadata("design:paramtypes", [microareas_service_1.MicroareasService])
], MicroareasController);
exports.MicroareasController = MicroareasController;
//# sourceMappingURL=microareas.controller.js.map