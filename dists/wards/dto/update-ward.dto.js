"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWardDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_ward_dto_1 = require("./create-ward.dto");
class UpdateWardDto extends (0, swagger_1.PartialType)(create_ward_dto_1.CreateWardDto) {
}
exports.UpdateWardDto = UpdateWardDto;
//# sourceMappingURL=update-ward.dto.js.map