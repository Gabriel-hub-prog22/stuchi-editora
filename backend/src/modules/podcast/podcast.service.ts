import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePodcastDto } from './dto/create-podcast.dto';
import { UpdatePodcastDto } from './dto/update-podcast.dto';

@Injectable()
export class PodcastService {
    constructor(private prisma: PrismaService) { }

    create(createPodcastDto: CreatePodcastDto) {
        return this.prisma.podcastEpisode.create({
            data: {
                ...createPodcastDto,
                publishedAt: new Date(createPodcastDto.publishedAt),
            },
        });
    }

    findAll() {
        return this.prisma.podcastEpisode.findMany({
            orderBy: { publishedAt: 'desc' },
        });
    }

    findOne(id: string) {
        return this.prisma.podcastEpisode.findUnique({
            where: { id },
        });
    }

    update(id: string, updatePodcastDto: UpdatePodcastDto) {
        const data: any = { ...updatePodcastDto };
        if (updatePodcastDto.publishedAt) {
            data.publishedAt = new Date(updatePodcastDto.publishedAt);
        }
        return this.prisma.podcastEpisode.update({
            where: { id },
            data,
        });
    }

    remove(id: string) {
        return this.prisma.podcastEpisode.delete({
            where: { id },
        });
    }
}
