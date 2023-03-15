import { PartialType } from '@nestjs/swagger';
import { CreatePostofficeDto } from './create-postoffice.dto';

export class UpdatePostofficeDto extends PartialType(CreatePostofficeDto) {}
