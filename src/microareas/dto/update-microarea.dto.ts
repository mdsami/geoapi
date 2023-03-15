import { PartialType } from '@nestjs/swagger';
import { CreateMicroareaDto } from './create-microarea.dto';

export class UpdateMicroareaDto extends PartialType(CreateMicroareaDto) {}
