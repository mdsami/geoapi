"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUnionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_union_dto_1 = require("./create-union.dto");
class UpdateUnionDto extends (0, swagger_1.PartialType)(create_union_dto_1.CreateUnionDto) {
}
exports.UpdateUnionDto = UpdateUnionDto;
//# sourceMappingURL=update-union.dto.js.map