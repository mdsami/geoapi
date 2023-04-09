"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostofficesService = void 0;
const common_1 = require("@nestjs/common");
let PostofficesService = class PostofficesService {
    create(createPostofficeDto) {
        return 'This action adds a new postoffice';
    }
    findAll() {
        return `This action returns all postoffices`;
    }
    findOne(id) {
        return `This action returns a #${id} postoffice`;
    }
    update(id, updatePostofficeDto) {
        return `This action updates a #${id} postoffice`;
    }
    remove(id) {
        return `This action removes a #${id} postoffice`;
    }
};
PostofficesService = __decorate([
    (0, common_1.Injectable)()
], PostofficesService);
exports.PostofficesService = PostofficesService;
//# sourceMappingURL=postoffices.service.js.map