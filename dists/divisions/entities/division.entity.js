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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivisionFillableFields = exports.Division = void 0;
const district_entity_1 = require("../../districts/entities/district.entity");
const typeorm_1 = require("typeorm");
let Division = class Division extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Division.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Division.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Division.prototype, "namebn", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double', default: 0, }),
    __metadata("design:type", Number)
], Division.prototype, "lat", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double', default: 0, }),
    __metadata("design:type", Number)
], Division.prototype, "long", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Division.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Division.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => district_entity_1.District, (district) => district.division, {
        onDelete: "CASCADE",
        cascade: ["insert", "update"],
    }),
    __metadata("design:type", Array)
], Division.prototype, "district", void 0);
Division = __decorate([
    (0, typeorm_1.Entity)()
], Division);
exports.Division = Division;
class DivisionFillableFields {
}
exports.DivisionFillableFields = DivisionFillableFields;
//# sourceMappingURL=division.entity.js.map