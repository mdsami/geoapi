"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class DatabaseLogger {
    constructor() {
        this.logger = new common_1.Logger('SQL');
    }
    logQuery(query, parameters) {
        this.logger.log({ query: query === null || query === void 0 ? void 0 : query.replace('"', ''), parameters }, `[LOG QUERY] Parameters: ${this.stringifyParameters(parameters)}`);
    }
    logQueryError(error, query, parameters) {
        this.logger.error({
            query: query === null || query === void 0 ? void 0 : query.replace('"', ''),
            error,
            parameters,
        }, `[ERROR QUERY] Parameters: ${this.stringifyParameters(parameters)} -- ${error}`);
    }
    logQuerySlow(time, query, parameters) {
        this.logger.warn({
            query: query === null || query === void 0 ? void 0 : query.replace('"', ''),
            time,
            parameters,
        }, `[SLOW QUERY] Time: ${time} -- Parameters: ${this.stringifyParameters(parameters)}`);
    }
    logMigration(message) {
        this.logger.log(message);
    }
    logSchemaBuild(message) {
        this.logger.log(message);
    }
    log(level, message) {
        if (level === 'log') {
            return this.logger.log(message);
        }
        if (level === 'info') {
            return this.logger.debug(message);
        }
        if (level === 'warn') {
            return this.logger.warn(message);
        }
    }
    stringifyParameters(parameters) {
        try {
            return JSON.stringify(parameters);
        }
        catch (_a) {
            return '';
        }
    }
}
exports.default = DatabaseLogger;
//# sourceMappingURL=orm.logger.js.map