import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('livros')
export class LivrosController {
    constructor(private readonly livrosService: LivrosService) { }

    @Get()
    findAll() {
        return this.livrosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.livrosService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createLivroDto: CreateLivroDto) {
        return this.livrosService.create(createLivroDto);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    update(@Param('id') id: string, @Body() updateLivroDto: UpdateLivroDto) {
        return this.livrosService.update(id, updateLivroDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.livrosService.remove(id);
    }
}
