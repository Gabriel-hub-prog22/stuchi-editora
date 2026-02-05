import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateSubmissionDto } from './dto/create-submission.dto';

@Injectable()
export class SubmissionsService {
    constructor(private prisma: PrismaService) { }

    async createSubmission(data: CreateSubmissionDto) {
        return this.prisma.submission.create({
            data: {
                nome: data.nome,
                email: data.email,
                genero: data.genero,
                pitch: data.pitch,
            },
        });
    }
}
