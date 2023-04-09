"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePostofficeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_postoffice_dto_1 = require("./create-postoffice.dto");
class UpdatePostofficeDto extends (0, swagger_1.PartialType)(create_postoffice_dto_1.CreatePostofficeDto) {
}
exports.UpdatePostofficeDto = UpdatePostofficeDto;
//# sourceMappingURL=update-postoffice.dto.js.map