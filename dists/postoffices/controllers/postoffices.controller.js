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
exports.PostofficesController = void 0;
const common_1 = require("@nestjs/common");
const postoffices_service_1 = require("../services/postoffices.service");
const create_postoffice_dto_1 = require("../dto/create-postoffice.dto");
const update_postoffice_dto_1 = require("../dto/update-postoffice.dto");
const swagger_1 = require("@nestjs/swagger");
let PostofficesController = class PostofficesController {
    constructor(postofficesService) {
        this.postofficesService = postofficesService;
    }
    create(createPostofficeDto) {
        return this.postofficesService.create(createPostofficeDto);
    }
    findAll() {
        return this.postofficesService.findAll();
    }
    findOne(id) {
        return this.postofficesService.findOne(+id);
    }
    update(id, updatePostofficeDto) {
        return this.postofficesService.update(+id, updatePostofficeDto);
    }
    remove(id) {
        return this.postofficesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_postoffice_dto_1.CreatePostofficeDto]),
    __metadata("design:returntype", void 0)
], PostofficesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostofficesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostofficesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_postoffice_dto_1.UpdatePostofficeDto]),
    __metadata("design:returntype", void 0)
], PostofficesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostofficesController.prototype, "remove", null);
PostofficesController = __decorate([
    (0, swagger_1.ApiTags)('Postoffices'),
    (0, common_1.Controller)({
        version: '1',
        path: 'postoffices',
    }),
    (0, common_1.Controller)('postoffices'),
    __metadata("design:paramtypes", [postoffices_service_1.PostofficesService])
], PostofficesController);
exports.PostofficesController = PostofficesController;
//# sourceMappingURL=postoffices.controller.js.map