import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ImprensaService } from './imprensa.service';
import { CreateImprensaDto } from './dto/create-imprensa.dto';
import { UpdateImprensaDto } from './dto/update-imprensa.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('imprensa')
export class ImprensaController {
    constructor(private readonly imprensaService: ImprensaService) { }

    @Get()
    findAll() {
        return this.imprensaService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.imprensaService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createImprensaDto: CreateImprensaDto) {
        return this.imprensaService.create(createImprensaDto);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    update(@Param('id') id: string, @Body() updateImprensaDto: UpdateImprensaDto) {
        return this.imprensaService.update(id, updateImprensaDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.imprensaService.remove(id);
    }
}
