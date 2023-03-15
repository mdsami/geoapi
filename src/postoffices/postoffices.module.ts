import { Module } from '@nestjs/common';
import { PostofficesService } from './services/postoffices.service';
import { PostofficesController } from './controllers/postoffices.controller';

@Module({
  controllers: [PostofficesController],
  providers: [PostofficesService]
})
export class PostofficesModule {}
