import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateImprensaDto } from './dto/create-imprensa.dto';
import { UpdateImprensaDto } from './dto/update-imprensa.dto';

@Injectable()
export class ImprensaService {
    constructor(private prisma: PrismaService) { }

    create(createImprensaDto: CreateImprensaDto) {
        return this.prisma.pressItem.create({
            data: createImprensaDto,
        });
    }

    findAll() {
        return this.prisma.pressItem.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }

    findOne(id: string) {
        return this.prisma.pressItem.findUnique({
            where: { id },
        });
    }

    update(id: string, updateImprensaDto: UpdateImprensaDto) {
        return this.prisma.pressItem.update({
            where: { id },
            data: updateImprensaDto,
        });
    }

    remove(id: string) {
        return this.prisma.pressItem.delete({
            where: { id },
        });
    }
}
