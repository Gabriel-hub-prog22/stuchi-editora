import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AplicacoesService } from './aplicacoes.service';
import { CreateAplicacaoDto } from './dto/create-aplicacao.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('aplicacoes')
export class AplicacoesController {
    constructor(private readonly aplicacoesService: AplicacoesService) { }

    @Post()
    create(@Body() createAplicacaoDto: CreateAplicacaoDto) {
        return this.aplicacoesService.create(createAplicacaoDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        return this.aplicacoesService.findAll();
    }
}
