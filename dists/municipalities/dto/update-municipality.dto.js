"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMunicipalityDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_municipality_dto_1 = require("./create-municipality.dto");
class UpdateMunicipalityDto extends (0, swagger_1.PartialType)(create_municipality_dto_1.CreateMunicipalityDto) {
}
exports.UpdateMunicipalityDto = UpdateMunicipalityDto;
//# sourceMappingURL=update-municipality.dto.js.map