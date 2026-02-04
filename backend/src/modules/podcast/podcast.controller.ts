import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { PodcastService } from './podcast.service';
import { CreatePodcastDto } from './dto/create-podcast.dto';
import { UpdatePodcastDto } from './dto/update-podcast.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('podcast')
export class PodcastController {
    constructor(private readonly podcastService: PodcastService) { }

    @Get()
    findAll() {
        return this.podcastService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.podcastService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createPodcastDto: CreatePodcastDto) {
        return this.podcastService.create(createPodcastDto);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    update(@Param('id') id: string, @Body() updatePodcastDto: UpdatePodcastDto) {
        return this.podcastService.update(id, updatePodcastDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.podcastService.remove(id);
    }
}
