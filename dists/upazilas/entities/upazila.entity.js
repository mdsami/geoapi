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
exports.UpazilaFillableFields = exports.Upazila = void 0;
const district_entity_1 = require("../../districts/entities/district.entity");
const division_entity_1 = require("../../divisions/entities/division.entity");
const typeorm_1 = require("typeorm");
let Upazila = class Upazila extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Upazila.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Upazila.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Upazila.prototype, "namebn", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double', nullable: true, default: 0, }),
    __metadata("design:type", Number)
], Upazila.prototype, "lat", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double', nullable: true, default: 0, }),
    __metadata("design:type", Number)
], Upazila.prototype, "long", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Upazila.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Upazila.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => division_entity_1.Division, (division) => division.district, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: 'division_id' }),
    __metadata("design:type", division_entity_1.Division)
], Upazila.prototype, "division", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => district_entity_1.District, (district) => district.upazila, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: 'district_id' }),
    __metadata("design:type", district_entity_1.District)
], Upazila.prototype, "district", void 0);
Upazila = __decorate([
    (0, typeorm_1.Entity)()
], Upazila);
exports.Upazila = Upazila;
class UpazilaFillableFields {
}
exports.UpazilaFillableFields = UpazilaFillableFields;
//# sourceMappingURL=upazila.entity.js.map