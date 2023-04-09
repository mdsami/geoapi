"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateThanaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_thana_dto_1 = require("./create-thana.dto");
class UpdateThanaDto extends (0, swagger_1.PartialType)(create_thana_dto_1.CreateThanaDto) {
}
exports.UpdateThanaDto = UpdateThanaDto;
//# sourceMappingURL=update-thana.dto.js.map