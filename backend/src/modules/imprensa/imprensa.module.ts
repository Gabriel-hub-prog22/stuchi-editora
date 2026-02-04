import { Module } from '@nestjs/common';
import { ImprensaService } from './imprensa.service';
import { ImprensaController } from './imprensa.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ImprensaController],
  providers: [ImprensaService],
})
export class ImprensaModule { }
