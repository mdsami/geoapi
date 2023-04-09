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
exports.DistrictFillableFields = exports.District = void 0;
const division_entity_1 = require("../../divisions/entities/division.entity");
const upazila_entity_1 = require("../../upazilas/entities/upazila.entity");
const typeorm_1 = require("typeorm");
let District = class District extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], District.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], District.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], District.prototype, "namebn", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double precision', nullable: true, default: 0, }),
    __metadata("design:type", Number)
], District.prototype, "lat", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double precision', nullable: true, default: 0, }),
    __metadata("design:type", Number)
], District.prototype, "long", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], District.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], District.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => division_entity_1.Division, (division) => division.district, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: 'division_id' }),
    __metadata("design:type", division_entity_1.Division)
], District.prototype, "division", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => upazila_entity_1.Upazila, (upazila) => upazila.district, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", Array)
], District.prototype, "upazila", void 0);
District = __decorate([
    (0, typeorm_1.Entity)()
], District);
exports.District = District;
class DistrictFillableFields {
}
exports.DistrictFillableFields = DistrictFillableFields;
//# sourceMappingURL=district.entity.js.map