import { Logger as TypeOrmLogger } from 'typeorm';
import { Logger as NestLogger } from '@nestjs/common';

class DatabaseLogger implements TypeOrmLogger {
  private readonly logger = new NestLogger('SQL');

  logQuery(query: string, parameters?: unknown[]) {
    this.logger.log(
      { query: query?.replace('"', ''), parameters },
      `[LOG QUERY] Parameters: ${this.stringifyParameters(parameters)}`,
    );
  }

  logQueryError(error: string, query: string, parameters?: unknown[]) {
    this.logger.error(
      {
        query: query?.replace('"', ''),
        error,
        parameters,
      },
      `[ERROR QUERY] Parameters: ${this.stringifyParameters(
        parameters,
      )} -- ${error}`,
    );
  }

  logQuerySlow(time: number, query: string, parameters?: unknown[]) {
    this.logger.warn(
      {
        query: query?.replace('"', ''),
        time,
        parameters,
      },
      `[SLOW QUERY] Time: ${time} -- Parameters: ${this.stringifyParameters(
        parameters,
      )}`,
    );
  }

  logMigration(message: string) {
    this.logger.log(message);
  }

  logSchemaBuild(message: string) {
    this.logger.log(message);
  }

  log(level: 'log' | 'info' | 'warn', message: string) {
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

  private stringifyParameters(parameters?: unknown[]) {
    try {
      return JSON.stringify(parameters);
    } catch {
      return '';
    }
  }
}

export default DatabaseLogger;
