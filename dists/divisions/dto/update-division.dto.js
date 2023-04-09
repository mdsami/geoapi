"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDivisionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_division_dto_1 = require("./create-division.dto");
class UpdateDivisionDto extends (0, swagger_1.PartialType)(create_division_dto_1.CreateDivisionDto) {
}
exports.UpdateDivisionDto = UpdateDivisionDto;
//# sourceMappingURL=update-division.dto.js.map