import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';

@Injectable()
export class LivrosService {
    constructor(private prisma: PrismaService) { }

    create(createLivroDto: CreateLivroDto) {
        return this.prisma.book.create({
            data: createLivroDto,
        });
    }

    findAll() {
        return this.prisma.book.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }

    findOne(id: string) {
        return this.prisma.book.findUnique({
            where: { id },
        });
    }

    update(id: string, updateLivroDto: UpdateLivroDto) {
        return this.prisma.book.update({
            where: { id },
            data: updateLivroDto,
        });
    }

    remove(id: string) {
        return this.prisma.book.delete({
            where: { id },
        });
    }
}
