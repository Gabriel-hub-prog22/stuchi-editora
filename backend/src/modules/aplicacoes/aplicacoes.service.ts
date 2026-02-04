import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateAplicacaoDto } from './dto/create-aplicacao.dto';

@Injectable()
export class AplicacoesService {
    constructor(private prisma: PrismaService) { }

    create(createAplicacaoDto: CreateAplicacaoDto) {
        return this.prisma.application.create({
            data: createAplicacaoDto,
        });
    }

    findAll() {
        return this.prisma.application.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }
}
