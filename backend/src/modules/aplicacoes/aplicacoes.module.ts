import { Module } from '@nestjs/common';
import { AplicacoesService } from './aplicacoes.service';
import { AplicacoesController } from './aplicacoes.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AplicacoesController],
  providers: [AplicacoesService],
})
export class AplicacoesModule { }
