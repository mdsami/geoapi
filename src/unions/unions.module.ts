import { Module } from '@nestjs/common';
import { UnionsService } from './services/unions.service';
import { UnionsController } from './controllers/unions.controller';

@Module({
  controllers: [UnionsController],
  providers: [UnionsService]
})
export class UnionsModule {}
