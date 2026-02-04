import { PartialType } from '@nestjs/mapped-types';
import { CreateImprensaDto } from './create-imprensa.dto';

export class UpdateImprensaDto extends PartialType(CreateImprensaDto) { }
